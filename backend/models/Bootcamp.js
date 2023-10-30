const mongoose = require("mongoose");
const { Schema } = mongoose; // ObjectId is a special datat type we have to import

const bootcampSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    img: String,
    stateId: Schema.Types.ObjectId 
},
{
    timestamps: true
})
//  bootcamp points to "bootcamps" collection
const Bootcamp = mongoose.model('bootcamp', bootcampSchema)
module.exports= Bootcamp;