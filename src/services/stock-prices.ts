interface StockDataEntry {
    date: string;
    opening: number;
    closing: number;
}

interface StockData {
    opening: number[];
    closing: number[];
}

export function fetchStockData(): StockData {

    const dataApple: StockDataEntry[] = [
        {
            "date": "2024-31-01",
            "opening": 27.67,
            "closing": 27.38
        },
        {
            "date": "2024-29-02",
            "opening": 26.90,
            "closing": 26.63
        },
        {
            "date": "2024-28-03",
            "opening": 25.45,
            "closing": 25.54
        },
        {
            "date": "2024-30-04",
            "opening": 25.67,
            "closing": 25.21
        },
        {
            "date": "2024-31-05",
            "opening": 28.35,
            "closing": 28.42
        },
        {
            "date": "2024-28-06",
            "opening": 31.88,
            "closing": 31.21
        },
        {
            "date": "2024-31-07",
            "opening": 32.64,
            "closing": 32.74
        },
        {
            "date": "2024-30-08",
            "opening": 33.91,
            "closing": 33.68
        },
        {
            "date": "2024-30-09",
            "opening": 33.76,
            "closing": 34.18
        },
        {
            "date": "2024-31-10",
            "opening": 33.72,
            "closing": 33.15
        },
        {
            "date": "2024-29-11",
            "opening": 34.46,
            "closing": 34.75
        },
        {
            "date": "2024-31-12",
            "opening": 36.99,
            "closing": 36.69
        }
    ];

    return {
        opening: dataApple.map(item => item.opening),
        closing: dataApple.map(item => item.closing)
    };


}