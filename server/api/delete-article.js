const getDatabase = require('../db')
const {ObjectId} = require('mongodb')

module.exports = async (req, res) => {
  const db = await getDatabase();

  await db.collection("articles").deleteOne({ _id: ObjectId(req.params.id) });

  res.send({
    status: 'success'
  });
}
