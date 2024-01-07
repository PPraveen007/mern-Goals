const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMIddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);
//router.route means we are seeing if some one is seachering for "/" then will route him to getgoals or setgoal depend on the request it's get of post

router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
