import _ from 'lodash'
/* Router for pages */
import userRoutes from './modules/user'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: _.concat([
      { path: '', component: () => import('pages/Index.vue') }
    ],
    userRoutes
    )
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
