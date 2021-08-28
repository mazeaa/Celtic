const app = require('express')();

app.get('/', (req, res) => res.send('Imagine subbing to Hyper Aoi-js'));

module.exports = () => {
  app.listen(3000);
}
