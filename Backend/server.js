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
  const host = '18.207.187.185'; //Instead of the localhost database, this SHOULD be the database hosted in mySQL.  OLD CODE: const host = 'localhost';

  const questionAsync = (prompt) =>
    new Promise((resolve) => rl.question(prompt, resolve));

  const user = await questionAsync('Enter username: '); // ************ USER IS root
  const password = await questionAsync('Enter password: '); // **************** PASSWORD IS password

  rl.close();

  return {
    host      : host,
    user      : user,
    password  : password,
    database  : 'inventory',
  };
};

const startServer = async () => {
  const databaseConfig = await getDatabaseConfig();

  const connection = await mysql.createConnection(databaseConfig);

  // Use the cors middleware
  app.use(cors());

  app.get('/api/inventory', async (req, res) => {
    try {
      const [rows] = await connection.execute('SELECT * FROM inventory');
      res.json(rows);
    } catch (error) {
      console.error('Error in /api/inventory route:', error);
  
      if (error instanceof mysql.Error) {
        // Handle MySQL-specific errors
        res.status(500).send('Internal Server Error (MySQL)');
      } else {
        // Handle other types of errors
        res.status(500).send('Internal Server Error');
      }
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
