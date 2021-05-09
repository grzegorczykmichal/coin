import { CoinApi } from "./api/coinapi";
import { Binance } from "./api/binance";

const BINANCE_API_KEY = import.meta.env.VITE_BINANCE_API_KEY;
const COINAPI_API_KEY = import.meta.env.VITE_COINAPI_API_KEY;

const binance = new Binance(BINANCE_API_KEY);
const coinapi = new CoinApi(COINAPI_API_KEY);

// api.ohlcv_latest_data();

binance.klines("BTCUSDT");
