export default defineAppConfig({
  pages: ["pages/market/index", "pages/fluctuate/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#333", //tabBar 字体颜色
    selectedColor: "#ffd480",
    list: [
      {
        text: "行情",
        pagePath: "pages/market/index",
        selectedIconPath: "./assets/images/tab-home-current.png",
        iconPath: "./assets/images/tab-home.png",
      },
      {
        text: "定价",
        pagePath: "pages/fluctuate/index",
        selectedIconPath: "./assets/images/tab-cate-current.png",
        iconPath: "./assets/images/tab-cate.png",
      },
    ],
  },
});
