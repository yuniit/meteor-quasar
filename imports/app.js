import { createApp, h } from 'vue'
import AppLayout from '/imports/App.vue'

import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import '/node_modules/quasar/src/css/index.sass'

const app = createApp({
  render() {
    return h(AppLayout)
  }
})

app.use(Quasar)

app.mount('#app')
