import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Count from '@/components/Count'
import Hi from '@/components/Hi'
import H1 from '@/components/H1'
import H11 from '@/components/H1-1'
import H12 from '@/components/H1-2'
import H2 from '@/components/H2'
import a1 from '@/components/a1'
import a2 from '@/components/a2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: {
        default: Hello,
        left: H1,
        right: H2
      }
    },
    {
      path: '/count',
      name: 'Count',
      component: Count
    },
    {
      path: '/Hi',
      name: 'Hi',
      component: Hi
    },
    {
      path: '/redirect',
      redirect: '/'
    },
    {
      path: '/H2/:newsId(\\d+)/:newsTitle',
      name: 'H2',
      component: H2
    },
    {
      path: '/H1',
      component: H1,
      children: [
        {
          path: 'H11',
          name: 'H11',
          component: H11
        },
        {
          path: 'H12',
          name: 'H12',
          component: H12
        }
      ]
    },
    {
      path: '/a1',
      name: 'a1',
      components: {
        default: Hello,
        left: a1,
        right: a2
      }
    },
    {
      path: '/a2',
      name: 'a2',
      components: {
        default: Hello,
        left: a2,
        right: a1
      }
    }
  ]
})
