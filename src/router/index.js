import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/HomePage.vue';
import TestPage from '../components/TestPage.vue';
import SideProject from '../components/SideProject.vue';

const router = createRouter({
    history: createWebHistory(), 
      routes: [
        
        {
            path: '/',
            name: 'HomePage',
            component: HomePage

        },
        {
            path: '/SideProject',
            name: 'SideProject',
            component: SideProject

        },
        {
            path: '/TestPage',
            name: 'TestPage',
            component: TestPage

        }

        
    ],
  scrollBehavior(to, from, savedPosition) {
    // Return the desired position when navigating back and forward
    if (savedPosition) {
      return savedPosition;
    } else {
      // Scroll to the top by default
      return { left: 0, top: 0 };
    }
  },
  
});

export default router