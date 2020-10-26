import react, { useEffect, useState } from "react";
import useSWR from "swr";
import axioFetch from "./fetchers";

function fetchRPC(query) {
  const { data, error } = useSWR(`/api/rpc/${query}`, axioFetch);
  return {
    rpcData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

function fetchCGinfo(token) {
  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/coins/${token}?localization=false&tickers=false&community_data=false&developer_data=false`,
    axioFetch
  );
  return {
    cgInfo: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export { fetchRPC, fetchCGinfo };
