import { fetchData } from './script.js';

export async function apiWorks() {
    const url = 'http://localhost:5678/api/works'; // Remplace avec l'URL de ton API
    const data = await fetchData(url);
    return data;
}

export async function apiCategories() {
    const url = 'http://localhost:5678/api/categories'; // Remplace avec l'URL de ton API
    const data = await fetchData(url);
    return data;
}