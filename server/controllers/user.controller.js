const db = require("../models");
// create main Model
const UserModel = db.user;
const { createToken } = require("../jwt");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({
      where: {
        username: username,
        password: password,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Usuário não existe" });
    }

    const token = createToken({
      id: user.id,
      username: user.username,
    });

    return res.json({ token, userExists: true, admin: user.admin });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro durante o login" });
  }
};

const register = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.create({
    username: username,
    password: password,
  });

  return res.json(user);
};


const checkUserExistence = async (req, res) => {
  const { username } = req.query;

  try {
    const user = await UserModel.findOne({
      where: {
        username: username,
      },
    });

    if (user) {
      return res.json({ userExists: true });
    } else {
      return res.json({ userExists: false, message: "User doesn't exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error during user existence check" });
  }
};

module.exports = { login, register, checkUserExistence };
