const { Pool } = require("pg");

const { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT } =
  process.env;

const pool = new Pool({
  user: POSTGRES_USER,
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD,
  port: POSTGRES_PORT,
});

pool.query(
  "CREATE SCHEMA IF NOT EXISTS app;\n" +
    "\n" +
    "CREATE TYPE IF NOT EXISTS app.userRoles as ENUM ('admin', 'employee');\n" +
    "CREATE TYPE IF NOT EXISTS app.stateType as ENUM ('male', 'female');\n" +
    "\n" +
    "CREATE TABLE IF NOT EXISTS app.users (\n" +
    "    id SERIAL PRIMARY KEY,\n" +
    "    username VARCHAR(50) NOT NULL DEFAULT '',\n" +
    "    email VARCHAR(250) UNIQUE NOT NULL,\n" +
    "    role app.userRoles,\n" +
    "    dateCreate TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),\n" +
    "    profileId INTEGER UNIQUE REFERENCES app.profiles(id) ON DELETE CASCADE\n" +
    ");\n" +
    "\n" +
    "CREATE TABLE IF NOT EXISTS app.profiles (\n" +
    "    id SERIAL PRIMARY KEY,\n" +
    "    firstName VARCHAR(50) NOT NULL DEFAULT '',\n" +
    "    secondName VARCHAR(50) NOT NULL DEFAULT '',\n" +
    "    state app.stateType\n" +
    ");\n" +
    "\n" +
    "\n"
);

module.exports = pool;
