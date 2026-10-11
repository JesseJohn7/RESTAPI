const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('My first Node Js project taught by Claude AI Tutor!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 