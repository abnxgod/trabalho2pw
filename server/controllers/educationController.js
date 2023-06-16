const db = require("../models");

// create main Model
const Education = db.education;
// main work

//1. create education
const addEducation = async (req, res) => {
  let info = {
    instutition: req.body.instutition,
    time: req.body.time,
    description: req.body.description,
  };

  const education = await Education.create(info);
  res.status(200).send(education);
  console.log(education);
};

// 2. get all experiences

const getAllEducation = async (req, res) => {
  const educations = await Education.findAll({});
  res.send(educations);
};

// 3. get single experience

const getOneEducation = async (req, res) => {
  let id = req.params.id;
  let education = await Education.findOne({ where: { id: id } });
  res.status(200).send(education);
};

// 4. update experience

const updateEducation = async (req, res) => {
  let id = req.params.id;
  const education = await Education.update(req.body, { where: { id: id } });

  res.status(200).send(education);
};

// 5. delete experience by id

const deleteEducation = async (req, res) => {
  let id = req.params.id;
  await Education.destroy({ where: { id: id } });
  res.status(200).send("Education deleted");
};

module.exports = {
  addEducation,
  getAllEducation,
  getOneEducation,
  updateEducation,
  deleteEducation,
};
