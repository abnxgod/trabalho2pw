const db = require("../models");

// create main Model
const Experience = db.experience;

//1. create experience
const addExperience = async (req, res) => {
  let info = {
    title: req.body.title,
    time: req.body.time,
    description: req.body.description,
  };

  const experience = await Experience.create(info);
  res.status(200).send(experience);
  console.log(experience);
};

// 2. get all experiences

const getAllExperiences = async (req, res) => {
  let experiences = await Experience.findAll({});
  res.status(200).send(experiences);
};

// 3. get single experience

const getOneExperience = async (req, res) => {
  let id = req.params.id;
  let experience = await Experience.findOne({ where: { id: id } });
  res.status(200).send(experience);
};

// 4. update experience

const updateExperience = async (req, res) => {
  let id = req.params.id;
  const experience = await Experience.update(req.body, { where: { id: id } });

  res.status(200).send(experience);
};

// 5. delete experience by id

const deleteExperience = async (req, res) => {
  let id = req.params.id;
  await Experience.destroy({ where: { id: id } });
  res.status(200).send("Experience deleted, Abner.");
};

module.exports = {
  addExperience,
  getAllExperiences,
  getOneExperience,
  updateExperience,
  deleteExperience,
};
