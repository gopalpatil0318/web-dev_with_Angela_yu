import express from "express";
const app = express();
const port = 3000;


app.get('/',(req, res) =>{
    res.send("<h1>Hello world Baby<h1>");
})

app.get('/contact',(req, res) =>{
    res.send("<h1>9021386468<h1>");
})

app.get('/about',(req, res) =>{
    res.send("<h1>About baby<h1>");
})


app.listen(port, ()=>{
    console.log(`Server is run on port ${port}`)
})