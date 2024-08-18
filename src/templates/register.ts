import { App } from 'vue'

import { CardTemplate, ChartTemplate } from './'

export default function registerTemplates(app: App<Element>): void {
  app
    .component('card-template', CardTemplate)
    .component('chart-template', ChartTemplate)
}
