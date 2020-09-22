const express = require("express");
const mysql = require('mysql');
const bodyParser = require("body-parser")
const cors = require('cors')
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'TaskManagementDatabase',
});

app.use(session({
    key: "userID",
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
                 },
    })
);

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// ----- START-----

//post: login employeenumber and password to validate in backend
app.post("/api/posts/login", (req, res)=>{
        
    const employeeNumber = req.body.employeeNumber;
    const password = req.body.password;
    const checkLogin = "SELECT * FROM TaskManagementDatabase.user WHERE (employeeNumber = ? AND password = ?);"

    if(employeeNumber && password){
        db.query(checkLogin, [employeeNumber, password], (err, results) =>{
            
            if(err){
                console.log(err);
            }

            if(results.length > 0){
                req.session.user = results;
                console.log("login successful");
                console.log(req.session.user);
                // res.redirect("/api/gets/Login");
            }else{
                console.log('Incorrect Employee ID and/or Password!');
            }
            res.end();
        });
    } else{
        console.log('Please enter Employee ID and Password! ');
        res.end();
    }
    
});

//get: direct to taskmanagement page after successful login
app.get('/api/gets/Login', (req, res) => {
            
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user})
        
    }else{
        res.send({loggedIn: false})
    }
    res.end();
});


//settin up the server
app.listen(3001, ()=> {
    console.log("running on port 3001");
});