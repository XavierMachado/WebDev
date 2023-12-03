if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
  const express = require('express');
  const path = require('path');
  const app = express();
  const port = 3000;
  
  const bcrypt = require('bcrypt');
  const passport = require('passport');
  const flash = require('express-flash');
  const session = require('express-session');
  const methodOverride = require('method-override');
  const users = [];
  
  // Passport configuration
  const createPassport = require('./passportConfig');
  createPassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
  );
  
  // Set EJS as the view engine
  app.set('view engine', 'ejs');
  
  // Set the views directory
  app.set('views', path.join(__dirname, 'webpage'));
  
  // Serve static files from the 'public' directory
  app.use(express.static(path.join(__dirname, 'public')));
  
  // Middleware setup
  app.use(express.urlencoded({ extended: false }));
  app.use(flash());
  app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(methodOverride('_method'));
  
  // Routes
  
  // Middleware to check if the user is authenticated
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }
  
  // Middleware to check if the user is not authenticated
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/');
    }
    next();
    }
  
  // Login Page
  app.get('/', checkAuthenticated, (req, res) => {
    res.render('login');
  });
  
  app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login', { message: req.user ? req.user.message : null });
    });

  
  app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Implement your Passport authentication logic here
    passport.authenticate('local', {
      successRedirect: '/ticTacToe', // Redirect to the game on successful login
      failureRedirect: '/login',     // Redirect back to the login page on failure
      failureFlash: true
    })(req, res);
  });
  
  // Registration Page
  app.get('/registration', checkNotAuthenticated, (req, res) => {
    res.render('registration');
  });
  
  app.post('/registration', async (req, res) => {
    // const { name, email, password } = req.body;
    const { name, email} = req.body;
  
    try {
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      // Store user data in your 'users' array
      users.push({ id: Date.now().toString(), name, email, password: hashedPassword });
  
      // Redirect to the login page
      res.redirect('/login');
    } catch {
        console.error('Registration error:', error);

        // Redirect to the registration page with an error message
        res.redirect('/registration?error=1');
    }
    //console.log(users);
  });
  
  // Logout
  app.delete('/logout', (req, res) => {
    req.logout((err) => {
      if (err) {
        // Handle any errors that occurred during logout
        console.error('Logout error:', err);
        res.redirect('/ticTacToe?error=1');
      } else {
        // Successful logout
        res.redirect('/login');
      }
    });
  });
  
  
  // Tic Tac Toe Page
  app.get('/ticTacToe', (req, res) => {
    // Pass the 'name' variable to the 'ticTacToe' view
    res.render('ticTacToe', { name: req.user.name }); 
  });
  
  
// // Error handling for 404 Not Found and other errors
// app.use((req, res) => {
//     res.status(404).send('Page not found');
//   });
  
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  