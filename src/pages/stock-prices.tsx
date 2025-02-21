import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { StockPricesView } from 'src/sections/stock-price/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Stock prices - ${CONFIG.appName}`}</title>
      </Helmet>

      <StockPricesView />
    </>
  );
}
