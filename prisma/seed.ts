import { prisma } from "../src/lib/prisma";
import { hash } from "argon2";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User test",
        email: "test@gmail.com",
        password: await hash("111111"),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "testadmin@gmail.com",
        password: await hash("111111"),
        role: "ADMIN",
      },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    down();
    up();
  } catch (err) {
    console.log(err);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
