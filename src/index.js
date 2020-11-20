// src/index.js 示例，主要是引入(import)组件再导出(export)，包括Vue.use所需的 install函数处理
import FButton from "../packages/FButton/index.js";
const components = [FButton];

// Vue.use() 一次性安装所有组件
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  components.forEach(component => Vue.use(component));
  // 如果没有在src/index.js里实现install方法，就需要使用下面的
  // components.forEach(component => Vue.component(component.name, component))
};

// 判断是否是直接引入文件
if (typeof window !== undefined && window.Vue) {
  window.Vue.use(install);
  if (install.installed) {
    install.installed = false;
  }
}

export default {
  install, // 用于ES modules，import Vue 后直接使用 Vue.use()
  FButton // 支持解构赋值按需引入单个组件
};
