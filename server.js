const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require('./app/routes');

const dbConnection = require('./app/config/connection')



dotenv.config();
const PORT = process.env.PORT



var corsOptions = { origin: "*" };
const app = express();
app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({limit: '50mb'}));
app.use(cors(corsOptions))



app.get("/", (req, res) => {
    res.json({ message: "Welcome To Application." });
});

dbConnection.db_connect()  


    



app.use(routes);


app.listen(PORT, () => {
    console.log(`Server Running On ip:${PORT}`)
})