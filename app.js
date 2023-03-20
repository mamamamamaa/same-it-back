require("dotenv").config();

const cors = require("cors");
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

async function main() {
  const newProfile = await prisma.profile.create({
    data: {
      firstName: "galava",
      secondName: "2 uha",
      state: "male",
      user: await prisma.user.create({
        data: {
          username: "john_doe",
          email: "john_doeee@example.com",
          role: "employee",
        },
      }),
    },
  });
  console.log(newProfile);
}

main();

module.exports = app;
