import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6e325f1f = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _4645c4d8 = () => interopDefault(import('../pages/club.vue' /* webpackChunkName: "pages/club" */))
const _7fc163b4 = () => interopDefault(import('../pages/history.vue' /* webpackChunkName: "pages/history" */))
const _a5097682 = () => interopDefault(import('../pages/manager.vue' /* webpackChunkName: "pages/manager" */))
const _86d098e8 = () => interopDefault(import('../pages/rider.vue' /* webpackChunkName: "pages/rider" */))
const _22e56a73 = () => interopDefault(import('../pages/store.vue' /* webpackChunkName: "pages/store" */))
const _4e196f70 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _2ce7c446 = () => interopDefault(import('../pages/track.vue' /* webpackChunkName: "pages/track" */))
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
    path: "/club",
    component: _4645c4d8,
    name: "club"
  }, {
    path: "/history",
    component: _7fc163b4,
    name: "history"
  }, {
    path: "/manager",
    component: _a5097682,
    name: "manager"
  }, {
    path: "/rider",
    component: _86d098e8,
    name: "rider"
  }, {
    path: "/store",
    component: _22e56a73,
    name: "store"
  }, {
    path: "/test",
    component: _4e196f70,
    name: "test"
  }, {
    path: "/track",
    component: _2ce7c446,
    name: "track"
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
