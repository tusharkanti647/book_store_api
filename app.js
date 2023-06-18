const dotenv = require("dotenv");
const cors = require('cors');
const express = require("express");
//const DefaultData = require("./data");
const app = express();



dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 8000;

require("./connection");


app.use(cors());
app.use(require("./router/auth"));





app.listen(port, () => {
    console.log(`connect my backend surver at ${port} port`);
});

//DefaultData();