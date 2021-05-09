import axios from "axios";

const BINANCE_API_URL = import.meta.env.VITE_BINANCE_API_URL;

class Binance {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.client = axios.create({
      baseURL: BINANCE_API_URL,
      headers: {
        "Content-Type": "application/json",
        "X-MBX-APIKEY": this.apiKey,
      },
    });
  }

  klines(
    symbol,
    interval = "1m",
    startTime = undefined,
    endTime = undefined,
    limit = 500
  ) {
    limit = Math.min(limit, 1000);
    this.client("api/v3/klines", {
      params: {
        symbol,
        interval,
        startTime,
        endTime,
        limit,
      },
    });
  }
}
export { Binance };
