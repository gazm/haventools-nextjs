import Layout from "../components/layout";
import { fetchRPC, fetchCGinfo } from "../components/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

/* Fetch Functions */

function getCGinfo(data: string) {
  let result;
  //data=location of object as string ex.(".market_data.current_price.usd")
  const { cgInfo, isLoading, isError } = fetchCGinfo("haven");
  if (isError) return <h3 className="text-danger">🚨Error fetching data🚨</h3>;
  if (isLoading)
    return (
      <h3 className="text-success">
        <FontAwesomeIcon icon="circle-notch" spin />
      </h3>
    );
  if (data === ".market_data.current_price.usd")
    return (
      <span className="xhv-price">
        💲 {cgInfo.market_data.current_price.usd.toLocaleString()}
      </span>
    );
  if (data === ".market_data.market_cap.usd")
    return <span>💲 {cgInfo.market_data.market_cap.usd.toLocaleString()}</span>;
  if (data === "price_change") {
    result = {
      "24h": +cgInfo.market_data.price_change_percentage_24h.toFixed(2),
      "7d": +cgInfo.market_data.price_change_percentage_7d.toFixed(2),
      "30d": +cgInfo.market_data.price_change_percentage_30d.toFixed(2),
    };
    return JSON.stringify(result);
  } else {
    return console.error("Try a different paramater");
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
      💲 {Math.round(result.amount / 1000000000000).toLocaleString()}
    </span>
  );
}

/* Components */

function SmallCard(props) {
  return (
    <div className="small-card col-sm" style={smallCard}>
      <div className="card" style={card}>
        <div className="card-header" style={cardHeader}>
          {props.title}
        </div>
        <div className="card-body">{props.children}</div>
      </div>
    </div>
  );
}

const stats = () => (
  <Layout>
    <div style={style}>
      <div className="row">
        <SmallCard title="XHV Price">
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                {getCGinfo("price_change")}
              </Tooltip>
            }
          >
            <span>{getCGinfo(".market_data.current_price.usd")}</span>
          </OverlayTrigger>
        </SmallCard>
        <SmallCard title="MarketCap">
          <span>{getCGinfo(".market_data.market_cap.usd")}</span>
        </SmallCard>
        <SmallCard title="xUSD Circulating">
          <span>{getSupply("xUSD")}</span>
        </SmallCard>
      </div>
      <div className="row"></div>
    </div>
  </Layout>
);

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

/*   End Styles */

export default stats;
