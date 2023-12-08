const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const readline = require('readline');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

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

  app.post('/', async (req, res) => {
    try {
      const { name, quantity, price } = req.body;
  
      const [existingItem] = await connection.execute(`SELECT * FROM inventory WHERE name = ?`, [name]);
      if (existingItem.length > 0) {
        await connection.execute(
          `UPDATE inventory SET quantity = ?, price = ? WHERE name = ?`,
          [quantity, price, name]
        );
        res.send('Updated successfully');
      } else {
        // Item does not exist, insert a new record
        await connection.execute(`INSERT INTO inventory (name, quantity, price) VALUES (?, ?, ?)`, [name, quantity, price]);
        res.send('Added successfully');
      }
    } catch (error) {
      console.error('Error adding/editing inventory:', error);
      res.status(500).send(error);
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

  async function getUserByEmail(email) {
    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  }

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Authenticate user
    const user = await getUserByEmail(email);
  
    if (user == null) {
      return res.status(400).send('Cannot find user');
    }
  
    try {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ username: user.username }, SECRET_KEY);
        res.json({ token });
      } else {
        res.status(401).send('Invalid password');
      }
    } catch (error) {
      console.error('Error comparing passwords:', error);
      res.status(500).send('Internal Server Error');
    }
    console.log('asdfasdfasdf')
  });


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();