const express = require("express");
const router = express.Router();
const fs = require("fs");
const FILE_PATH = "./data/wineriesDetails.json";

//reading local json file
const readWineriesDetails = () =>{
    const wineriesDetailsData = fs.readFileSync(FILE_PATH);
    const parsedWineriesDetails = JSON.parse(wineriesDetailsData);
    return parsedWineriesDetails;
}

// get videos
router.get('/', (req, res) =>{
    res.send(readWineriesDetails());
});


module.exports = router;