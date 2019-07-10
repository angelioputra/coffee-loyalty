
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          isRootPage: true,
          title: 'Kopi'
        },
        component: () => import('pages/Index.vue')
      },
      {
        path: '/reload',
        component: () => import('layouts/BlankLayout.vue'),
        children: [
          {
            path: '',
            name: 'reload',
            meta: {
              title: 'Reload'
            },
            component: () => import('pages/Reload.vue')
          },
          {
            path: 'payment',
            name: 'reload.payment',
            meta: {
              title: 'Reload'
            },
            component: () => import('pages/ReloadPayment.vue')
          }
        ]
      },
      {
        path: '/order',
        component: () => import('layouts/BlankLayout.vue'),
        children: [
          {
            path: '',
            name: 'order',
            meta: {
              title: 'Order'
            },
            component: () => import('pages/Order.vue')
          },
          {
            path: 'product',
            name: 'order.product',
            meta: {
              title: 'Java Chip Frappuccino'
            },
            component: () => import('pages/OrderProduct.vue')
          },
          {
            path: 'review',
            name: 'order.review',
            meta: {
              title: 'Review Order'
            },
            component: () => import('pages/OrderReview.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      {
        path: 'reload/payment/success',
        name: 'reload.payment.success',
        component: () => import('pages/ReloadPaymentSuccess.vue')
      }
    ]
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
