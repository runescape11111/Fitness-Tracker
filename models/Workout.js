const mongoose = require("mongoose");

const { Schema } = mongoose;

const WorkoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now,
	},
  exercises: [
    {
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
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;