const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000; // Fixed port for testing



// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


//climate crisis website link: https://regal-dusk-c6a442.netlify.app
app.get('/climate-crisis', (req, res) => {
  console.log('Redirecting to Climate Crisis');
  res.redirect(302, 'https://regal-dusk-c6a442.netlify.app');
});

// typesetting website link: https://happyluis3.github.io/typesetting/
app.get('/typesetting', (req, res) => {
  console.log('Redirecting to Typesetting');
  res.redirect(302, 'https://happyluis3.github.io/typesetting/');
});


//four algo website link: https://happyluis3.github.io/assignment1/
app.get('/four-algorithms', (req, res) => {
  console.log('Redirecting to Four Algorithms');
  res.redirect(302, 'https://happyluis3.github.io/assignment1/');
});

// Error handling
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});