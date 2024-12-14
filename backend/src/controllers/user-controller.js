import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const User = {
  index: async (req, res) => {
    try {
      const users = await prisma.user.findMany({
        include: {
          profile: true,
        },
      });
      const response = users.map(({ password, ...user }) => user);
      return res.json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  store: async (req, res) => {},
  show: async (req, res) => {
    const userId = Number(req.params.id);

    const isUserExist = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!isUserExist) {
      return res.json({ message: "User not found" });
    }

    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { profile: true },
      });

      const userWithProfile = {
        ...user,
        profile: user.profile[0] || null,
      };

      const { password, ...userWithoutPassword } = userWithProfile;
      return res.json(userWithoutPassword);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, nickname, gender, country, language, timeZone } = req.body;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ message: "Invalid or missing userId" });
    }

    try {
      await prisma.user.update({
        where: { id: Number(id) },
        data: { name },
      });

      await prisma.profile.upsert({
        where: { userId: Number(id) },
        create: {
          userId: Number(id),
          nickname,
          gender,
          country,
          language,
          timeZone,
        },
        update: {
          nickname,
          gender,
          country,
          language,
          timeZone,
        },
      });

      return res.json({
        message: "Update successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },

  destroy: async (req, res) => {},
};

export default User;
