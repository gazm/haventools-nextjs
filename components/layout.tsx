import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

let background = "/bg-crop.jpg";

const bgStyle = {
  backgroundImage: `url(${background})`,
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "#333",
  backgroundPosition: "center",
  position: "relative",
};

const blur = {
  backdropFilter: "blur(30px) brightness(0.8)",
  padding: "2em",
  borderRadius: "1em",
  //   border: "5px #fff",
  boxShadow: "0 0 2rem rgba(0, 0, 0, 1)",
  //   backgroundColor: "#26282C",
};

const Layout = (props) => (
  <div className="bg" style={bgStyle}>
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Head>
        <title>Haven Tools</title>
      </Head>

      <Header />

      <div className="content" style={blur}>
        {props.children}
      </div>

      <Footer />
    </div>
  </div>
);

export default Layout;
