const express = require("express");
const router = express.Router();
const fs = require("fs");
const FILE_PATH = "./data/wineries.json";

//reading local json file
const readWineries = () =>{
    const wineriesData = fs.readFileSync(FILE_PATH);
    const parsedWineries = JSON.parse(wineriesData);
    return parsedWineries;
}

// get videos
router.get('/', (req, res) =>{
    res.send(readWineries());
});


module.exports = router;
