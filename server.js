import express from "express";
const app = express();
const PORT = 8000;
import sum from "./sum.js"

app.listen(PORT, ()=>{
    console.log(`server is listen on ${PORT}`);
})


app.get("/home", (req, res)=>{
    res.json({
        msg: "I am root!"
    })
})

app.get("/getSum/:a/:b", (req, res)=>{
    let {a, b} = req.params;

    res.json({
        ans: sum(parseInt(a), parseInt(b))
    })
})