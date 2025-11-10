import { prisma } from "../src/lib/prisma";

async function createProductWithIngredients({
  title,
  imgUrl,
  categoryId,
  variations,
}: {
  title: string;
  imgUrl: string;
  categoryId: number;
  variations: {
    price: number;
    size?: number;
    pizzaType?: number;
    ingredientTitles?: string[];
  }[];
}) {
  const product = await prisma.product.create({
    data: { title, imgUrl, categoryId },
  });

  console.log(`✅ Created product: ${product.title}`);

  await prisma.productVariation.createMany({
    data: variations.map((v) => ({
      price: v.price,
      size: v.size,
      pizzaType: v.pizzaType,
      productId: product.id,
    })),
  });

  const ingredientTitles = [
    ...new Set(variations.flatMap((v) => v.ingredientTitles ?? [])),
  ];

  if (ingredientTitles.length > 0) {
    await prisma.product.update({
      where: { id: product.id },
      data: {
        ingredients: {
          connect: ingredientTitles.map((title) => ({ title })),
        },
      },
    });

    console.log(`   → Ingredients linked: ${ingredientTitles.join(", ")}`);
  }
}

async function main() {
  await createProductWithIngredients({
    title: "Pepperoni Fresh",
    imgUrl:
      "https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif",
    categoryId: 1,
    variations: [
      {
        price: 15,
        size: 30,
        pizzaType: 1,
        ingredientTitles: [
          "Spicy pepperoni",
          "Creamy mozzarella",
          "Fresh tomatoes",
          "Cheese crust",
          "Special tomato sauce",
        ],
      },
    ],
  });

  await createProductWithIngredients({
    title: "Four Cheese",
    imgUrl:
      "https://media.dodostatic.net/image/r:584x584/0199153050ea707cbed48b92097e095f.webp",
    categoryId: 1,
    variations: [
      {
        price: 14,
        size: 30,
        pizzaType: 1,
        ingredientTitles: [
          "Blue cheese",
          "Cheddar & Parmesan",
          "Creamy mozzarella",
          "Signature Alfredo sauce",
        ],
      },
    ],
  });

  await createProductWithIngredients({
    title: "Hawaiian",
    imgUrl:
      "https://media.dodostatic.net/image/r:584x584/11EE7970321044479C1D1085457A36EB.webp",
    categoryId: 1,
    variations: [
      {
        price: 15,
        size: 30,
        pizzaType: 1,
        ingredientTitles: [
          "Tender chicken",
          "Juicy pineapples",
          "Creamy mozzarella",
          "Signature Alfredo sauce",
        ],
      },
    ],
  });

  await createProductWithIngredients({
    title: "BBQ Chicken",
    imgUrl:
      "https://media.dodostatic.net/image/r:760x760/0198bf2cc87a79baa946c53b634615f4.avif",
    categoryId: 1,
    variations: [
      {
        price: 15.5,
        size: 30,
        pizzaType: 1,
        ingredientTitles: [
          "Tender chicken",
          "Bacon",
          "BBQ sauce",
          "Red onion",
          "Creamy mozzarella",
          "Special tomato sauce",
        ],
      },
    ],
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
