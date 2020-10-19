import { Main } from "next/document";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  async function getNode() {
    let url = 'http://localhost:3001/api/node';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function showNode() {
    let nodeInfo = await getNode();
    document.getElementById("block-height-number").innerHTML = nodeInfo.state.height;
    if (nodeInfo.state.isOffline === true ){
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
  return (
    <body className="text-center">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">Haven Tools</h3>
            <nav className="nav nav-masthead justify-content-center">
              <a className="nav-link active" href="#">
                Home
              </a>
            </nav>
          </div>
        </header>

        <main role="main" className="inner cover">
          <h1 className="cover-heading">Consider a Donation.</h1>
          <p className="lead">
            This node is ran independently in my spare time for the community
            with my own money. Please consider a donation to help cover costs
            for the domain, server, coffee and beer.
          </p>
          <div className="haven-address" id="copy">
            hvxyBX4KhU2Scs5MxrZPcBFSFar4fydA487493gEUrhw1qk8igYrfmtE8hoRihqeqQejQHrusk6dFHhzviRmkTPj2szEMdkiqA
          </div>
          <div className="lead node-link">node.haven.tools:17750</div>
          <div className="lead status">
            <div className="available server-up float-left" id="node-connection">
              <FontAwesomeIcon icon="circle" />
              <span id="server-status"></span>
            </div>
            <div className="block-height float-right">
              Block Height: <span id="block-height-number"></span>
            </div>
          </div>
        </main>
        
        <footer className="mastfoot mt-auto">
          <div className="inner">
            <p>Haven Tools</p>
          </div>
        </footer>
        
      </div>
    </body>
  );
}
