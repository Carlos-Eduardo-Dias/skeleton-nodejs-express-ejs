let connect = function() {
  if (global.connection) {
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://mcbzopjk:WEX6HSugufvO6JYjCjIwFsi6S9Ez5vkp@kesavan.db.elephantsql.com/mcbzopjk"
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { connect }