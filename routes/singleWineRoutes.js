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
router.get('/:id', (req, res) =>{
    console.log(req.params)
    res.send(
        
        readWineriesDetails().find(winery => winery.id === req.params.id)
        );
});


module.exports = router;