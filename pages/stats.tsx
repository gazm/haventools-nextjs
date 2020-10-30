import Layout from "../components/layout";
import { fetchRPC, fetchCGinfo } from "../components/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  OverlayTrigger,
  Row,
  Tooltip,
  Card,
  Col,
  Container,
} from "react-bootstrap";
import { useRef } from "react";
import { redirect } from "next/dist/next-server/server/api-utils";

// Charting

/* Fetch Functions */

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
  if (data === ".market_data.current_price.usd")
    return (
      <span className="xhv-price">
        💲 {cgInfo.market_data.current_price.usd.toFixed(2)}
      </span>
    );
  if (data === ".market_data.market_cap.usd")
    return <span>💲 {cgInfo.market_data.market_cap.usd.toLocaleString()}</span>;
  if (data === "price_change") {
    const result = {
      "24h": cgInfo.market_data.price_change_percentage_24h.toFixed(2) + "%",
      "7d": cgInfo.market_data.price_change_percentage_7d.toFixed(2) + "%",
      "30d": cgInfo.market_data.price_change_percentage_30d.toFixed(2) + "%",
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

function ReactCard(props) {
  return (
    <Col sm style={smallCard}>
      <Card style={card}>
        <Card.Header style={cardHeader}>{props.title}</Card.Header>
        <Card.Body>
          <Card.Text>{props.children}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

const stats = () => (
  <Layout>
    <Container className="text-center">
      <Row>
        <ReactCard title="XHV Price" style={card}>
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                {getCGinfo("price_change")}
              </Tooltip>
            }
            popperConfig={popper.settings}
          >
            <span>{getCGinfo(".market_data.current_price.usd")}</span>
          </OverlayTrigger>
        </ReactCard>
        <ReactCard title="MarketCap">
          <span>{getCGinfo(".market_data.market_cap.usd")}</span>
        </ReactCard>
        <ReactCard title="xUSD Circulating">
          <span>{getSupply("xUSD")}</span>
        </ReactCard>
      </Row>
      <Row></Row>
    </Container>
  </Layout>
);

/* Styles */

const style = {
  textAlign: "center",
  fontSize: "1.5em",
};

const smallCard = {
  fontSize: "x-large",
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

const popper = {
  settings: {
    modifiers: [
      {
        name: "preventOverflow",
        options: {
          mainAxis: false,
          altAxis: false,
          padding: 0,
          elementContext: "reference",
          rootBoundary: "document",
          tether: false,
        },
      },
    ],
  },
};

/*   End Styles */

export default stats;
