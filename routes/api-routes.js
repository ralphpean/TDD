const mysql = require('mysql');
const dbConfig = require('../config/config.json')

// If the NODE_ENV is set, use that as our current environment
// Otherwise, default to "development" environment
const environment = process.env.NODE_ENV || "development";

module.exports = function(app) {

  // connect to DB as specified in our config file, based on current environment
  const conn = mysql.createConnection( dbConfig[environment] );

  conn.connect(function(err) {

    if (err) throw err;

    app.post('/api/users', function(req, res) {
      conn.query("INSERT INTO Users SET ?", req.body, function(err, data) {
        if (err) return res.json(err);
        else return res.json(data);
      });
    });

  });
};
