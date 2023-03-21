const { PrismaClient } = require("@prisma/client");
const ctrlWallpaper = require("../helpers/ctrlWallpaper");

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  const { profile = false, role, state, page = 1, take = 10 } = req.query;
  const skip = (page - 1) * take;

  const data = await prisma.user.findMany({
    skip,
    take,
    where: {
      role,
      profile: {
        state,
      },
    },
    include: {
      profile,
    },
  });
  res.status(200).json({ data });
};

const addUser = async (req, res) => {
  const { username, email, role, firstName, lastName, state } = req.body;

  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      role,
      profile: {
        create: {
          firstName,
          lastName,
          state,
        },
      },
    },
  });

  res.status(201).json(newUser);
};

module.exports = {
  getUsers: ctrlWallpaper(getUsers),
  addUser: ctrlWallpaper(addUser),
};
