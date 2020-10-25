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

export default fetchRPC;
