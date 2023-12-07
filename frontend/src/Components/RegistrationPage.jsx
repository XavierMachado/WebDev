import React from 'react';

const RegistrationPage = () => {
  return (
    <div>
      <header>
        <h1>Registration Page</h1>
      </header>
      <form action="/RegistrationPage" method="post">
        <div>
          <label htmlFor="name">User</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <section>
          <button type="submit">Register</button>
        </section>
        <a href="/LoginPage">Login</a>
      </form>
    </div>
  );
};

export default RegistrationPage;
