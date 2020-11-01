import Layout from "../components/layout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchRPC } from "../components/utils/fetch";
import React from "react";
import { Snippet, Row } from "@geist-ui/react";
import { Loading, Error } from "../components/layout/theme";
import { Blockchain } from "../components/data/blockchain";

function ServerStatus() {
  const { rpcData, isLoading, isError } = fetchRPC("get_info");
  if (isError) return <Error />;
  if (isLoading)
    return (
      <div className="server-up col p-1 text-left" id="node-connection">
        <Loading />
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
        <Row>
          <Snippet
            className="xhr-address"
            toastText="Address Copied!"
            toastType="secondary"
            text="hvxyBX4KhU2Scs5MxrZPcBFSFar4fydA487493gEUrhw1qk8igYrfmtE8hoRihqeqQejQHrusk6dFHhzviRmkTPj2szEMdkiqA"
            width="100%"
            type="secondary"
            symbol=""
          />
        </Row>
        <div className="node-link h5">node.haven.tools:17750</div>
        <div className="status row">
          <ServerStatus />
          <div className="block-height col p-1 text-right">
            Block Height:{" "}
            <span id="block-height-number">
              <Blockchain path="get_info" obj="height" />
            </span>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default Index;
