// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import havenjs from "haven-wallet-core";

async function nodeInfo() {
  let daemon = havenjs.connectToDaemonRpc("http://node.haven.tools:17750");
  try {
    const response = await daemon.getInfo();
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  nodeInfo().then((info) => res.json(info));
};
