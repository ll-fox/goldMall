/* eslint-disable jsx-quotes */
import Taro, { usePullDownRefresh } from "@tarojs/taro";
import { useState, useEffect } from "react";
import { View, Text, Icon } from "@tarojs/components";
import { AtIcon } from "taro-ui";
// import "~taro-ui/dist/style/components/icon.scss";
import Table from "../../component/Table/index";
import "./index.less";

//需要传进来的表头数据示例
const examplecolumns = [
  {
    title: "商品",
    dataIndex: "Name",
    width: "20%",
  },
  {
    title: "回购价",
    dataIndex: "RepoPrice",
    width: "20%",
  },
  {
    title: "出售价",
    dataIndex: "SellPrice",
    width: "20%",
  },
  {
    title: "最高价",
    dataIndex: "MaxPrice",
    width: "20%",
  },
  {
    title: "最低价",
    dataIndex: "MinPrice",
    width: "20%",
  },
];
export default function () {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  usePullDownRefresh(() => {
    fetchData();
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      fetchData();
      setCount(count + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [count]);

  const fetchData = () => {
    Taro.request({
      method: "POST",
      url: "https://kyzb0755.com/api/DescribeAllPrice",
    }).then((res) => {
      const { statusCode, data } = res;
      if (statusCode === 200) {
        setList(data.Response);
      }
    });
  };
  return (
    <View className="content">
      <View className="spot-price item">
        <View className="item-title">
          <AtIcon value="money" size="20" color="#b3b3b3" />
          <Text>现货价格</Text>
        </View>
        <Table dataSource={list} columns={examplecolumns} />
      </View>
    </View>
  );
}
