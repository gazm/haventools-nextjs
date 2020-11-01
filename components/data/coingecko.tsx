import { cgInfo } from "../utils/fetch";
import { Loading, Error } from "../layout/theme";
import React from "react";
import { get, isNumber } from "lodash";

export const Coingecko = ({ token, obj }) => {
  const { info, isLoading, isError } = cgInfo(token);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  const dot = get(info, obj);
  if (typeof dot === "number") return <span>{dot.toLocaleString()}</span>;
};
