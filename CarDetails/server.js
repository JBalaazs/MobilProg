const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cardetails'
});

db.connect((err) => {
    if (err) 
    {

        throw err;

    }
    console.log('MySQL connected');
});

app.get('/', (req, res) => {
    res.send('Hello from server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.post('/api/data/cars/upload', (req, res) => {

    const {brand, model, color, registrationNumber} = req.body;

    const sql = 'INSERT INTO cars(brand, model, color, registrationNumber) VALUES (?, ?, ?, ?)';

    db.query(sql, [brand, model, color, registrationNumber], (err, result) => {

        if(err)
        {
            res.status(500).json({message: "Something wrong during upload."})
        }
        else
        {
            res.status(200).json({message: "Successful upload."})
        }

    });

});

app.get('/api/data/cars', (req, res) => {

    let sql = 'SELECT * FROM cars';

    db.query(sql, (err, result) => {

        if(err)
        {

            throw err;

        }
        else
        {

            res.json(result);

        }

    });

});

app.put('/api/data/cars/update', (req, res) => {

    const {brand, model, color, registrationNumber, Id} = req.body;

    const sql = 'UPDATE cars SET brand=?, model=?, color=?, registrationNumber=? WHERE Id=?';

    db.query(sql, [brand, model, color, registrationNumber, Id], (err, result) => {

        if(err)
        {
            res.status(500).json({message: 'Something wrong during update.'})
        }
        else
        {
            res.status(500).json({message: 'Successful update.'})
        }

    }); 

});

app.delete('/api/data/cars/delete', (req, res) => {

    const {Id} = req.body;
    
    const sql = 'DELETE FROM cars WHERE Id=?';

    db.query(sql, [Id], (err, result) => {

        if(err)
        {

            res.status(500).json({message: 'Something wrong during delete.'});

        }
        else
        {

            res.status(200).json({message: 'Successful delete.'});

        }

    });

});