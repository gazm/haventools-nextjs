import { fetchRPC } from "../utils/fetch";
import { Loading, Error } from "../layout/theme";
import React from "react";
import { nomValue } from "../utils/helpers";
import { get } from "lodash";

// { path, obj, curr}:{path:String, obj:String, curr?:String}
//   { path }: { path: string },
//   { obj }: { obj: string },
//   { curr = "false" }: { curr?: string }
export const Blockchain = ({
  path,
  obj,
  curr = null,
}: {
  path: string;
  obj: string;
  curr?: string;
}) => {
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
