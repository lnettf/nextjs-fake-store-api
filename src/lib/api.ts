import axios from "axios";

const API_URL = "https://fakestoreapi.com";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Category {
  name: string;
}

export async function getProducts(limit: number = 0): Promise<Product[]> {
  try {
    const url =
      limit > 0 ? `${API_URL}/products?limit=${limit}` : `${API_URL}/products`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProduct(id: number): Promise<Product | null> {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    return null;
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const response = await axios.get(`${API_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  try {
    const response = await axios.get(
      `${API_URL}/products/category/${category}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    return [];
  }
}
