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
    include: { profile },
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
    include: { profile: true },
  });

  res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id);

  const { username, email, firstName, lastName, state, role } = req.body;

  const updatedUser = await prisma.user.update({
    where: { id: parsedId },
    data: {
      username,
      email,
      role,
      profile: { update: { firstName, lastName, state } },
    },
    include: { profile: true },
  });

  res.status(200).json(updatedUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id);

  const deletedUser = await prisma.user.delete({
    where: { id: parsedId },
    include: { profile: true },
  });

  res.status(200).json(deletedUser);
};

module.exports = {
  getUsers: ctrlWallpaper(getUsers),
  addUser: ctrlWallpaper(addUser),
  updateUser: ctrlWallpaper(updateUser),
  deleteUser: ctrlWallpaper(deleteUser),
};
