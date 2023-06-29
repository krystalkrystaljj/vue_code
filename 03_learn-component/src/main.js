import { createApp } from 'vue'
import App from './03_父组件传递子组件/App'

// import {sum} from './12_异步组件的使用/utils/math'

// console.log(sum(20,10));

//采用import函数，这个函数的返回值是promise
//通过import函数导入的模块，后续的webpack对其进行打包的时候就会进行分包的操作
// import("./12_异步组件的使用/utils/math").then((res) => {
//   console.log(res.sum(20,30));
// })

createApp(App).mount('#app')
