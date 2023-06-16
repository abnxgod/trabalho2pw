const dotEnv = require("dotenv/config");

const express = require("express");
const cors = require("cors");

const app = express();
const path = require("path");

var corOptions = {
  origin: "https://localhost:8081",
};

// middleware

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..", "website", "login")));

// routers

const experienceRouter = require("./routes/experiencesRouter");
const educationRouter = require("./routes/educationRouter");
const usersRoutes = require("./routes/user.routes");
const skillsRouter = require("./routes/skillsRouter.js");

app.use("/api/experiences", experienceRouter);
app.use("/api/education", educationRouter);
app.use("/api/user", usersRoutes);
app.use("/api/skill", skillsRouter);

// testing api

//app.get("/", (req, res) => {
//  res.json({ message: "hello from api" });
//});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "website", "login", "index.html"));
});

//port

const PORT = process.env.PORT || 8080;

//server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
