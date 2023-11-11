//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import Express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = Express();
const port = 3000;

var pass = "";

app.use(bodyParser.urlencoded({ extended: true }));

var userIsAuthorised = false;


function getPass(req, res, next) {
    console.log(req.body)
    pass = req.body["password"];
    if (pass === "gopal"); {
        userIsAuthorised = true;
    }

    next();
}

app.use(getPass);



app.get("/", (req, res) => {

    res.sendFile(__dirname + "/public/index.html");

})

app.post("./check", (req, res) => {
    console.log(pass);
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html")
    }
    else
    {
        res.sendFile(__dirname+ "/public/secret.html");
    }
    // if (pass === "gopal") {

    //     
    // }
    // else {
    //     res.send("<h1>Wrong password<h1>");
    // }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})