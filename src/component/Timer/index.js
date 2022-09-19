import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "@tarojs/components";
import "./index.less";

export default function Timer() {
  const timmer = useRef();
  const [Hour, setHour] = useState("");
  const [Seconds, setSeconds] = useState("");
  const [Minutes, setMinutes] = useState("");
  const [Year, setYear] = useState("");
  const [Month, setMonth] = useState("");
  const [Day, setDay] = useState("");
  const [Weekday, setWeekday] = useState("");

  const weekdayMap = {
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
    0: "日",
  };

  const getNewDate = () => {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const wday = time.getDay();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const s = time.getSeconds();
    const seconds = s <= 9 ? "0" + s : s;
    // const t = `${year}年${month}月${day}日 ${hour}:${minutes}:${seconds}`
    setHour(hour);
    setSeconds(seconds);
    if (minutes < 10) {
      setMinutes(`0${minutes}`);
    } else {
      setMinutes(minutes);
    }
    setYear(year);
    setMonth(month);
    setDay(day);
    setWeekday(weekdayMap[wday]);
  };

  useEffect(() => {
    timmer.current = setInterval(getNewDate, 1000);
    return () => {
      clearTimeout(timmer.current);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <View className="site-card-wrapper">
      {/* <AtCard title="当前时间" bordered={false}> */}
      <View className="clockclass">
        <Text className="hourclass">
          当前时间：
          <Text>{Hour}</Text>
          {Hour && <Text style={{ margin: "0 2px" }}>:</Text>}
          <Text>{Minutes}</Text>
        </Text>
        <Text className="secondsclass">{Seconds}</Text>
        <View className="dateclass">
          {Weekday && (
            <View style={{ fontSize: 18, marginBottom: 5, fontWeight: "bold" }}>
              {`星期${Weekday}`}
            </View>
          )}
          {Month && (
            <View style={{ fontSize: 14, fontWeight: "bold" }}>
              {`${Year}年${Month}月${Day}日`}
            </View>
          )}
        </View>
      </View>
      {/* </AtCard> */}
    </View>
  );
}
