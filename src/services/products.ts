import { Product } from "@prisma/client";
import { axiosInstance } from "./instance";

export const search = async (query: string) => {
  if (!query.trim()) {
    return [];
  }

  const response = await axiosInstance.get<Product[]>("/products/search", {
    params: { query },
  });

  return response.data;
};
