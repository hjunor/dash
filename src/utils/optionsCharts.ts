import { theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
export const series = [
  { name: "series one", data: [31, 120, 10, 44, 55, 28, 120] },
];

export const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2020-03-18T00:00:00.00Z",
      "2020-03-20T00:00:00.00Z",
      "2020-03-21T00:00:00.00Z",
      "2020-03-22T00:00:00.00Z",
      "2020-03-23T00:00:00.00Z",
      "2020-03-24T00:00:00.00Z",
      "2020-03-25T00:00:00.00Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
} as ApexOptions;
