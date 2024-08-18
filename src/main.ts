import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import registerPrimeVue from '@/primevue'
import { registerComponents } from '@/components'
import { registerTemplates } from '@/templates'

registerPrimeVue(app)
registerComponents(app)
registerTemplates(app)

app.mount('#app')
