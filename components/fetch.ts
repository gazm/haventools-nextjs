import react, { useEffect, useState } from "react";
import axios from "axios";

// Vanilla JS Fetch

async function getNode() {
  const url = "/api/node";
  try {
    const result = await axios(url);
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Axios

// async function getNode() {
//   try {
//     const result = await axios.get("/api/node");
//     const { data } = result;
//     return data;
//     //console.log(data.state);
//   } catch (error) {
//     console.error(error);
//   }
// }

// React Hooks
// function getNode() {
//   const [data, setData] = useState();

//   useEffect(() => {
//     const getData = async () => {
//       const result = await axios("/api/node");
//       setData(result.data);
//     };
//     getData();
//   }, []);

//   return { data };
// }

export default getNode;
