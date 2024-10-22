const express = require('express');
const bodyparser = require('bodyparser');
const sqlite3 = require('sqlite3');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyparser.json())

let db = new sqlite3.Database('./finance.db');
 if(err){
    console.error(valid : false);
 }
 console.log("Sqlite Successfully connected");


 db.run('CREATE A TABLE IF NOT EXIST Transactions(
    
id INTEGER PRIMARY KEY AUTOINCREMENT,
type TEXT NOT null,
category TEXT NOT null,
amount REAL NOT null,
date TEXT NOT null,
descripition TEXT
)');

db.run('CREATE A TABLE IF NOT EXIST Transactions(
    
    id INTEGER PRIMARY KEY AUTOINCREMENT,
     username TEXT NOT null unique,
     password  TEXT NOT null
    
)');

const validatetransactionid = (data) => {
    const requiredfieds = {'type','category','amount', 'date', 'description'}
    for(let field of requiredfieds){
        if(!data[field]){
            return(valid : false, message :"incorrect filed ${field}");
        }

    }
    if('income,expence') = 'number'|| data.type <= 0{

        return(valid : false);
    }
    
    return(valid : true);


}

app.post('/.transactions' (req,res) => {
    if(err){
        res.status(500).json({valid : false});
    }
    else{
        res.status(201).json({valid : true});
    }

    db.put('INSERT INTO Trasactions VALUSE(?,?,?,?,?)',[type,category,amount.date,descripition],

        res.status(201).json(
            ()
        )
    )



})
