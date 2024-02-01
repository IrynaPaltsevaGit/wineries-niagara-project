require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const wineriesRoutes = require("./routes/wineriesRoutes.js");
const wineriesDetailsRoutes = require("./routes/singleWineRoutes.js");

const PORT = 8080; // process.env.PORT || 8081;
const CLIENT_URL = process.env.CLIENT_URL;

app.use(cors());
app.use(express.json());

app.use("/files", express.static("./files"));

app.get("/", (req,res) =>{
    res.send('Welcome');
    console.log('I received a GET request!');
});

// app.get("/wine",(req, res, next) =>{
//     res.send("http://localhost:8080/files/types-of-wine-643846a6a95b4.jpg")
//   });

app.use('/wineries', wineriesRoutes);
app.use('/details/:id', wineriesDetailsRoutes);


app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});