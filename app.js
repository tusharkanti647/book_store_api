const dotenv = require("dotenv");
const express = require("express");
const app = express();



dotenv.config({ path: "./config.env" });
const port = process.env.PORT;





app.get("/", (req, res) => {
    res.send("welcome my root page");
});

app.get("/about", (req, res) => {
    res.send("welcome my about about page");
});




app.listen(port, () => {
    console.log(`connect my backend surver at ${port} port`);
})