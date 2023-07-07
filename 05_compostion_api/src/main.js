import { createApp } from 'vue'
import App from './07_CompositionAPI练习/App.vue'

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