import { reactive, ref } from "vue";
const deviceOnlineData = reactive({
  online: 2000,
  downline: 145,
  countline: 2145,
});
const deviceOnlineOption = ref({
  title: {
    text: "车辆违规率",
    subtext: `${((deviceOnlineData.downline / (deviceOnlineData.online + deviceOnlineData.downline)) * 100).toFixed(2)}%`,
    left: "center",
    top: "center",
    textStyle: {
      color: "#fff",
      fontSize: "14px",
    },
    subtextStyle: {
      color: "#fff",
      fontSize: "12px",
    },
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["75%", "85%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      data: [
        {
          value: deviceOnlineData.online,
          name: "Search Engine",
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#015dbd", // 渐变起点颜色
                },
                {
                  offset: 1,
                  color: "#3fb1ca", // 渐变终点颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        },
        {
          value: deviceOnlineData.downline,
          name: "Direct",
          itemStyle: {
            color: "#58606a",
          },
        },
      ],
    },
  ],
});

const data = [
  ["09-08", 15],
  ["09-09", 29],
  ["09-10", 35],
  ["09-11", 16],
  ["09-12", 11],
  ["09-13", 7],
  ["09-14", 3],
];
const dateList = data.map(function (item) {
  return item[0];
});
const valueList = data.map(function (item) {
  return item[1];
});
const numberOfAlarmsOption = ref({
  visualMap: [
    {
      show: false,
      type: "continuous",
      seriesIndex: 0,
      min: 0,
      max: 30,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
  xAxis: [
    {
      data: dateList,
      axisLabel: {
        show: true,
        textStyle: {
          color: "#ffffff",
        },
      },
    },
  ],
  yAxis: [
    {
      axisLabel: {
        show: true,
        textStyle: {
          color: "#ffffff",
        },
      },
    },
  ],
  grid: [
    {
      top: "10%",
      left: "10%",
      bottom: "10%",
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      data: valueList,
    },
  ],
});

const distributeOption = ref({
  radar: {
    indicator: [
      { name: "违规停车", max: 50 },
      { name: "超速行驶", max: 50 },
      { name: "闯红灯", max: 50 },
      { name: "逆行", max: 50 },
      { name: "闯禁行", max: 50 },
    ],
  },
  series: [
    {
      name: "Budget vs spending",
      type: "radar",
      data: [
        {
          value: [40, 25, 40, 10, 30],
        },
      ],
      lineStyle: {
        color: "#08bec9", // 例如：'#ff0000' 为红色
      },
      itemStyle: {
        color: "#08bec9",
      },
      areaStyle: {
        color: "#08bec9", // 例如：'rgba(255, 0, 0, 0.5)' 为半透明红色
      },
    },
  ],
});
export default function () {
  return {
    deviceOnlineData,
    deviceOnlineOption,
    numberOfAlarmsOption,
    distributeOption,
  };
}
