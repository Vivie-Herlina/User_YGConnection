import { PrismaClient } from "@prisma/client";
import randomstring from "randomstring";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const Register = async (req, res) => {
  const { name, email, password, role, phone } = req.body;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create new user to database
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
      phone,
    },
  });

  for (let i = 0; i < 2; i++) {
    await prisma.voucher.create({
      data: {
        userId: user.id,
        name: randomstring.generate(7),
        discount: 50000,
      },
    });
  }

  res.status(201).json({ message: "User registered successfully" });
};

export const Login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // password verification
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }

  // create jwt token
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  // Remove password from user object
  const { password: _, ...userWithoutPassword } = user; // Destructure to exclude password

  res.status(200).json({ token, user: userWithoutPassword }); // Send user without password
};
