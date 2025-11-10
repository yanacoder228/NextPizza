import { prisma } from "../src/lib/prisma";
import { users, categories, ingredients } from "./seedData";
import { hash } from "argon2";

async function up() {
  // Seed users
  for (const user of users) {
    await prisma.user.create({
      data: {
        fullName: user.fullName,
        email: user.email,
        password: await hash(user.password),
        role: user.role,
      },
    });
  }

  // Seed categories
  await prisma.category.createMany({
    data: categories,
    skipDuplicates: true,
  });

  // Seed ingredients
  await prisma.ingredient.createMany({
    data: ingredients,
    skipDuplicates: true,
  });
}

async function down() {
  const tables = [
    "order_items",
    "orders",
    "cart_items",
    "carts",
    "products",
    "ingredients",
    "categories",
    "users",
  ];

  for (const table of tables) {
    await prisma.$executeRawUnsafe(
      `TRUNCATE TABLE "${table}" RESTART IDENTITY CASCADE`
    );
  }
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
