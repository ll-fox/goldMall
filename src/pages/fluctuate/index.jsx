import { Component } from "react";
import { View } from "@tarojs/components";
import * as echarts from "../../ec-canvas/echarts";
// import BaseLayout from "../baseLayout";
import "./index.less";

// let pieDataA = null;
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ec: {
        onInit: function (canvas, width, height) {
          const chart = echarts.init(canvas, null, {
            width: width,
            height: height,
          });
          canvas.setChart(chart);
          const option = {
            title: {
              text: "ECharts 入门示例",
            },
            tooltip: {},
            legend: {
              data: ["销量"],
            },
            xAxis: {
              data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            },
            yAxis: {
              data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            },
            series: [
              {
                name: "销量",
                type: "bar",
                data: [5, 20, 36, 10, 10, 20],
              },
            ],
          };
          chart.setOption(option);
          return chart;
        },
      },
    };
  }
  render() {
    return (
      // <BaseLayout>
      <View className="canvas-container">
        4567987897
        <ec-canvas
          id="mychart-dom-bar"
          canvas-id="mychart-bar"
          ec={this.state.ec}
        ></ec-canvas>
      </View>
      // </BaseLayout>
    );
  }
}
