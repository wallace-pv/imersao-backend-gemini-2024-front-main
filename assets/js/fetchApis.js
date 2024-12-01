import { API_URL } from "./env.js";
// Função para buscar os dados do endpoint
export default async function fetchImages() {
  try {
    const response = await fetch(API_URL); // Usando a URL importada
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}
