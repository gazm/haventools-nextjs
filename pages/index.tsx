import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

async function getNode() {
  let url = "http://localhost:3001/api/node";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
async function showNode() {
  let nodeInfo = await getNode();
  document.getElementById("block-height-number").innerHTML =
    nodeInfo.state.height;
  if (nodeInfo.state.isOffline === true) {
    let x = document.getElementById("node-connection");
    x.classList.remove("server-up");
    x.classList.add("server-down");
    document.getElementById("server-status").innerHTML = " Server is Down";
  } else {
    let x = document.getElementById("node-connection");
    x.classList.remove("server-down");
    x.classList.add("server-up");
    document.getElementById("server-status").innerHTML = " Server is Up";
  }
}
showNode();

const Index = () => (
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
        <div className="available server-up float-left" id="node-connection">
          <FontAwesomeIcon icon="circle" />
          <span id="server-status"></span>
        </div>
        <div className="block-height float-right">
          Block Height: <span id="block-height-number"></span>
        </div>
      </div>
    </main>
  </Layout>
);

export default Index;
