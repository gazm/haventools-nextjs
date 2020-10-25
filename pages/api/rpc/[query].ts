import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { nanoid } from "nanoid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { query },
  } = req;

  const url = "http://haven.tools:17750/json_rpc";
  const response = await axios.post(url, {
    jsonrpc: "2.0",
    id: nanoid(5),
    method: `${query}`,
  });
  // console.log(response.data);
  res.send(response.data);
}
