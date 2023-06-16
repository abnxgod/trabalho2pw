const skillsController = require("../controllers/skillsController");

const router = require("express").Router();

router.post("/addSkill", skillsController.addSkill);

router.get("/allSkill", skillsController.getAllSkills);

router.get("/:id", skillsController.getOneSkill);

router.put("/:id", skillsController.updateSkill);

router.delete("/:id", skillsController.deleteSkill);

module.exports = router;
