const mongoose = require("mongoose");

const { Schema } = mongoose;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
