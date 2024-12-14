import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Artist = {
  index: async (req, res) => {
    try {
      const artists = await prisma.artist.findMany();
      return res.json(artists);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "failed fetch artists" });
    }
  },
  store: async (req, res) => {
    const { name, debutDate, description, members } = req.body;
    const artistImage = req.files[0] ? req.files[0].path : null;

    try {
      const parsedMembers =
        typeof members === "string" ? JSON.parse(members) : members;

      // Validasi parsedMembers harus berupa array
      if (!Array.isArray(parsedMembers) || parsedMembers.length === 0) {
        return res.status(400).json({ message: "Invalid members data" });
      }

      // Buat artist di database terlebih dahulu
      const artist = await prisma.artist.create({
        data: {
          name,
          debutDate: new Date(debutDate), // Konversi ke format Date
          image: artistImage, // Lokasi file image artist
          description,
        },
      });

      // Setelah artist dibuat, proses data anggota
      const memberData = parsedMembers.map((member, index) => ({
        ...member,
        image: req.files[index + 1] ? req.files[index + 1].path : null, // File anggota dimulai dari index 1
        birthDate: new Date(member.birthDate), // Konversi ke format Date
        artistId: artist.id, // ID artist sekarang sudah tersedia
      }));

      // Tambahkan anggota ke database
      await prisma.member.createMany({
        data: memberData,
      });

      // Jika berhasil
      return res.json({ message: "Artist and members added successfully" });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Failed to add artists" });
    }
  },

  show: async (req, res) => {
    const name = req.params.name;
    console.log(name);

    try {
      const artist = await prisma.artist.findFirst({
        where: { name },
        include: {
          member: true,
          products: true,
        },
      });

      if (!artist) {
        return res.status(404).json({ message: "artist not found" });
      }

      return res.json(artist);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  update: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      const { name, debutDate, image, description } = req.body;

      await prisma.artist.update({
        where: { id },
        data: {
          name,
          debutDate: new Date(debutDate),
          image,
          description,
        },
      });

      return res.json({ message: "success update artist" });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  destroy: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      await prisma.artist.delete({ where: { id } });
      return res.json({ message: "artist deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};

export default Artist;
