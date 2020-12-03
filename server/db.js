const { Pool } = require('pg')
const pool = new Pool({
  user: 'ryanweaver',
  database: 'phonepals',
  port: 3211,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})