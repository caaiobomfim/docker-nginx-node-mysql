const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const create = `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL);`;
const insert = `INSERT INTO people(name) VALUES ('XPTO')`;
const select = `SELECT name FROM people;`;

function connectWithRetry(attempt = 1) {
    console.log(`Attempting to connect to MySQL (Attempt ${attempt})...`);
    const connection = mysql.createConnection(config);

    connection.connect(err => {
        if (err) {
            console.error(`MySQL connection failed: ${err.message}`);
            setTimeout(() => connectWithRetry(attempt + 1), 5000);
        } else {
            console.log('Connected to MySQL!');

            connection.query(create, (err) => {
                if (err) {
                    console.error('Error creating table:', err);
                    return;
                }
                console.log('Table created or already exists.');

                connection.query(insert, (err) => {
                    if (err) {
                        console.error('Error inserting data:', err);
                        return;
                    }
                    console.log('Data inserted.');

                    connection.query(select, (err, results) => {
                        if (err) {
                            console.error('Error fetching names:', err);
                            return;
                        }

                        const namesList = results.map(row => `<li>${row.name}</li>`).join('');
                        console.log('Names retrieved before server starts:', namesList);

                        app.get('/', (req, res) => {
                            res.send(`<h1>Full Cycle Rocks!</h1><ul>${namesList}</ul>`);
                        });

                        app.listen(port, () => {
                            console.log(`Server running on port ${port}`);
                        });

                        connection.end();
                    });
                });
            });
        }
    });
}

connectWithRetry();