const mysql = require('mysql');

const connMySQL = () => {
  return connection =  mysql.createConnection({
    host: 'bzz6u5zfgczrdltbb9gh-mysql.services.clever-cloud.com',
    user: 'uo8mgxgsr1488svt',
    password: '4oOQEsWdKGBwKN10UQfC',
    database: 'bzz6u5zfgczrdltbb9gh'
  });
}
module.exports = () => {
  return connMySQL;
}