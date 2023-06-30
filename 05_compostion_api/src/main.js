import { createApp } from 'vue'
import App from './03_RefAPI的补充/App.vue'

const app = createApp(App)
// app.mixin({
//   data() {
//     return {
//       tjj:"全局"
//     }
//   },
//   created() {
//     console.log("global mixin created");
//   }
// })

app.mount("#app")