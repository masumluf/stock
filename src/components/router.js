import Home from './Home'
import PortFolio from './portfolio/PortFolio.vue'
import Stock from './stocks/Stocks.vue'



export const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/port',
    component: PortFolio
  },
  {
    path: '/stock',
    component: Stock
  }
]
