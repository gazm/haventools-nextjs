import { ResponsiveTreeMap } from "@nivo/treemap";
import React from "react";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export const TreeMap = (data: Object) => (
  <ResponsiveTreeMap
    data={data}
    identity="name"
    value="loc"
    valueFormat=".02s"
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    labelSkipSize={15}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
    parentLabelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    borderColor={{ from: "color", modifiers: [["darker", "0.4"]] }}
  />
);
