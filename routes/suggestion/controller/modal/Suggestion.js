const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema({
    tittle:{
        type: String, lowercase: true, unique: true, required: true,
    },
    author:{
        type: String, lowercase: true,
    },
    suggestion:{
        type: String, lowercase: true, required: true,
    },
    likes:{
        type: Number, default: 0,
    },
    anonymous:{
        type: Boolean,
    },
    timeCreated: {
        type: Date,
        default: Date.now,
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("suggestion", suggestionSchema);