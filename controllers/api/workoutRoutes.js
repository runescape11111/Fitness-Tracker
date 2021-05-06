const db = require("../../models");
const router = require("express").Router();

//get all workouts
router.get("/", async (req,res) => {
    try {
        const lastOne = await db.Workout.find({}).sort({ _id: 1 });
        res.status(200).json(lastOne);
    } catch (error) {
        res.status(500).json(error);
    }
});

//post new workout
router.post("/", async (req,res) => {
    try {
        const newOne = await db.Workout.create(req.body);
        res.status(200).json(newOne);
    } catch (error) {
        res.status(500).json(error);
    }
})

//add exercise to workout
router.put("/:id", async (req,res) => {
    try {
        const newExer = await db.Workout.findByIdAndUpdate(req.params.id,
            { $push: { exercises: req.body } },
            { new: true, runValidators: true}
            );
        res.status(200).json(newExer);
    } catch (error) {
        res.status(500).json(error);
    }
});

//
router.get("/range", async (req,res)=> {
    try {
        const range = db.Workout.find({}).limit(7).sort({ _id: 1});
        res.status(200).json(range);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;