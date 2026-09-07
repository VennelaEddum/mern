const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { title: 'User Registration',
    error: null,
    user: null 
    });
});

app.post('/register', (req, res) => {
  const { username, age} = req.body;
  let errorMessage = null;

  if (!username || username.length<3) {
    errorMessage = 'Username must be at least 3 characters long.';
  } else if (!age || isNaN(age) || age < 18) {
    errorMessage = 'Age must be a number and at least 18.';
  }

  if (errorMessage) {
    res.render('index', { title: 'Registration Failed',
      error: errorMessage,
      user: null
    });
  } else {
    // Process the valid user data (e.g., save to database)
    res.render('index', { title: 'Registration Successful',
      error: null,
      user: username
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});