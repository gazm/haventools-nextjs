import Layout from "../components/layout";
import { fetchRPC, fetchCGinfo } from "../components/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function getCGinfo(data: string) {
  //data=location of object as string ex.(".market_data.current_price.usd")
  const { cgInfo, isLoading, isError } = fetchCGinfo("haven");
  if (isError) return <h3 className="text-danger">🚨Error fetching data🚨</h3>;
  if (isLoading)
    return (
      <h3 className="text-success">
        <FontAwesomeIcon icon="circle-notch" spin />
      </h3>
    );
  if (data === ".market_data.current_price.usd") {
    return (
      <span>$ {cgInfo.market_data.current_price.usd.toLocaleString()}</span>
    );
  } else {
    return <span>$ {cgInfo.market_data.market_cap.usd.toLocaleString()}</span>;
  }
}

function getSupply(asset) {
  const { rpcData, isLoading, isError } = fetchRPC("get_circulating_supply");
  if (isError) return <h3 className="text-danger">🚨Error fetching data🚨</h3>;
  if (isLoading)
    return (
      <h3 className="text-success">
        <FontAwesomeIcon icon="circle-notch" spin />
      </h3>
    );
  const result = rpcData.result.supply_tally.find(
    ({ currency_label }) => currency_label === asset
  );
  return (
    <span className={asset}>
      $ {Math.round(result.amount / 1000000000000).toLocaleString()}
    </span>
  );
}

/* Components */

function SmallCard(props: string) {
  return (
    <div className="small-card col-sm" style={smallCard}>
      <div className="card" style={card}>
        <div className="card-header" style={cardHeader}>
          {props.title}
        </div>
        <div className="card-body">{props.data}</div>
      </div>
    </div>
  );
}

/* Styles */

const style = {
  textAlign: "center",
  fontSize: "1.5em",
};

const smallCard = {
  opacity: ".9",
};

const cardHeader = {
  textAlign: "center",
  backgroundColor: "#26282C",
  padding: "0.25rem 1.25rem",
  fontSize: ".6em",
  color: "rgb(255 255 255 / 77%)",
};

const card = {
  border: "1px solid #2d3135",
  backgroundColor: "#36393F",
};

const stats = () => (
  <Layout>
    <div style={style}>
      <div className="row">
        <SmallCard
          title="XHV Price"
          data={getCGinfo(".market_data.current_price.usd")}
        />
        <SmallCard
          title="MarketCap"
          data={getCGinfo(".market_data.market_cap.usd")}
        />
        <SmallCard title="xUSD Circulating" data={getSupply("xUSD")} />
      </div>
      <p className="mt-5">Under construction...</p>
    </div>
  </Layout>
);

export default stats;
