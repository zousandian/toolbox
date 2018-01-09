import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

function transformRoute (route, prefix = '') {
  console.log('@/pages' + prefix + '/' + route.name)
  const ret = {
    path: route.path,
    name: route.name,
    component: () => import('@/pages' + prefix + '/' + route.name),
    children: route.children ? route.children.map(subRoute => transformRoute(subRoute, route.path)) : []
  }

  console.log(ret)

  return ret
}

export default new Router({
  routes: routes.map(route => {
    return transformRoute(route)
  })
})
