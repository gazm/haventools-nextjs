import Layout from "../components/layout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchRPC } from "../components/fetch";
import React from "react";

function BlockHeight() {
  const { rpcData, isLoading, isError } = fetchRPC("get_info");
  if (isError) return <span className="server-down"> Error!</span>;
  if (isLoading) return <FontAwesomeIcon icon="circle-notch" spin />;
  return <span>{JSON.stringify(rpcData.result.height)}</span>;
}

function ServerStatus() {
  const { rpcData, isLoading, isError } = fetchRPC("get_info");
  if (isError)
    return (
      <span className="server-down">
        <FontAwesomeIcon icon="circle" /> Error!
      </span>
    );
  if (isLoading)
    return (
      <div className="server-up col p-1 text-left" id="node-connection">
        <FontAwesomeIcon icon="circle-notch" spin />
      </div>
    );
  if (rpcData.result.status === "OK") {
    return (
      <div className="server-up col p-1 text-left" id="node-connection">
        <FontAwesomeIcon icon="circle" />
        <span id="server-status"> Node is connected</span>
      </div>
    );
  } else {
    return (
      <div className="server-down col p-1 text-left" id="node-connection">
        <FontAwesomeIcon icon="circle" />
        <span id="server-status"> Node is down</span>
      </div>
    );
  }
}
const Index = () => {
  return (
    <Layout>
      <main role="main" className="inner cover text-center">
        <h1 className="cover-heading">Consider a Donation.</h1>
        <p className="welcome-msg">
          This node is ran independently in my spare time for the community with
          my own money. Please consider a donation to help cover costs for the
          domain, server and coffee.
        </p>
        <div className="haven-address" id="copy">
          hvxyBX4KhU2Scs5MxrZPcBFSFar4fydA487493gEUrhw1qk8igYrfmtE8hoRihqeqQejQHrusk6dFHhzviRmkTPj2szEMdkiqA
        </div>
        <div className="node-link h5">node.haven.tools:17750</div>
        <div className="status row">
          <ServerStatus />
          <div className="block-height col p-1 text-right">
            Block Height:{" "}
            <span id="block-height-number">
              <BlockHeight />
            </span>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default Index;
