import { createRouter, createWebHashHistory } from 'vue-router'
// import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/how',
    name: 'How',
    component: loadPage('HowPage')
  },
  {
    path: '/create',
    name: 'Create',
    component: loadPage('CreatePage')
  },
  {
    path: '/wait',
    name: 'Wait',
    component: loadPage('WaitPage')
  },
  {
    path: '/play',
    name: 'Play',
    component: loadPage('PlayPage')
  }
  // {
  //   path: '/account',
  //   name: 'Account',
  //   component: loadPage('AccountPage'),
  //   beforeEnter: authGuard
  // }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
