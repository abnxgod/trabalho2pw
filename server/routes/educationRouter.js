const educationController = require("../controllers/educationController");

const router = require("express").Router();
const { authRequired } = require("../jwt");

router.post("/addEducation", authRequired, educationController.addEducation);

router.get("/allEducation", educationController.getAllEducation);

router.get("/:id", authRequired, educationController.getOneEducation);

router.put("/:id", authRequired, educationController.updateEducation);

router.delete("/:id", authRequired, educationController.deleteEducation);

module.exports = router;
