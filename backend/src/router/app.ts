const express = require("express");
const cors = require("cors");
const connection = require("../connection/conn");
const {funcTestControll} = require("../controller/funcTestControll");
connection.connect();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/backend/debug",funcTestControll);
app.post("/backend/insert", funcInsertControll)

export {app}

