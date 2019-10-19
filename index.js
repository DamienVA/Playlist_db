/**
 * @see {@link https://www.npmjs.com/package/promise-mysql}
 */
const mysql = require('promise-mysql');

/**
 * Bring DB config in from separate file
 * to keep logic clean.
 */
const conf = require('./config.js');

/**
 * Main entry point to script
 * This is an 'async' function
 * @see {@link https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await}
 */
async function run() {
  const connection = await mysql.createConnection(conf);
  await readSongs(connection);
  connection.end();
}

run();

/**
 * Reads all songs from the DB
 * @param {Promise} connection
 * @return {Promise}
 */
function readSongs(connection) {
  console.log('Selecting all songs...\n');
  return connection.query(
      'SELECT title FROM songs WHERE genre = ?',
      ['Pop']
  )
      .then((res) => {
        console.log(res);
      });
}
