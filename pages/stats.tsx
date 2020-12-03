import Layout from "../components/layout/layout";
import { fetchRPC, cgInfo } from "../components/utils/fetch";
import { Grid } from "@geist-ui/react";
import { OverlayTrigger, Tooltip, Card } from "react-bootstrap";
import React, { CSSProperties } from "react";
import { nomValue } from "../components/utils/helpers";
import { usdSymbol, Loading, Error } from "../components/layout/theme";
import { Coingecko } from "../components/data/coingecko";
import { Blockchain } from "../components/data/blockchain";
import { SupplyMap } from "../components/chart/TreeChart";
import LineChart from "../components/chart/LineChart";

/* Fetch Functions */
// function getCGinfo(data) {
//   //data=location of object as string ex.(".market_data.current_price.usd")
//   const { info, isLoading, isError } = cgInfo("haven");
//   if (isError) return <Error />;
//   if (isLoading) return <Loading />;
//   if (data === ".market_data.current_price.usd")
//     return (
//       <span className="xhv-price">
//         {usdSymbol} {info.market_data.current_price.usd.toFixed(2)}
//       </span>
//     );
//   if (data === ".market_data.market_cap.usd")
//     return (
//       <span>
//         {usdSymbol} {info.market_data.market_cap.usd.toLocaleString()}
//       </span>
//     );
//   if (data === "price_change") {
//     const result = {
//       "24h": info.market_data.price_change_percentage_24h.toFixed(2) + "%",
//       "7d": info.market_data.price_change_percentage_7d.toFixed(2) + "%",
//       "30d": info.market_data.price_change_percentage_30d.toFixed(2) + "%",
//     };
//     return JSON.stringify(result);
//   } else {
//     return console.error("Try a different paramater");
//   }
// }

// function getSupply(asset) {
//   const { rpcData, isLoading, isError } = fetchRPC("get_circulating_supply");
//   if (isError) return <Error />;
//   if (isLoading) return <Loading />;
//   const result = rpcData.result.supply_tally.find(
//     ({ currency_label }) => currency_label === asset
//   );
//   return (
//     <span className={asset}>
//       {usdSymbol} {nomValue(result.amount, 0).toLocaleString()}
//     </span>
//   );
// }

/* Components */

type CardProps = {
  children: React.ReactNode;
  title: String;
  // style: CSSProperties;
};

function BootstrapCard(props: CardProps) {
  return (
    <Grid xs style={smallCard}>
      <Card style={card}>
        <Card.Header style={cardHeader}>{props.title}</Card.Header>
        <Card.Body>
          {/* <Card.Text>{props.children}</Card.Text> */}
          {props.children}
        </Card.Body>
      </Card>
    </Grid>
  );
}

// function GeistCard(props: CardProps) {
//   return (
//     <Grid xs style={smallCard}>
//       <Card style={card}>
//         <Card.Content style={cardHeader}>{props.title}</Card.Content>
//         <Divider type="secondary" y={0} />
//         <Card.Body>{props.children}</Card.Body>
//       </Card>
//     </Grid>
//   );
// }

const stats = () => (
  <Layout>
    <Grid.Container gap={2} justify="center" style={{ textAlign: "center" }}>
      <BootstrapCard title="XHV Price">
        {/* <Text span>{getCGinfo(".market_data.current_price.usd")}</Text> */}
        {usdSymbol}{" "}
        <Coingecko token="haven" obj="market_data.current_price.usd" />
      </BootstrapCard>
      <BootstrapCard title="MarketCap">
        {/* <span>{getCGinfo(".market_data.market_cap.usd")}</span> */}
        {usdSymbol} <Coingecko token="haven" obj="market_data.market_cap.usd" />
      </BootstrapCard>
      <BootstrapCard title="xUSD Circulating">
        {/* <span>{getSupply("xUSD")}</span> */}
        {usdSymbol}{" "}
        <Blockchain
          path="get_circulating_supply"
          obj="supply_tally"
          curr="xUSD"
        />
      </BootstrapCard>
    </Grid.Container>
  </Layout>
);

/* Styles */

const smallCard = {
  fontSize: "x-large",
};

const cardHeader = {
  backgroundColor: "#26282C",
  padding: "0.25rem 1.25rem",
  fontSize: ".6em",
};

const card = {
  border: "1px solid #2d3135",
  backgroundColor: "#36393F",
};

/*   End Styles */

export default stats;
