const getDatabase = require('../db')

module.exports = async (req, res) => {
  const db = await getDatabase();

  await db.collection("articles").insertOne(req.body);

  res.send({
    status: 'success'
  });
}
