import { App } from 'vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'

import Card from 'primevue/card'
import Chart from 'primevue/chart'

export default function registerPrimeVue(app: App<Element>): void {
  app
    .use(PrimeVue, { ripple: true })
    /**
     *  Components
     */
    .component('Card', Card)
    .component('Chart', Chart)
}
