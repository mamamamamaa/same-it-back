const { PrismaClient } = require("@prisma/client");
const ctrlWallpaper = require("../helpers/ctrlWallpaper");

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  const { profiles = false, role, page = 1, take = 10 } = req.query;
  const skip = (page - 1) * take;

  const data = await prisma.user.findMany({
    skip,
    take,
    where: {
      role: role,
    },
    include: {
      profile: profiles,
    },
  });
  res.status(200).json({ data });
};

const addUser = async (req, res) => {
  const newUser = await prisma.user.create({
    data: {},
  });
};

module.exports = {
  getUsers: ctrlWallpaper(getUsers),
  addUser: ctrlWallpaper(addUser),
};
