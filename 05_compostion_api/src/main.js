import { createApp } from 'vue'
import App from './02_compositionAPI基础/App.vue'

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