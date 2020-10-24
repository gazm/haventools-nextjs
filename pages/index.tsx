import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getNode from "../components/fetch";
import { useEffect, useState } from "react";

const Index = () => {
  const [blockchain, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getNode().then((res) => {
      setData(res.data.state);
      setLoad(true);
    });
  }, []);

  let statusMsg;
  let statusClass;

  if (blockchain.isOffline === false) {
    statusMsg = " Node Connected";
    statusClass = "server-up available float-left";
  } else {
    statusMsg = " Node is down";
    statusClass = "server-down available float-left";
  }

  return (
    <Layout>
      <main role="main" className="inner cover text-center">
        <h1 className="cover-heading">Consider a Donation.</h1>
        <p className="lead">
          This node is ran independently in my spare time for the community with
          my own money. Please consider a donation to help cover costs for the
          domain, server and coffee.
        </p>
        <div className="haven-address" id="copy">
          hvxyBX4KhU2Scs5MxrZPcBFSFar4fydA487493gEUrhw1qk8igYrfmtE8hoRihqeqQejQHrusk6dFHhzviRmkTPj2szEMdkiqA
        </div>
        <div className="node-link">node.haven.tools:17750</div>
        <div className="status">
          <div className={statusClass} id="node-connection">
            <FontAwesomeIcon icon="circle" />
            <span id="server-status">{statusMsg}</span>
          </div>
          <div className="block-height float-right">
            Block Height:{" "}
            <span id="block-height-number">
              {JSON.stringify(blockchain.height)}
            </span>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default Index;
