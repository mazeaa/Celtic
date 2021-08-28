const app = require('express')();

app.get('/', (req, res) => res.send('Simple Discord Bot Template By MrWaw, Make your 24/7 discord bot for free at https://repl.it/@MrWaw/Simple-Discord-Bot'));

module.exports = () => {
  app.listen(3000);
}