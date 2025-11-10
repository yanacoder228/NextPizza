import { prisma } from "../src/lib/prisma";
import { users, categories, products, ingredients } from "./seedData";
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

  // Seed products
  await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
  });

  // Seed ingredients
  await prisma.ingredient.createMany({
    data: ingredients,
    skipDuplicates: true,
  });
}

async function down() {
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "order_items" RESTART IDENTITY CASCADE`
  );
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "orders" RESTART IDENTITY CASCADE`
  );
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "cart_items" RESTART IDENTITY CASCADE`
  );
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "carts" RESTART IDENTITY CASCADE`
  );
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "products" RESTART IDENTITY CASCADE`
  );
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "ingredients" RESTART IDENTITY CASCADE`
  );
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE`
  );
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`
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
