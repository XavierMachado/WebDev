const express = require('express');
const mysql = require('mysql');
const { getpass } = require('getpass');

const app = express();
const port = 8000;

const getDatabaseConfig = async () => {
  const host = 'localhost';
  const user = await new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question('Enter username: ', (username) => {
      readline.close();
      resolve(username);
    });
  });

  const password = getpass('Enter password: ');

  return {
    host,
    user,
    password,
    database: 'INVENTORY', // Set your database name here
  };
};

const startServer = async () => {
  const databaseConfig = await getDatabaseConfig();

  const connection = mysql.createConnection(databaseConfig);

  connection.connect();

  app.get('/api/data', (req, res) => {
    connection.query('SELECT * FROM your_table', (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
