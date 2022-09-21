import {createRouter, createWebHashHistory} from 'vue-router';

const MainPage = () => import('../view/MainPage');
const CatApps = () => import('../view/CatApps');

const routes = [
  {path: '/:pathMatch(.*)*', redirect: 'MainPage'},
  {name: 'MainPage', component: MainPage},
  {name: 'CatApps', component: CatApps},
];

routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});


router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'ios app';
  }
  window.scrollTo(0, 0);
});

export {router};
