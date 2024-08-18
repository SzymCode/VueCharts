import { App } from 'vue'

import {
  Example1Chart,
  Example2Chart,
  Example3Chart,
  Example4Chart,
  Example5Chart,
  Example6Chart,
  Example7Chart,
  Example8Chart,
  Example9Chart,
  Example10Chart,
  Example11Chart
} from './'

export default function registerComponents(app: App<Element>): void {
  app
    .component('example1-chart', Example1Chart)
    .component('example2-chart', Example2Chart)
    .component('example3-chart', Example3Chart)
    .component('example4-chart', Example4Chart)
    .component('example5-chart', Example5Chart)
    .component('example6-chart', Example6Chart)
    .component('example7-chart', Example7Chart)
    .component('example8-chart', Example8Chart)
    .component('example9-chart', Example9Chart)
    .component('example10-chart', Example10Chart)
      .component('example11-chart', Example11Chart)

}
