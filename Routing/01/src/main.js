import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: {needsAuth:true},//can be acesses through $route
      components: { default: TeamsList, footer: TeamsFooter }, // there is a need for an extra component here
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        } //carefull this syntax can match to all link so if you want another component it should be above this line
      ]
    },
    { path: '/users', components: { default: UsersList, footer: UsersFooter }, 
    beforeEnter(to,_from,next){
      if(to.meta.needsAuth){
        // check if user is auth
        next();
      }
      next();
       // local guard
    },
    },
    
    { path: '/:catch(.*)', component: NotFound }
  ],
  linkActiveClass: 'router-link-active',
  scrollBehavior(_to, _from, savedPosition) {
    //console.log(to,from,savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  }
});
router.beforeEach(function(to, from, next) {
  console.log('global beforeEach');
  console.log(to, from);
  next(); // will set were the next "hop" is
}); //guards are in place for navigation
const app = createApp(App);
app.use(router);
app.mount('#app');
