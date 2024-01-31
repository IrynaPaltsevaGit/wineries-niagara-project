require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const wineriesRoutes = require("./routes/wineriesRoutes.js");

const PORT = 8080; // process.env.PORT || 8081;
const CLIENT_URL = process.env.CLIENT_URL;

app.use(cors());
app.use(express.json());

// app.get("/", function(req,res){
//     res.send('Welcome');
//     console.log('I received a GET request!');
// });

app.use('/wineries', wineriesRoutes);

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});