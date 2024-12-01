let { API_URL } = process.env;
import 'dotenv/config';
// Função para buscar os dados do endpoint
export default async function fetchImages() {
  try {
    const response = await fetch("https://insta-back-1-1060771770744.southamerica-east1.run.app/posts"); // Usando a URL importada
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}
