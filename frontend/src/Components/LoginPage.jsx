import React from 'react';

const LoginPage = ({ message }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
        <link rel="stylesheet" type="text/css" href="/css/login.css" />
      </head>
      <body>
        <h1>Login Page</h1>
        {message && <p>{message}</p>}
        <form action="/LoginPage" method="post">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <section>
            <button type="submit">Login</button>
          </section>
          <a href="/RegistrationPage">Create Login</a>
        </form>
      </body>
    </html>
  );
};

export default LoginPage;
