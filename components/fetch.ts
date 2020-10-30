import useSWR from "swr";
import axiosFetch from "./fetchers";

function fetchRPC(query) {
  const { data, error } = useSWR(`/api/rpc/${query}`, axiosFetch);
  return {
    rpcData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

function fetchCGinfo(token) {
  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/coins/${token}?localization=false&tickers=false&community_data=false&developer_data=false`,
    axiosFetch
  );
  return {
    cgInfo: data,
    isLoading: !error && !data,
    isError: error,
  };
}

function cgPrice(days = 7) {
  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/coins/haven/market_chart?vs_currency=usd&days=${days}&interval=daily`,
    axiosFetch
  );
  return {
    priceData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export { fetchRPC, fetchCGinfo, cgPrice };
