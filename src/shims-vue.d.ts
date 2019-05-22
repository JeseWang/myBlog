import VueRouter from 'vue-router'
import { Route } from 'vue-router'
declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter,
    $route: Route,
    $https: any,
    $urls: any,
    $Message: any,
    $Modal: any
  }
}

