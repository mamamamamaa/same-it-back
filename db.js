const { Pool } = require("pg");

const { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT } =
  process.env;

const pool = new Pool({
  user: POSTGRES_USER,
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD,
  port: POSTGRES_PORT,
});

pool.query("CREATE SCHEMA IF NOT EXISTS app;");
pool.query("DROP TYPE IF EXISTS app.userRoles;");
pool.query("CREATE TYPE app.userRoles as ENUM ('admin', 'employee');");
pool.query("DROP TYPE IF EXISTS app.stateType;");
pool.query("CREATE TYPE app.stateType as ENUM ('male', 'female');");

module.exports = pool;
