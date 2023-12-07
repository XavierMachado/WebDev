const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors'); // Import the cors package
const readline = require('readline');

const app = express();
const port = 8000;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getDatabaseConfig = async () => {
  const host = 'localhost';

  const questionAsync = (prompt) =>
    new Promise((resolve) => rl.question(prompt, resolve));

  const user = await questionAsync('Enter username: ');
  const password = await questionAsync('Enter password: ');

  rl.close();

  return {
    host,
    user,
    password,
    database: 'INVENTORY',
  };
};

const startServer = async () => {
  const databaseConfig = await getDatabaseConfig();

  const connection = await mysql.createConnection(databaseConfig);

  // Use the cors middleware
  app.use(cors());

  app.get('/api/inventory', async (req, res) => {
    try {
      const [rows] = await connection.execute('SELECT * FROM INVENTORY');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
