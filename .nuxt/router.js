import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _303f5598 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _bc1c0b46 = () => interopDefault(import('../pages/article.vue' /* webpackChunkName: "pages/article" */))
const _a184de42 = () => interopDefault(import('../pages/club.vue' /* webpackChunkName: "pages/club" */))
const _f3afda0a = () => interopDefault(import('../pages/history.vue' /* webpackChunkName: "pages/history" */))
const _73840994 = () => interopDefault(import('../pages/manager.vue' /* webpackChunkName: "pages/manager" */))
const _3645a9a1 = () => interopDefault(import('../pages/rider.vue' /* webpackChunkName: "pages/rider" */))
const _c6d93ef0 = () => interopDefault(import('../pages/store.vue' /* webpackChunkName: "pages/store" */))
const _2079e2bb = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _633a13f2 = () => interopDefault(import('../pages/track.vue' /* webpackChunkName: "pages/track" */))
const _07982ff9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _303f5598,
    name: "about"
  }, {
    path: "/article",
    component: _bc1c0b46,
    name: "article"
  }, {
    path: "/club",
    component: _a184de42,
    name: "club"
  }, {
    path: "/history",
    component: _f3afda0a,
    name: "history"
  }, {
    path: "/manager",
    component: _73840994,
    name: "manager"
  }, {
    path: "/rider",
    component: _3645a9a1,
    name: "rider"
  }, {
    path: "/store",
    component: _c6d93ef0,
    name: "store"
  }, {
    path: "/test",
    component: _2079e2bb,
    name: "test"
  }, {
    path: "/track",
    component: _633a13f2,
    name: "track"
  }, {
    path: "/",
    component: _07982ff9,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
