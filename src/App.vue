<template>
  <LenisScroll/>
  <div class="firstscreen" ref="firstscreen">
    <div class="innerbox"></div>
    <h1>Shapestation</h1>
  </div>

  <div class="mainveil" :class="{ 'is-expanded': is_expanded }" @click="ToggleMenu"></div>
  
  <!-- for headers to work well with scrolling they need to be free within the template not within a div -->
  <div class="headercontainer" :class="{ 'ishidingheader': isHidingHeader && !isScrollingUp }"> 
    <div class="header" :class="{ 'is-expanded': is_expanded }"> 
        <!-- <div class="logo">
            <img src="./assets/unikmelogo.png" alt="proselogo">
        </div> -->
        <div class="name">
          <h1>SOA-Tech</h1>
            <!-- <img src="./assets/unikmename.png" alt="proselogo"> -->
        </div>
        <div class="hamburger" :class="{ 'is-active': is_expanded }" @click="ToggleMenu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        
    </div>

  
  </div>
  <div class="menuslide" :class="{ 'is-expanded': is_expanded }">

    <div class="topmenuslide" :class="{ 'is-expanded': is_expanded }">


        <div class="home">
          <router-link class="menuitem" to="/" @click="ToggleMenu">
            <h3>Home</h3>
          </router-link>
        </div>
        <div class="TestPage">
          <router-link class="menuitem" to="/TestPage" @click="ToggleMenu">
            <h3>TestPage</h3>
          </router-link>
        </div>
        <div class="home">
          <router-link class="menuitem" to="/SideProject" @click="ToggleMenu">
            <h3>SideProject</h3>
          </router-link>
        </div>
        <div class="uiux">
          <router-link class="menuitem" to="/InteriorPage" @click="ToggleMenu">
            <h3>UI/UX</h3>
          </router-link>
        </div>
        <div class="webdev">
          <router-link class="menuitem" to="/InteriorPage" @click="ToggleMenu">
            <h3>Website Development</h3>
          </router-link>
        </div>

        <div class="appdev">
          <router-link class="menuitem" to="/WardrobeKing" @click="ToggleMenu">
            <h3>Mobile Apps Development</h3>
          </router-link>
        </div>
        <div class="about">
          <router-link class="menuitem" to="/WardrobeKing" @click="ToggleMenu">
            <h3>About Shapestation</h3>
          </router-link>
        </div>
        <div class="blog">
          <router-link class="menuitem" to="/Chess" @click="ToggleMenu">
            <h3>Trending-Tech Blog</h3>
          </router-link>
        </div>
        <div class="blog">
          <router-link class="menuitem" to="/Chess" @click="ToggleMenu">
            <h3>Shapestation Corps</h3>
          </router-link>
        </div>

</div>
    

  </div>  



    <div class="routersection" :class="{ 'is-expanded': is_expanded }">
      <router-view/>

    </div>




<div class="footer" :class="{ 'is-expanded': is_expanded }">
  <div class="logoandnav">

      <div class="logoname">

      </div>

      <div class="nav">
        <div class="navitem"><a href="">About Us</a></div>
        <div class="navitem"><a href="">Contact</a></div>
        <div class="navitem"><a href="">Terms and Condition</a></div>
  
      <div class="socials">
        <a href="https://www.instagram.com/_unikme_couture/" target="_blank">
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>               
        </a>
  
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg>
        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg>
        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path></svg>
        </div>
        
      </div>

  </div>

  <div class="rights">
    <p>© 2022 Shapestatioin inc. All rights reserved.</p>
  </div>
</div>




</template>

<style lang="scss" scoped>
@import './sass/main.scss';
</style>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import LenisScroll from './components/LenisScroll.vue';

import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue';



import './sass/main.scss';




//togglemenu
const is_expanded = ref(false)

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
}

const firstscreen = ref(null);

onMounted(() => {
const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power4.in()' } });

tl.to(firstscreen.value, { y: -1100, delay: 0.6 });



ScrollTrigger.create({
  trigger: firstscreen.value,
  start: 'top 100%',
  end: 'bottom 40%',
  // markers: true,
  
  animation: tl,

});






});


// let myScroll;

// const initScroll = () => {
//   myScroll = new iScroll('#wrapper', {
//     // Configurations for iScroll
//     scrollX: false, // Disable horizontal scrolling
//     scrollY: true, // Enable vertical scrolling
//     momentum: true, // Enable momentum scrolling
//     snap: false, // Disable snapping to elements
//     // Add more configurations as needed
//   });
// };

// const saveScrollPosition = () => {
//   localStorage.setItem('scrollPosition', myScroll.y);
// };

// const restoreScrollPosition = () => {
//   const storedPosition = localStorage.getItem('scrollPosition');
//   if (storedPosition !== null) {
//     myScroll.scrollTo(0, parseInt(storedPosition), 0);
//   }
// };

// // Initialize iScroll when the page is loaded
// window.addEventListener('load', () => {
//   initScroll();
//   restoreScrollPosition();
// });

// // Save scroll position just before the page is unloaded (refreshed)
// window.addEventListener('beforeunload', saveScrollPosition);

// // Cleanup iScroll instance when the component is unmounted
// onBeforeUnmount(() => {
//   myScroll.destroy();
// });





</script>
