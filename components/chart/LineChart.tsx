import React from "react";
import axiosFetch from "../../components/utils/fetchers";
import useSWR from "swr";
// import { Line } from "react-chartjs-2";
// import { ResponsiveLine } from "@nivo/line";

// const lineData = () => {
//   const url = "/api/charts/line-price";
//   const { data, error } = useSWR(url, axiosFetch);
//   return {
//     pData: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };

// const LineChart = () => {
//   const timeFormat = "DD/MM/YYYY";

//   const prices = lineData().pData;
//   console.log(prices);

//   const data = {
//     labels: [],
//     datasets: [
//       {
//         label: "My First dataset",
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor: "rgba(75,192,192,0.4)",
//         borderColor: "rgba(75,192,192,1)",
//         borderCapStyle: "butt",
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: "miter",
//         pointBorderColor: "rgba(75,192,192,1)",
//         pointBackgroundColor: "#fff",
//         pointBorderWidth: 1,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: "rgba(75,192,192,1)",
//         pointHoverBorderColor: "rgba(220,220,220,1)",
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: prices,
//         options: {
//           scales: {
//             xAxes: [
//               {
//                 type: "time",
//                 time: {
//                   format: timeFormat,
//                   tooltipFormat: "ll",
//                 },
//                 scaleLabel: {
//                   display: true,
//                   labelString: "Date",
//                 },
//               },
//             ],
//           },
//         },
//       },
//     ],
//   };

//   return (
//     <div style={{ height: "300px" }}>
//       <Line data={data} />
//     </div>
//   );
// };

export default LineChart;
