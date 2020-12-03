import { cgPrice } from "../../../components/utils/fetch";
import { DateTime } from "luxon";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

// function getData() {
//   const { priceData } = cgPrice();
//   const id = "XHV Price";

//   let data = [];

//   priceData.prices.forEach((row) => {
//     const x = DateTime.fromMillis(row[0]).toISO();
//     const y = row[1];
//     // console.log(date, price);
//     data.push({ x, y });
//   });
//   console.log({ id, data });
//   return { id, data };
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url =
    "https://api.coingecko.com/api/v3/coins/haven/market_chart?vs_currency=usd&days=3&interval=daily";
  const response = await axios(url);
  //console.log(response);
  const id = "XHV Price";

  let data = [];
  let xAxis = [];
  let yAxis = [];

  response.data.prices.forEach((row) => {
    const x = DateTime.fromMillis(row[0]).toFormat("LLL dd");
    // const x = row[0];
    const y = row[1];
    // console.log(date, price);
    xAxis.push({ x });
    yAxis.push({ y });
  });

  res.send({ xAxis, yAxis });
}
