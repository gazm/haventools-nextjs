import { ResponsiveTreeMap } from "@nivo/treemap";
import React from "react";
import axiosFetch from "../../components/utils/fetchers";
import useSWR from "swr";

const data1 = {
  root: {
    name: "nivo",
    color: "hsl(176, 70%, 50%)",
    children: [
      {
        name: "viz",
        color: "hsl(100, 70%, 50%)",
        children: [
          {
            name: "stack",
            color: "hsl(146, 70%, 50%)",
            children: [
              {
                name: "chart",
                color: "hsl(172, 70%, 50%)",
                loc: 16646,
              },
              {
                name: "xAxis",
                color: "hsl(87, 70%, 50%)",
                loc: 145560,
              },
              {
                name: "yAxis",
                color: "hsl(39, 70%, 50%)",
                loc: 32251,
              },
              {
                name: "layers",
                color: "hsl(141, 70%, 50%)",
                loc: 173207,
              },
            ],
          },
          {
            name: "pie",
            color: "hsl(216, 70%, 50%)",
            children: [
              {
                name: "chart",
                color: "hsl(270, 70%, 50%)",
                children: [
                  {
                    name: "pie",
                    color: "hsl(40, 70%, 50%)",
                    children: [
                      {
                        name: "outline",
                        color: "hsl(113, 70%, 50%)",
                        loc: 69626,
                      },
                      {
                        name: "slices",
                        color: "hsl(34, 70%, 50%)",
                        loc: 190133,
                      },
                      {
                        name: "bbox",
                        color: "hsl(293, 70%, 50%)",
                        loc: 122827,
                      },
                    ],
                  },
                  {
                    name: "donut",
                    color: "hsl(178, 70%, 50%)",
                    loc: 154600,
                  },
                  {
                    name: "gauge",
                    color: "hsl(119, 70%, 50%)",
                    loc: 55724,
                  },
                ],
              },
              {
                name: "legends",
                color: "hsl(71, 70%, 50%)",
                loc: 142302,
              },
            ],
          },
        ],
      },
      {
        name: "colors",
        color: "hsl(171, 70%, 50%)",
        children: [
          {
            name: "rgb",
            color: "hsl(91, 70%, 50%)",
            loc: 146456,
          },
          {
            name: "hsl",
            color: "hsl(346, 70%, 50%)",
            loc: 23252,
          },
        ],
      },
      {
        name: "utils",
        color: "hsl(261, 70%, 50%)",
        children: [
          {
            name: "randomize",
            color: "hsl(247, 70%, 50%)",
            loc: 165134,
          },
          {
            name: "resetClock",
            color: "hsl(111, 70%, 50%)",
            loc: 10838,
          },
          {
            name: "noop",
            color: "hsl(284, 70%, 50%)",
            loc: 27943,
          },
          {
            name: "tick",
            color: "hsl(181, 70%, 50%)",
            loc: 59518,
          },
          {
            name: "forceGC",
            color: "hsl(174, 70%, 50%)",
            loc: 73974,
          },
          {
            name: "stackTrace",
            color: "hsl(54, 70%, 50%)",
            loc: 188541,
          },
          {
            name: "dbg",
            color: "hsl(261, 70%, 50%)",
            loc: 118230,
          },
        ],
      },
      {
        name: "generators",
        color: "hsl(233, 70%, 50%)",
        children: [
          {
            name: "address",
            color: "hsl(115, 70%, 50%)",
            loc: 154353,
          },
          {
            name: "city",
            color: "hsl(350, 70%, 50%)",
            loc: 112245,
          },
          {
            name: "animal",
            color: "hsl(102, 70%, 50%)",
            loc: 14173,
          },
          {
            name: "movie",
            color: "hsl(241, 70%, 50%)",
            loc: 89691,
          },
          {
            name: "user",
            color: "hsl(238, 70%, 50%)",
            loc: 48769,
          },
        ],
      },
      {
        name: "set",
        color: "hsl(92, 70%, 50%)",
        children: [
          {
            name: "clone",
            color: "hsl(180, 70%, 50%)",
            loc: 51124,
          },
          {
            name: "intersect",
            color: "hsl(97, 70%, 50%)",
            loc: 177671,
          },
          {
            name: "merge",
            color: "hsl(330, 70%, 50%)",
            loc: 138755,
          },
          {
            name: "reverse",
            color: "hsl(341, 70%, 50%)",
            loc: 110827,
          },
          {
            name: "toArray",
            color: "hsl(88, 70%, 50%)",
            loc: 58002,
          },
          {
            name: "toObject",
            color: "hsl(330, 70%, 50%)",
            loc: 180506,
          },
          {
            name: "fromCSV",
            color: "hsl(242, 70%, 50%)",
            loc: 167832,
          },
          {
            name: "slice",
            color: "hsl(349, 70%, 50%)",
            loc: 81467,
          },
          {
            name: "append",
            color: "hsl(288, 70%, 50%)",
            loc: 56324,
          },
          {
            name: "prepend",
            color: "hsl(264, 70%, 50%)",
            loc: 104550,
          },
          {
            name: "shuffle",
            color: "hsl(191, 70%, 50%)",
            loc: 49003,
          },
          {
            name: "pick",
            color: "hsl(304, 70%, 50%)",
            loc: 199397,
          },
          {
            name: "plouc",
            color: "hsl(77, 70%, 50%)",
            loc: 49830,
          },
        ],
      },
      {
        name: "text",
        color: "hsl(244, 70%, 50%)",
        children: [
          {
            name: "trim",
            color: "hsl(333, 70%, 50%)",
            loc: 150255,
          },
          {
            name: "slugify",
            color: "hsl(307, 70%, 50%)",
            loc: 48791,
          },
          {
            name: "snakeCase",
            color: "hsl(315, 70%, 50%)",
            loc: 99179,
          },
          {
            name: "camelCase",
            color: "hsl(106, 70%, 50%)",
            loc: 110998,
          },
          {
            name: "repeat",
            color: "hsl(295, 70%, 50%)",
            loc: 134645,
          },
          {
            name: "padLeft",
            color: "hsl(331, 70%, 50%)",
            loc: 94468,
          },
          {
            name: "padRight",
            color: "hsl(184, 70%, 50%)",
            loc: 99494,
          },
          {
            name: "sanitize",
            color: "hsl(244, 70%, 50%)",
            loc: 78181,
          },
          {
            name: "ploucify",
            color: "hsl(195, 70%, 50%)",
            loc: 120512,
          },
        ],
      },
      {
        name: "misc",
        color: "hsl(207, 70%, 50%)",
        children: [
          {
            name: "greetings",
            color: "hsl(186, 70%, 50%)",
            children: [
              {
                name: "hey",
                color: "hsl(178, 70%, 50%)",
                loc: 162048,
              },
              {
                name: "HOWDY",
                color: "hsl(344, 70%, 50%)",
                loc: 71627,
              },
              {
                name: "aloha",
                color: "hsl(105, 70%, 50%)",
                loc: 82987,
              },
              {
                name: "AHOY",
                color: "hsl(77, 70%, 50%)",
                loc: 32629,
              },
            ],
          },
          {
            name: "other",
            color: "hsl(350, 70%, 50%)",
            loc: 149548,
          },
          {
            name: "path",
            color: "hsl(229, 70%, 50%)",
            children: [
              {
                name: "pathA",
                color: "hsl(334, 70%, 50%)",
                loc: 55214,
              },
              {
                name: "pathB",
                color: "hsl(64, 70%, 50%)",
                children: [
                  {
                    name: "pathB1",
                    color: "hsl(104, 70%, 50%)",
                    loc: 147403,
                  },
                  {
                    name: "pathB2",
                    color: "hsl(172, 70%, 50%)",
                    loc: 135569,
                  },
                  {
                    name: "pathB3",
                    color: "hsl(10, 70%, 50%)",
                    loc: 37035,
                  },
                  {
                    name: "pathB4",
                    color: "hsl(52, 70%, 50%)",
                    loc: 44886,
                  },
                ],
              },
              {
                name: "pathC",
                color: "hsl(301, 70%, 50%)",
                children: [
                  {
                    name: "pathC1",
                    color: "hsl(42, 70%, 50%)",
                    loc: 188796,
                  },
                  {
                    name: "pathC2",
                    color: "hsl(192, 70%, 50%)",
                    loc: 79869,
                  },
                  {
                    name: "pathC3",
                    color: "hsl(214, 70%, 50%)",
                    loc: 112338,
                  },
                  {
                    name: "pathC4",
                    color: "hsl(25, 70%, 50%)",
                    loc: 96555,
                  },
                  {
                    name: "pathC5",
                    color: "hsl(314, 70%, 50%)",
                    loc: 127576,
                  },
                  {
                    name: "pathC6",
                    color: "hsl(181, 70%, 50%)",
                    loc: 152566,
                  },
                  {
                    name: "pathC7",
                    color: "hsl(254, 70%, 50%)",
                    loc: 167434,
                  },
                  {
                    name: "pathC8",
                    color: "hsl(180, 70%, 50%)",
                    loc: 32354,
                  },
                  {
                    name: "pathC9",
                    color: "hsl(305, 70%, 50%)",
                    loc: 53874,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

const treeData = () => {
  const url = "/api/charts/tree-supply";
  const { data, error } = useSWR(url, axiosFetch);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const SupplyMap = () => (
  <div style={{ height: "300px" }}>
    <ResponsiveTreeMap
      data={data1}
      identity="name"
      value="loc"
      valueFormat=" >-$0.4~s"
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      labelSkipSize={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
      parentLabelSize={21}
      parentLabelPadding={5}
      parentLabelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      colors={{ scheme: "nivo" }}
      borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
      animate={false}
      isInteractive={false}
    />
  </div>
);
