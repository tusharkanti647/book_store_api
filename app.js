const dotenv = require("dotenv");
const cors = require('cors');
const express = require("express");
const DefaultData = require("./data");
const app = express();



dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

require("./connection");


app.use(cors());
app.use(require("./router/auth"));

// app.get("/", (req, res) => {
//     res.send("welcome my root page");
// });

// app.get("/about", (req, res) => {
//     res.send("welcome my about about page");
// });




app.listen(port, () => {
    console.log(`connect my backend surver at ${port} port`);
});

//DefaultData();