const express = require('express')
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Oneplus@7',
    database: "csn_database",
});


app.post("/signup", (req, res) => {
    console.log("signup")
    const emailid = req.body.emailid;
    const password = req.body.password;
    const userid = req.body.userid;
    db.query(
        "SELECT * FROM user WHERE user_emailid = ?", [emailid],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length !== 0 ) {
                res.send({ Message: "Email already exists" });
            }
            else {
                if (emailid.length > 0 && userid.length > 0 && password.length > 0) {
                    db.query(
                        "INSERT INTO user (user_id,user_emailid,user_password) VALUES (?,?,?)", [userid, emailid, password],
                        (err1, res1) => {
                            if (err1) {
                                res.send({ err: err1 });
                            }
                            if (res1) {
                                res.send({ message: "User registered sucessfully" });
                            }
                            else {
                                res.send({ message: "Error in registering try again later" });
                            }
                        }
                    );
                }
            }
        }
    );
});

app.get("/home", (req, res) => {
    console.log("films listing");
    db.query(
        "SELECT * FROM movie",
        (err, result) => {
            if (err) {
                res.send({ err: 1, data : null });
            }
            if (result.length !== 0) {
                res.send({ err: 0, data: result });
            }
            else {
                res.send({ err : 1,data : "No movies are in the data base" });
            }
        }
    );
});

app.post("/signin", (req, res) => {
    console.log("signin")
    const emailid = req.body.emailid;
    const password = req.body.password;

    db.query(
        "SELECT * FROM user WHERE user_emailid = ?", [emailid],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length !== 0) {
                if (password.localeCompare(result[0].user_password) === 0) {
                    res.send({ err: 0, result: result[0] });
                    console.log({ err: 0, result: result[0] });
                }
                else {
                    console.log({ err: 1, result: "Password is Incorrect" });
                    res.send({ err: 1, result: "Password is Incorrect"});
                }
            }else
            {
                res.send({ message: "No User exits!" });
            }
        }
    );
});


app.get("/lists", (req, res) => {
    console.log("finding lists");
    db.query(
        "SELECT * FROM list",
        (err, result) => {
            if (err) {
                res.send({ err: 1, data: null });
            }
            if (result.length !== 0) {
                res.send({ err: 0, data: result });
            }
            else {
                res.send({ err: 1, data: "No lists found in the data base" });
            }
        }
    );
});

app.get("/actor", (req, res) => {
    console.log("fetching actor info")
    const actor = req.body.actor;

    db.query(
        "SELECT * FROM actor WHERE actor_id = ?", [actor],
        (err, result) => {
            if (err) {
                res.send({ err: 1, data: null });
            }
            if (result.length !== 0) {
                res.send({ err: 0, data: result });
            }
            else {
                res.send({ err: 1, data: "actor not found in the data base" });
            }
        }
    );
});

app.get("/cast", (req, res) => {
    console.log("fetching cast info")
    const movie_id = req.body.movie_id;

    db.query(
        "SELECT * FROM actor as ac LEFT OUTER JOIN cast as ca ON ca.actor_id = ac.actor_id WHERE ca.movie_id = ?",[movie_id],
        (err, result) => {
            if (err) {
                res.send({ err: 1, data: null });
            }
            if (result.length !== 0) {
                console.log(result);
                res.send({ err: 0, data: result });
            }
            else {
                res.send({ err: 2, data: "No cast in database for this film" });
            }
        }
    );
});

app.get("/movie", (req, res) => {
    console.log("fetching cast info")
    //const movie_id = req.body.movie_id;
    const movie_id = 3;

    db.query(
        "SELECT * FROM movie WHERE movie_id = ?", [movie_id],
        (err0, result0) => {
            if (err0) {
                res.send({ err: 1, data : "No movie data", cast: null });
            }
            if (result0.length !== 0) {
                db.query(
                    "SELECT * FROM actor as ac LEFT OUTER JOIN cast as ca ON ca.actor_id = ac.actor_id WHERE ca.movie_id = ?", [movie_id],
                    (err, result) => {
                        if (result.length !== 0) {
                            res.send({ err: 0, data : result0, cast: result });
                            }
                        if (result.length === 0) {
                            res.send({ err: 2, data : result0, cast: "No cast Found for this film" });
                        }
                    }
                );

            }
            if (result0.length === 0) {
                res.send({ err: 1, data : "No movie found in database", cast: null });
            }
        }
    );

    
});




app.listen(3001, () => {
    console.log("running");
});