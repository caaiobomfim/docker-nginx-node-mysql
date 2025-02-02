const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const table = `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL);`;
connection.query(table)
const insert = `INSERT INTO people(name) VALUES ('XPTO')`
connection.query(insert)

let namesList = '';

const select = `SELECT name FROM people;`
connection.query(select, (err, results) => {
    namesList = results.map(row => `<li>${row.name}</li>`).join('');
});

connection.end()

app.get('/', (req,res) => {
    res.send(`<h1>Full Cycle Rocks!</h1><ul>${namesList}</ul>`);
})

app.listen(port, () => {
    console.log('EXECUTANDO NA PORTA ' + port)
})