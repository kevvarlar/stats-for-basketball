const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/:team', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});