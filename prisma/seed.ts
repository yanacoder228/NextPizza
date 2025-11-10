import { prisma } from "../src/lib/prisma";
import { UserRole } from "@prisma/client";
import seedData from "./seedData.json";
import { hash } from "argon2";

async function up() {
  for (const user of seedData.users) {
    await prisma.user.create({
      data: {
        fullName: user.fullName,
        email: user.email,
        password: await hash(user.password),
        role: user.role === "USER" ? UserRole.USER : UserRole.ADMIN, // <-- enum
      },
    });
  }

  await prisma.category.createMany({
    data: seedData.categories,
  });
}

async function down() {
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`
  );
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE`
  );
}

async function main() {
  try {
    await down();
    await up();
    console.log("✅ Seed completed");
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
