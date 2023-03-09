const express = require("express")
const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
    school_name : {
        type : String,
        required : true,
    },
    principal : {
        type : String,
        required : true,
    },
    school_address : {
        type : String,
        required : true,
    },
    class_from : {
        type : Number,
        required : true,
    },
    class_to : {
        type : Number,
        required : true,
    }
});
//creating collection
const SchoolInfo = new mongoose.model('SchoolInfo',schoolSchema);

module.exports = SchoolInfo;