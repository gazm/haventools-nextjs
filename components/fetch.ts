import react, { useEffect, useState } from "react";
import havenjs from "haven-wallet-core";

const getNode = async () => {
  let url = "http://localhost:3001/api/node";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

function rpcReg(query) {
  const [Data, setData] = useState([]);

  useEffect(() => {
    let daemon = havenjs.connectToDaemonRpc("http://node.haven.tools:17750");
    const response = await daemon.getInfo();
    setData(response);
  });
  return;
}

export default getNode;
