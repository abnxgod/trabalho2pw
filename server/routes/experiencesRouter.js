const experiencesController = require("../controllers/experiencesController");

const router = require("express").Router();
const { authRequired } = require("../jwt");

router.post("/addExperience", experiencesController.addExperience);

router.get("/allExperience", experiencesController.getAllExperiences);

router.get("/:id", experiencesController.getOneExperience);

router.put("/:id", experiencesController.updateExperience);

router.delete("/:id", experiencesController.deleteExperience);

module.exports = router;
