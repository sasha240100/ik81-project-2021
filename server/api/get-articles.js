const getDatabase = require('../db')

module.exports = async (req, res) => {
  const db = await getDatabase();

  const articles = await db.collection("articles").find().toArray();

  res.send(articles);
}
