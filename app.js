require("dotenv").config();

const cors = require("cors");
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

async function main() {
  const newUser = await prisma.user.create({
    data: {
      username: "john_doe",
      email: "john_doe@example.com",
      role: "employee",
    },
  });
  console.log(newUser);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

module.exports = app;
