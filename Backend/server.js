const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const readline = require('readline');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getDatabaseConfig = async () => {
  const host = '18.207.187.185';

  const questionAsync = (prompt) =>
    new Promise((resolve) => rl.question(prompt, resolve));

  const user = await questionAsync('Enter username: ');
  const password = await questionAsync('Enter password: ');

  rl.close();

  return {
    host: host,
    user: user,
    password: password,
    database: 'inventory',
  };
};

const startServer = async () => {
  const databaseConfig = await getDatabaseConfig();
  const connection = await mysql.createConnection(databaseConfig);

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', async (req, res) => {
    try {
      const [rows] = await connection.execute('SELECT * FROM inventory');
      res.json(rows);
    } catch (error) {
      console.error('Error in /api/inventory route:', error);

      if (error instanceof mysql.Error) {
        res.status(500).send('Internal Server Error (MySQL)');
      } else {
        res.status(500).send('Internal Server Error');
      }
    }
  });

  app.delete('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      await connection.execute(`DELETE FROM inventory WHERE id=${id}`);
      res.send('Deleted successfully');
    } catch (error) {
      console.error('Error in /api/inventory route:', error);

      if (error instanceof mysql.Error) {
        res.status(500).send('Internal Server Error (MySQL)');
      } else {
        res.status(500).send('Internal Server Error');
      }
    }
  });

  app.post('/', async (req, res) => {
    try {
      const { name, quantity, price } = req.body;

      // Execute the INSERT query without specifying the ID
      const [result] = await connection.execute(
        'INSERT INTO inventory (name, quantity, price) VALUES (?, ?, ?)',
        [name, quantity, price]
      );

      // Check if the item was added successfully
      if (result.affectedRows > 0) {
        res.status(201).send('Item added successfully');
      } else {
        res.status(500).send('Failed to add item');
      }
    } catch (error) {
      console.error('Error in POST /api/inventory route:', error);

      if (error instanceof mysql.Error) {
        res.status(500).send('Internal Server Error (MySQL)');
      } else {
        res.status(500).send('Internal Server Error');
      }
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();