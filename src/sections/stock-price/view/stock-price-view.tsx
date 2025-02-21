import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';
import { useEffect, useState } from 'react';
import { fetchStockData } from 'src/services';
import { AnalyticsStockPrice } from '../analytics-stock-price';

interface StockData {
    opening: number[];
    closing: number[];
}

export function StockPricesView() {
    const [stockData, setStockData] = useState<StockData>({ opening: [], closing: [] });

    useEffect(() => {
        const getData = async () => {
            try {
                const rawData = await fetchStockData();

                const formattedData: StockData = {
                    opening: rawData.map(entry => entry.opening),
                    closing: rawData.map(entry => entry.closing),
                };

                setStockData(formattedData);
            } catch (error) {
                console.error("Error fetching stock data:", error);
            }
        };

        getData();
    }, []);

    return (
        <DashboardContent maxWidth="xl">
            <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
                Pricing report
            </Typography>

            <AnalyticsStockPrice
                title="Stock price"
                subheader="AAPL (Apple) end-of-day stock prices"
                chart={{
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    series: [
                        { name: 'Opening', data: stockData.opening },
                        { name: 'Closing', data: stockData.closing },
                    ],
                }}
            />
        </DashboardContent>
    );
}
