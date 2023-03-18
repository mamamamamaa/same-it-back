const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT } =
  process.env;

const app = express();
const pool = new Pool({
  user: POSTGRES_USER,
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD,
  port: POSTGRES_PORT,
});

pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  pool.end();
});

app.use(express.json());

app.listen(8080, () => console.log("Server running on port 3003"));
