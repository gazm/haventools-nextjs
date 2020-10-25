import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fetchRPC from "../components/fetch";
import { useEffect, useState } from "react";

const Index = () => {
  function BlockHeight() {
    const { rpcData, isLoading } = fetchRPC("get_info");
    if (isLoading) return <FontAwesomeIcon icon="circle-notch" fa-spin />;
    return <span>{JSON.stringify(rpcData.result.height)}</span>;
  }

  function ServerStatus() {
    const { rpcData, isLoading } = fetchRPC("get_info");
    if (isLoading) return <FontAwesomeIcon icon="circle-notch" fa-spin />;
    if (rpcData.result.status === "OK") {
      return (
        <div className="server-up float-left" id="node-connection">
          <FontAwesomeIcon icon="circle" />
          <span id="server-status"> Node is connected</span>
        </div>
      );
    } else {
      return (
        <div className="server-down float-left" id="node-connection">
          <FontAwesomeIcon icon="circle" />
          <span id="server-status"> Node is down</span>
        </div>
      );
    }
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
          <ServerStatus />
          <div className="block-height float-right">
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
