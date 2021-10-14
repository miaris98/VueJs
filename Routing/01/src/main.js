import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name:'teams',
      path: '/teams',
      component: TeamsList,// there is a need for an extra component here
      children: [ 
        { name:'team-members',path: ':teamId', component: TeamMembers, props: true } //carefull this syntax can match to all link so if you want another component it should be above this line
      ]
    },
    { path: '/users', component: UsersList },
    { path: '/:catch(.*)', component: NotFound }
  ],
  linkActiveClass: 'router-link-active'
});
const app = createApp(App);
app.use(router);
app.mount('#app');
