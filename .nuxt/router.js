import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _23360ca3 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _7ca8a0e0 = () => interopDefault(import('../pages/club.vue' /* webpackChunkName: "pages/club" */))
const _42edaaaa = () => interopDefault(import('../pages/history.vue' /* webpackChunkName: "pages/history" */))
const _3049a143 = () => interopDefault(import('../pages/manager.vue' /* webpackChunkName: "pages/manager" */))
const _719b6110 = () => interopDefault(import('../pages/rider.vue' /* webpackChunkName: "pages/rider" */))
const _502dd012 = () => interopDefault(import('../pages/store.vue' /* webpackChunkName: "pages/store" */))
const _32e8016c = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _c2e0693e = () => interopDefault(import('../pages/track.vue' /* webpackChunkName: "pages/track" */))
const _73b99310 = () => interopDefault(import('../pages/article/articles.vue' /* webpackChunkName: "pages/article/articles" */))
const _6ff00c92 = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _42ede768 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _23360ca3,
    name: "about"
  }, {
    path: "/club",
    component: _7ca8a0e0,
    name: "club"
  }, {
    path: "/history",
    component: _42edaaaa,
    name: "history"
  }, {
    path: "/manager",
    component: _3049a143,
    name: "manager"
  }, {
    path: "/rider",
    component: _719b6110,
    name: "rider"
  }, {
    path: "/store",
    component: _502dd012,
    name: "store"
  }, {
    path: "/test",
    component: _32e8016c,
    name: "test"
  }, {
    path: "/track",
    component: _c2e0693e,
    name: "track"
  }, {
    path: "/article/articles",
    component: _73b99310,
    name: "article-articles"
  }, {
    path: "/article/:id?",
    component: _6ff00c92,
    name: "article-id"
  }, {
    path: "/",
    component: _42ede768,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
