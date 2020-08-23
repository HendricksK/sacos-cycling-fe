import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6e325f1f = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _4e196f70 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _e42b8c38 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/sacos-cycling-fe/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6e325f1f,
    name: "about"
  }, {
    path: "/test",
    component: _4e196f70,
    name: "test"
  }, {
    path: "/",
    component: _e42b8c38,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
