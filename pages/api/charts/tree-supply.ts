import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { nomValue } from "../../../components/utils/helpers";
import { GeistTheme, usdSymbol } from "../../../components/layout/theme";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const theme = GeistTheme;
  const url = "http://haven.tools/api/rpc/get_circulating_supply";
  const response = await axios.get(url);
  //console.log(response.data);

  const pickData = (curr: string, arg: string) => {
    if (arg === "lbl")
      return response.data.result.supply_tally.find(
        ({ currency_label }) => currency_label === curr
      ).currency_label;
    if (arg === "amt")
      return nomValue(
        response.data.result.supply_tally.find(
          ({ currency_label }) => currency_label === curr
        ).amount,
        2
      );
  };

  const TreeData = {
    root: {
      name: `XHV & Offshore Total Marketcap ${usdSymbol}`,
      color: theme.palette.secondary,
      children: [
        {
          name: `XHV Marketcap ${usdSymbol}`,
          color: "",
          children: [
            {
              // XHV token Mcap in USD
              name: pickData("XHV", "lbl"),
              color: "",
              // Total supply + Supply Remaining * XHV Price
              loc: 18400000 + pickData("XHV", "amt"),
            },
          ],
        },
        {
          name: `Offshore Marketcap ${usdSymbol}`,
          color: "",
          children: [
            {
              // xUSD
              name: pickData("xUSD", "lbl"),
              color: "",
              loc: pickData("xUSD", "amt"),
            },
          ],
        },
      ],
    },
  };
  res.send(TreeData);
}
