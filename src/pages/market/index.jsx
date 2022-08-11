/* eslint-disable jsx-quotes */
import { Component } from "react";
import { View, Text, Icon } from "@tarojs/components";
import Table from "../../component/Table/index";
import "./index.less";
//需要传进来的数据示例
const exampledataSource = [
  {
    product: "黄金",
    buyBack: "123",
    market: "321",
    float: "30%",
  },
  {
    product: "黄金",
    buyBack: "123",
    market: "321",
    float: "30%",
  },
  {
    product: "黄金",
    buyBack: "123",
    market: "321",
    float: "30%",
  },
  {
    product: "黄金",
    buyBack: "123",
    market: "321",
    float: "30%",
  },
  {
    product: "黄金",
    buyBack: "123",
    market: "321",
    float: "30%",
  },
];
//需要传进来的表头数据示例
const examplecolumns = [
  {
    title: "商品",
    dataIndex: "product",
    width: "20%",
  },
  {
    title: "回购",
    dataIndex: "buyBack",
    width: "20%",
  },
  {
    title: "销售",
    dataIndex: "market",
    width: "40%",
  },
  {
    title: "高/低",
    dataIndex: "float",
    width: "20%",
  },
];
export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="content">
        <View className="spot-price item">
          <View className="item-title">
            <Icon size="20" type="success" />
            <Text>现货价格</Text>
          </View>
          <Table dataSource={exampledataSource} columns={examplecolumns} />
        </View>
        <View className="inland-price item">
          <View className="item-title">
            <Icon size="20" type="success" />
            <Text>国内行情</Text>
          </View>
          <Table dataSource={exampledataSource} columns={examplecolumns} />
        </View>
        <View className="international-price item">
          <View className="item-title">
            <Icon size="20" type="success" />
            <Text>国际行情</Text>
          </View>
          <Table dataSource={exampledataSource} columns={examplecolumns} />
        </View>
      </View>
    );
  }
}
