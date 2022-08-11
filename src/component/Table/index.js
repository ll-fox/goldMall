/* eslint-disable jsx-quotes */
// 自己简单封装的表格组件，taro 和微信都没有table组件
import { Component } from "react";
import { View } from "@tarojs/components";
import "./index.less";

//原理 循环生成表头，循环数据根据表头填入每一列
export default class Table extends Component {
  render() {
    return (
      <View className="table">
        <View className="tr bg-header">
          {this.props.columns.map((item, index) => {
            return (
              <View key={index} className="th" style={{ width: item.width }}>
                {item.title}
              </View>
            );
          })}
        </View>

        {this.props.dataSource.map((item, index) => {
          return (
            <View key={index} className="tr bg-line">
              {this.props.columns.map((item2, i) => {
                if (item2.render) {
                  return (
                    <View key={i} className="td" style={{ width: item2.width }}>
                      {
                        item2.render(item[item2.dataIndex]) //判断表头是不是有render 有就执行render
                      }
                    </View>
                  );
                } else {
                  return (
                    <View className="td" style={{ width: item2.width }}>
                      {
                        item[item2.dataIndex] //根据表头填数据
                      }
                    </View>
                  );
                }
              })}
            </View>
          );
        })}
      </View>
    );
  }
}
