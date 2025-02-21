interface StockDataEntry {
    date: string;
    opening: number;
    closing: number;
}

interface StockData {
    opening: number[];
    closing: number[];
}

const API_URL = import.meta.env.VITE_API_URL || "";

export async function fetchStockData(): Promise<StockDataEntry[]> {
    try {
        const response = await fetch(API_URL);
        return await response.json();

    } catch (error) {
        console.error('Error fetching stock data:', error);
        return [];
    }
}
