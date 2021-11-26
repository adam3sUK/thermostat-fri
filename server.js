const express = require('express');
const app = express();
const port = 3000;
let counter = 0;

app.get('/', (req, res) => {
  res.send('Hello, express!')
});

app.route('/counter')
  .get((req, res) => {
    res.send(`${counter}`)
  })
  .post((req, res) => {
    counter += 1;
    res.send("POST request to counter page")
  })
  .delete((req, res) => {
    counter = 0;
    res.send("DELETE request to counter page")
  })




console.log(`Server listening on ${port}`);
app.listen(port);