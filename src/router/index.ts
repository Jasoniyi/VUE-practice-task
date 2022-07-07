import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blog.vue'
import Post from '../views/Post.vue'
import Author from '../views/Author.vue'
import AuthorPosts from '../components/AuthorPosts.vue'
import About from '../views/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
},
{
  path: '/about',
  name: 'Abouts',
  component: About
},
{
  path: '/post/:id',
  name: 'Post',
  component: Post,
},
{
  path: '/author/:id',
  name: 'Author',
  component: Author,
  children: [
    {
     path: 'posts', 
     component: AuthorPosts
    },
    

  ]
},
  // {
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
