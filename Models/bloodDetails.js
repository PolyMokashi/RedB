const mongoose = require("mongoose")
const blood_details = new mongoose.Schema({
    coldate:String,
    expdate: String,
    bloodgrp:String,
    haemog:String,
    platelate:String,
    quantity:String
})

const bloodDetails= mongoose.model("blood_details",blood_details);
module.exports = bloodDetails;