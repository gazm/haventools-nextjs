import { cgPrice } from "../../components/fetch";
import { DateTime } from "luxon";

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

const { priceData } = cgPrice();
const id = "XHV Price";

let data = [];
export default function handler() {
  priceData.prices.forEach((row) => {
    const x = DateTime.fromMillis(row[0]).toISO();
    const y = row[1];
    // console.log(date, price);
    data.push({ x, y });
  });
  console.log({ id, data });
  return { id, data };
}
