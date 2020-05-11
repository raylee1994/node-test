var express = require("express");
var router = express.Router();

router.get("/finance/organ/rebateList", (req, res) => {
    res.render("organRebateList", { title: 'organRebateList' })
})
router.get("/finance/organ/rebateDetail", (req, res) => {
    res.render("organRebateDetail", { title: 'organRebateDetail' })
})

module.exports = router