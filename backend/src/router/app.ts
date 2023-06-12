const express = require("express");
const cors = require("cors");
const connection = require("../connection/conn");
const {funcTestControll} = require("../controller/funcTestControll");
const {controllerSaveAnswer} = require("../controller/controllerSaveAnswer");
connection.connect();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api/debug",funcTestControll);
app.post("/api/insert", controllerSaveAnswer);

export {app}

