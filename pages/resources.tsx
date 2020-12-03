import React from "react";
import Layout from "../components/layout/layout";

const Resources = () => (
  <Layout>
    <h3 style={{ textAlign: "center" }}>Blockchain Files</h3>
    <div className="bc-torrent" style={torrentStyle}>
      <p>November 2020</p>
      <a href="/haven_chain[12-2-2020].zip.torrent">Torrent</a>
    </div>
  </Layout>
);

const torrentStyle = {
  display: "flex",
  justifyContent: "space-between",
};

export default Resources;
