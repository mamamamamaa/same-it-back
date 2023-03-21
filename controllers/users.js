const { PrismaClient } = require("@prisma/client");
const ctrlWallpaper = require("../helpers/ctrlWallpaper");

const prisma = new PrismaClient();

const getAll = async (req, res, next) => {
  const { profiles = false, role } = req.query;

  const data = await prisma.user.findMany({
    where: {
      role: role,
    },
    include: {
      profile: profiles,
    },
  });
  res.status(200).json({ data });
};

module.exports = { getAll: ctrlWallpaper(getAll) };
