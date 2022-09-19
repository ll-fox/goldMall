import { Component } from "react";
import Taro from "@tarojs/taro";
import { AtTabs } from "taro-ui";
import { View } from "@tarojs/components";
import * as echarts from "../../ec-canvas/echarts";
import Timer from "../../component/Timer";
import "./index.less";

let chart = null;

const tabList = [{ title: "黄金" }, { title: "铂金" }, { title: "白银" }];

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      ec: {
        onInit: function (canvas, width, height, dpr) {
          chart = echarts.init(canvas, null, {
            width: width,
            height: height,
            devicePixelRatio: dpr,
          });
          canvas.setChart(chart);
          return chart;
        },
      },
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData(type) {
    Taro.request({
      method: "POST",
      url: "https://kyzb0755.com/api/DescribePriceData",
      data: {
        PriceType: type || "黄金",
      },
    }).then((res) => {
      const { statusCode, data } = res;
      if (statusCode === 200) {
        (data.Response.values || []).forEach((item, index) => {
          data.Response.values[index][0] = item[0] / 1000000;
        });
        chart.setOption(this.getOption(data.Response.values));
      }
    });
  }

  getOption(data1) {
    const { current } = this.state;
    let base = +new Date(1988, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let data = [[base, Math.random() * 300]];
    for (let i = 1; i < 20000; i++) {
      let now = new Date((base += oneDay));
      data.push([
        +now,
        Math.round((Math.random() - 0.5) * 20 + data[i - 1][1]),
      ]);
    }
    const option = {
      tooltip: {
        trigger: "axis",
        confine: true,
        // position: function (pt) {
        //   // return [pt[0], "10%"];
        // },
      },
      // title: {
      //   left: "center",
      //   text: tabList[current].title,
      // },
      grid: {
        top: "10%", //grid组件距上下左右的距离
        left: "0%",
        right: "4%",
        bottom: "0%",
        containLabel: true, //grid区域是否包含坐标轴的刻度标签。
      },
      xAxis: {
        type: "time",
        boundaryGap: false,
        min: "dataMin",
        max: "dataMax",
        axisLabel: {
          formatter: "{HH}:{mm}",
        },
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "100%"],
        min: "dataMin",
        max: "dataMax",
      },
      series: [
        {
          name: "价格",
          type: "line",
          smooth: true,
          symbol: "none",
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#ffcc66",
              },
              {
                offset: 1,
                color: "#ffeecc",
              },
            ]),
          },
          itemStyle: {
            color: "#ffb31a",
          },
          lineStyle: {
            color: "#ffb31a",
          },
          data: data1,
        },
      ],
    };
    return option;
  }
  handleClick(value) {
    this.setState({
      current: value,
    });
    this.fetchData(tabList[value].title);
  }
  render() {
    return (
      <View>
        <View className="canvas-container">
          <AtTabs
            animated={false}
            current={this.state.current}
            tabList={tabList}
            style={{ height: "44px" }}
            onClick={this.handleClick.bind(this)}
          ></AtTabs>
          <View>
            <Timer />
          </View>
          <View className="mychart">
            <ec-canvas
              id="mychart-dom-bar"
              canvas-id="mychart-bar"
              ec={this.state.ec}
            ></ec-canvas>
          </View>
        </View>
      </View>
    );
  }
}
