const db = require("../models");

const Skill = db.skill;

//1. create experience
const addSkill = async (req, res) => {
  let info = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
  };

  const skills = await Skill.create(info);
  res.status(200).send(skills);
  console.log(skills);
};

// 2. get all experiences

const getAllSkills = async (req, res) => {
  let skills = await Skill.findAll({});
  res.status(200).send(skills);
};

// 3. get single experience

const getOneSkill = async (req, res) => {
  let id = req.params.id;
  let skills = await Skill.findOne({ where: { id: id } });
  res.status(200).send(skills);
};

// 4. update experience

const updateSkill = async (req, res) => {
  let id = req.params.id;
  const skills = await Skill.update(req.body, { where: { id: id } });

  res.status(200).send(skills);
};

// 5. delete experience by id

const deleteSkill = async (req, res) => {
  let id = req.params.id;
  await Skill.destroy({ where: { id: id } });
  res.status(200).send("Skill deleted");
};

module.exports = {
  addSkill,
  getAllSkills,
  getOneSkill,
  updateSkill,
  deleteSkill,
};
