require('dotenv').config()

module.exports = {
  "serverUrl": `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
  "database": "AHCH_TEST_DB"
}

// module.exports = {
//   "serverUrl": `mongodb://localhost:27017/`,
//   "database": "AHCH_TEST_DB"
// }