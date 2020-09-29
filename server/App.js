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

//------post: login employeenumber and password to validate in backend
app.post("/post/login", (req, res)=>{
        
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

                if(req.session.user){
                    console.log({loggedIn: true, user: req.session.user})
                }else{
                    console.log({loggedIn: false})
                }
                
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

// //------get: direct to taskmanagement page after successful login
// app.get('/get/login', (req, res) => {
            
//     if(req.session.user){
//         console.log({loggedIn: true, user: req.session.user})
//     }else{
//         console.log({loggedIn: false})
//     }
// });

 //------get: logout
 app.get("/logout", (req, res)=>{
    if(req.session.user){
        res.clearCookie('userID');
        res.send({loggedIn: false})
    }    
});

//------post: add employee information 
app.post('/api/post/addEmployee', (req, res) => {

           
    const employeeNumber = req.body.employeeNumber;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const positionTitle = req.body.positionTitle;
                      
    const sqlInsert = ("INSERT INTO TaskManagementDatabase.employee (employeeNumber, firstName, lastName, positionTitle) VALUES (?,?,?,?);")
    db.query(sqlInsert,[employeeNumber, firstName, lastName, positionTitle], (err, results)=> {
        if(err){
            
            console.log(err);
        }

        console.log(results);
    });
});

  //------update: update employee dets from list
  app.put('/api/update/updateEmployeeDetail', (req, res)=>{
    const employeeNumber = req.body.employeeNumber;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const positionTitle = req.body.positionTitle;
    const sqlUpdate = "UPDATE TaskManagementDatabase.employee SET firstName = ?, lastName = ?, positionTitle =? WHERE employeeNumber = ?"

    db.query(sqlUpdate, [firstName, lastName, positionTitle, employeeNumber], (err, result)=>{

        if(err) {
            
            console.log(err);
        }

    });
});

//------get: added employee information
app.get('/api/get/employeeList', (req, res)=>{
    const sqlSelect = ("SELECT * FROM TaskManagementDatabase.employee;")
    db.query(sqlSelect, (err, results)=> {
        if(err){
            
            console.log(err);
        }

        res.send(results);
    });
});

//------delete: delete employee from list
app.delete('/api/delete/:employeeNumber', (req, res)=>{
    const name = req.params.employeeNumber;
    const sqlDelete = "DELETE FROM TaskManagementDatabase.employee WHERE employeeNumber = ?"

    db.query(sqlDelete, name, (err, result)=>{

        if(err) {
            
            console.log(err);
        }

    });
});

//------get: user information
app.get('/api/get/user', (req, res)=>{
        
    const sqlSelect = ("SELECT employeeNumber, firstName, lastName, positionTitle FROM TaskManagementDatabase.user;")
    db.query(sqlSelect, (err, results)=> {
        if(err){
            
            console.log(err);
        }

        res.send(results);
    });
});

//------update: user information
app.put('/api/update/updateUserDetail', (req, res)=>{
    const employeeNumber = req.body.employeeNumber;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const sqlUpdate = "UPDATE TaskManagementDatabase.user SET employeeNumber = ?, firstName = ?, lastName = ?, password = ?"

    db.query(sqlUpdate, [employeeNumber, firstName, lastName, password], (err, result)=>{

        if(err) {
            
            console.log(err);
        }

    });
});

//-------get employee for modal dropdown menu
app.get('/get/assignEmployee', (req, res)=>{
    const sqlSelect = ("SELECT firstName, lastName FROM TaskManagementDatabase.employee;")
    db.query(sqlSelect, (err, results)=> {
        if(err){
            
            console.log(err);
        }

        res.send(results);
    });
});
//settin up the server
app.listen(3002, ()=> {
    console.log("running on port 3002");
});