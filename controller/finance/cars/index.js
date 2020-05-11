var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/finance/cars/carsList", (req, res) => {
    res.render(path.join(__dirname, "view", "carsList"), { title: 'carsList' })
})
router.get("/finance/cars/carsDetail", (req, res) => {
    console.log(req.xhr)
    // res.json({a: 1}) 
    res.render(path.join(__dirname, "view", "index"), { title: 'carsDetail' })
})

module.exports = router