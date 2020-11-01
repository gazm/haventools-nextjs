import { fetchRPC } from "../utils/fetch";
import { Loading, Error } from "../layout/theme";
import React from "react";
import { nomValue } from "../utils/helpers";
import { get } from "lodash";

export const Blockchain = ({ path, obj, curr }) => {
  const { rpcData, isLoading, isError } = fetchRPC(path);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  const dot = get(rpcData.result, obj);
  if (curr != null)
    return (
      <span>
        {nomValue(
          dot.find(({ currency_label }) => currency_label === curr).amount,
          0
        ).toLocaleString()}
      </span>
    );
  return <span>{JSON.stringify(dot)}</span>;
};
