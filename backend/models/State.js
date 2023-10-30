const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
    name: { type: String, rquired: true, minLength: 2, maxLength: 2 },
    tax: { type: Number, required: true },
    tuitionAssistanceProgram: { type: Boolean, require: true },

},
{
    timestamps: true
})
//  state points to "states" collection
const State = mongoose.model('State', stateSchema)
module.exports= State;