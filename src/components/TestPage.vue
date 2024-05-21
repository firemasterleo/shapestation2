<template>
    <div class="body">
        <div class="section1">
            <div class="veil">

            </div>
            <div class="herosection">

                <div class="swiper">
                    <div class="topslide">
                        <div class="image" ref="image1">
                            <img src="../assets/electricfence1.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="displaytext">

                    <div class="heading">
                        <h4 class="welcome" ref="welcome">Welcome</h4>
                        <h4 class="to" ref="to">to</h4>
                        <h4 class="soatech" ref="soatech">SOA-Tech</h4> 
                    </div>
                    
                    
                    <div class="subheading">

                        <div class="line1">
                            <h4 class="expert" ref="expert">Expert</h4>
                            <h4 class="installation" ref="installation">Installation of</h4>
                            <h4 class="motorized" ref="motorized">Motorized</h4>
                            <h4 class="gates" ref="gates">Gates,</h4>
                        </div>
                        <div class="line2">
                            <h4 class="electric" ref="electric">Electric</h4>
                            <h4 class="fences" ref="fences">Fences,</h4>
                            <h4 class="firealarm" ref="firealarm">Fire-Alarm,</h4>
                            <h4 class="system" ref="system">systems</h4>
                            <h4 class="and" ref="and">and</h4>
                            
                        </div>
                        
                        <div class="line3">
                            <h4 class="cctv" ref="cctv">CCTV</h4>
                            <h4 class="systems" ref="systems">Systems.</h4>

                        </div>

                    </div>
                    <div class="buttons">


                        <button class="freeconsultation" ref="button1">
                            Consultation
                            
                        </button>
                        <button class="services" ref="button2">
                            Contact Us

                        </button>

                    </div>
                </div>
            </div>
            
           

            

        </div>

        <div class="section2">
            <div class="aboutus">
                <h1 ref="aboutus">About Us
                    
                </h1>
                
            </div>
            <div class="underline"></div>
            <div class="aboutustext" ref="aboutustext">
                <p>Welcome to SOA-Tech, your premier destination for comprehensive home and office security solutions and upgrades. Specializing in motorized gate installations, electric fence setups, and state-of-the-art CCTV systems, we ensure that your property remains secure and protected.</p>
                <p>At SOA-Tech, we are committed to enhancing both the safety and functionality of your living and working environments.</p>
                <p>Beyond security, our expert team transforms spaces with meticulous home renovations, office upgrades, and kitchen and bathroom remodeling.</p>

            </div>
        </div>
        <div class="section3">

            <div class="textsection">

                <div class="heading">
                    <h1 ref="ourservices">Our Services</h1>
    
                </div>
                <div class="underline"></div>
                <div class="servicelist">
    
                    <div class="motorizedgates" :class="{ 'is-expanded': is_expanded }" @click="ToggleMenu">

                        <div class="heading">
                            <h2 ref="motorize">
                                <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg>
                                
                                Motorized Gates</h2>
                            <svg :class="{ 'is-expanded': is_expanded }" xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='26' height='26'><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>

                        </div>
                        <div class="content">
                            <p>Lorem ipsum sit amet consectetur adipisicing elit. Incidunt sequi praesentium consectetur eaque fugit fugiat reprehenderit </p>
                            <button @click="ToggleMenu6">See more</button>
                        </div>

        
                    </div>
                    <div class="electricfence" :class="{ 'is-expanded2': is_expanded2 }" @click="ToggleMenu2">

                        <div class="heading">

                            <h2 ref="elect">
                                <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg>
                                
                                Electric Fence</h2>
                            <svg :class="{ 'is-expanded2': is_expanded2 }" xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
        
                        </div>
                        <div class="content"></div>
                    </div>
                    <div class="cctv" :class="{ 'is-expanded3': is_expanded3 }" @click="ToggleMenu3">
                        <div class="heading">

                            <h2 ref="cctvsys">
                                <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg>
                                
                                CCTV Systems</h2>
                            <svg :class="{ 'is-expanded3': is_expanded3 }" xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
        
                        </div>
                        <div class="content"></div>
                    </div>
                    <div class="firealarm" :class="{ 'is-expanded4': is_expanded4 }" @click="ToggleMenu4">
                        <div class="heading">

                            <h2 ref="firesys">
                                <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg>
                                
                                Fire-Alarm Systems</h2>
                            <svg :class="{ 'is-expanded4': is_expanded4 }" xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
        
                        </div>
                        <div class="content"></div>
                    </div>
                    <div class="otherservices" :class="{ 'is-expanded5': is_expanded5 }" @click="ToggleMenu5">
                        <div class="heading">
                            
                            <h2 ref="other">
                                <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg>
                                
                                Other Services</h2>
                            <svg :class="{ 'is-expanded5': is_expanded5 }" xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
        
                        </div>
                        <div class="content"></div>

        
                        <!-- <div class="Home & Office Renovations">
                            <h2>Kitchen & Bathroom Remodelling</h2>
                        </div>
                        <div class="kitchenandbath">
                            <h2>Kitchen & Bathroom Remodelling</h2>
                        </div> -->
                    </div>
                </div>
            </div>




            <div class="imagesection">
                <div class="veil"></div>
                <div class="image" ref="image2">
                    <img src="../assets/electricfence2.jpg" alt="">
                </div>
    
            </div>
        </div>

        <div class="section4">
            <h2>Why Choose SOA-Tech ?</h2>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

        </div>


        

    </div>
</template>

<style lang="scss" scoped>

.body {
    // height: 100rem;
    width: 100vw;
    background-color: rgb(255, 255, 255);
    // color: white;
    padding-top: 0rem;
    // border: solid rgb(80, 109, 80);
    overflow: hidden;
    // padding-inline: 0.6rem;
    margin-top: -4rem;


    .section1 {
        position: relative;
        height: 56vh;
        background-color: rgb(0, 0, 0);
        width: 100%;
        overflow: hidden;
        
        
        .veil {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.511);
            z-index: 1;
            height: 100%;
            width: 100%;


    

        }
        
        .herosection {
            position: relative;
            // border: solid blue;
            height: 100%;
            overflow: hidden;
            width: 100%;
            // padding-inline: 1rem;
            // padding-right: 1rem;
            // padding-left: 1rem;

            .swiper {

                // position: relative;
                overflow: hidden;
                // border-radius: 1rem;
                // border: solid rgba(255, 0, 0, 0.676);
   
                width: 100%;
                height: 100%;
                
                .topslide {
                    height: 100%;
                    width: 100%;
                    overflow: hidden;

                            .image {
                                height: 100%;
                                width: 100%;

                            
                                
                                img {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                }
                            }
                        }

                    }
            
            
            .displaytext {
                position: relative;
                top: -100%;
                // border: solid red;
                display: flex;
                flex-direction: column;
                gap: 2rem;
                // align-items: center;
                padding-top: 8rem ;
                // padding-right: 2rem;
                z-index: 1;
                
    

    
                .heading {
                    // border: solid red;
                    display: flex;
                    // flex-direction: column;
                    justify-content: center;
                    overflow: hidden;
                    // flex-direction: column;
                    gap: 6px;
                    color: rgba(239, 236, 232, 0.753);
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
                    // margin-left: 2rem;
                    font-size: 34px;
                    
   
                }
                
                .subheading {
                    // margin-left: 2rem;
                    display: flex;
                    // align-items: center;
                    gap: 4px;
                    flex-direction: column;
                    font-size: 20px;
                    color: rgba(239, 236, 232, 0.753);
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
                    overflow: hidden;
                    padding-left: 1rem;


                    .line1 {
                        display: flex;
                        gap: 6px;

                    }
                    .line2 {
                        display: flex;
                        gap: 6px;
                        overflow: hidden;

                    }
                    .line3 {
                        display: flex;
                        gap: 6px;
                        overflow: hidden;

                    }
                    
                                    // .specialized {
                                    //     text-align: left;
                                    // margin-left: 1rem;
                                    //     font-size: 23px;
                                    // }

                }

                .buttons {

                    display: flex;
                    justify-content: center;
                    gap: 20px;

                    .freeconsultation {
                        border-radius: 3rem;
                        border: none;
                        font-size: 22px;
                        font-weight: 900;
                        height: 3.5rem;
                        width: 10rem;
                        background-color: rgba(212, 210, 199, 0.785);
                        color: rgb(0, 0, 0);
                    

                    }
                    .services {
                        border: none;
                        background-color: rgba(100, 135, 89, 0.815);
                        color: rgb(0, 0, 0);
         

                    width: 10rem;




                        border-radius: 3rem;
                        font-size: 22px;
                        font-weight: 900;
                        height: 3.5rem;
                    }
                }
            }

    
        }
    
      
    
        }

        .section2 {
            // border: solid red;

            position: relative;
            z-index: 4;
            height: 32rem;
            background-color: rgb(8, 8, 8);
            // margin-top: 2rem;

            // margin-inline: 0.5rem;
            padding-inline: 1rem;
            padding-top: 1rem;
            // margin-top: -5rem;
            display: flex;
            flex-direction: column;
            // gap: 2rem;

            .aboutus {
                overflow: hidden;

                h1 {
                    color: rgba(239, 236, 232, 0.753);
                    font-size: 24px;
                }
            }

            
            .underline {

                margin-top: 0.5rem;
                margin-bottom: 2rem;
                width: 28%;
                height: 0.5px;
                background-color: rgb(239, 169, 5);
            }
            
            .aboutustext {
                opacity: 1;
                display: flex;
                flex-direction: column;
                gap: 2rem;
                // margin-top: 0.5rem;


                p {
                    color: rgba(239, 236, 232, 0.753);
                    font-size: 20px;
    
                }
            }

            
            

            


        }
        .section3 {
            position: relative;
            z-index: 3;
            // border: solid red;
            height: 40rem;
            width: 100%;
            background-color: rgb(224, 42, 42);
            // margin-top: 2rem;
            // padding-top: 1rem;
            // overflow: hidden;


            // margin-inline: 0.5rem;
            // padding-inline: 1rem;

            .textsection {
                // border: solid blue;
                padding-top: 1rem;
                position: absolute;
                z-index: 1;
                height: 24rem;
                width: 100%;

                .heading {
                    h1 {
                        margin-left: 1rem;
                        color: rgba(239, 236, 232, 0.753);
                        font-size: 24px;
                    }
                }
                .underline {
                // position: absolute;
                margin-top: 0.5rem;
                margin-left: 1rem;
                width: 36%;
                height: 0.5px;
                background-color: rgba(223, 220, 18, 0.731);     
             }

             .servicelist {
                margin-top: 2rem;
                margin-left: 1rem;
                margin-right: 1rem;
                // border: solid red;


                .motorizedgates {
                    .heading {
                        
                        border: none;
                    }
                    .content {
                        button {
                            position: relative;
                        z-index: 100;
                        }
                    }
                }
                .otherservices {
                    height: 4rem;
                    border-bottom: solid 1px;
                    color: rgba(239, 236, 232, 0.753);

                    margin-left: 1rem;
                    .heading {
                        margin-left: 0rem;
                    }


                }


                div {
                    height: 4rem;
                    overflow: hidden;
                    transition: height 0.3s ease-out;

                    &.is-expanded {
                        height: 12rem;
                        
                        
                    }
                    &.is-expanded2 {
                        height: 12rem;
                        
                    }
                    &.is-expanded3 {
                        height: 12rem;
                        
                    }
                    &.is-expanded4 {
                        height: 12rem;
                        
                    }
                    &.is-expanded5 {
                        height: 12rem;
                        
                    }

                   

                    .heading {
                    display: flex;
                    justify-content: space-between;
                    height: 4rem;
                    margin-left: 1rem;
                    border-top: solid 1px;
                    align-items: center;
                    color: rgba(239, 236, 232, 0.753);
                    font-size: 14px;
                    // border-bottom: solid;
                    svg {
                        fill: rgba(223, 179, 18, 0.731);
                        width: 26px;
                        height: 26px;
                        stroke-width: 1px;
                        transition: rotate 0.3s ease-out;

                        

                        &.is-expanded {
                        rotate: 90deg ;
                        
                        
                    }
                        &.is-expanded2 {
                        rotate: 90deg ;
                        
                        
                    }
                        &.is-expanded3 {
                        rotate: 90deg ;
                        
                        
                    }
                        &.is-expanded4 {
                        rotate: 90deg ;
                        
                        
                    }
                        &.is-expanded5 {
                        rotate: 90deg ;
                        
                        
                    }


                    }
                    h2 {
                        display: flex;
                        gap: 10px;
                        align-items: center;
                        justify-content: center;
                        svg {
                            fill: rgba(239, 236, 232, 0.753);
                            width: 12px;
                            height: 12px;

                        }
                    }

                }
                .content {
                    // overflow: none;
                    // border: solid white;
                    // margin-bottom: 1rem;
                    margin-left: 2rem;
                    width: 92%;
                    height: fit-content;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    justify-content: center;
                    align-items: center;

                    p {
                        color: rgba(239, 236, 232, 0.753);
                        font-size: 18px;
                    }
                    button {
                        width: 8rem;
                        height: 2rem;
                        font-size: 22px;
                        background-color: rgba(100, 135, 89, 0.815);
                        color: black;
                        border: none;
                        border-radius: 0.5rem;
                    }
                }

                }

                
             }
            }

            .imagesection {
                position: relative;
                z-index: 0;
                margin-inline: -1rem;

                     height: 45rem;

                     .veil {
                    position: absolute;
                    z-index: 14;
                    height: 100%;
                    width: 100%;
                    background-color: rgba(0, 0, 0, 0.808);
                }

            .image {

                // z-index: 7;
                width: 100%;
                height: 100%;
              

                img {
                    // margin-top: -10rem;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 1;
                }
            }

        }







            
         
        }
        
        .section4 {
            position: relative;
            z-index: 4;
            height: 50rem;
            width: 100%;
            padding:1rem;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            // background-color: black;

            div {
                width: 100%;
                height: 20rem;
                background-color: #f5f5f7;

            }
        }
        
       

    }    


</style>


<script setup>

import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue';


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const is_expanded = ref(false)

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
}

const is_expanded2 = ref(false)

const ToggleMenu2 = () => {
  is_expanded2.value = !is_expanded2.value;
}

const is_expanded3 = ref(false)

const ToggleMenu3 = () => {
  is_expanded3.value = !is_expanded3.value;
}

const is_expanded4 = ref(false)

const ToggleMenu4 = () => {
  is_expanded4.value = !is_expanded4.value;
}

const is_expanded5 = ref(false)

const ToggleMenu5 = () => {
  is_expanded5.value = !is_expanded5.value;
}


const ToggleMenu6 = (event) => {
    event.stopPropagation(); 
};


const welcome = ref(null);
const to = ref(null);
const soatech = ref(null);

const expert = ref(null);
const installation = ref(null);
const off = ref(null);

const motorized = ref(null);
const gates = ref(null);

const electric = ref(null);
const fences = ref(null);
const firealarm = ref(null);
const system = ref(null);
const and = ref(null);
const cctv = ref(null);
const systems = ref(null);

const image1 = ref(null);

const button1 = ref(null);
const button2 = ref(null);

const aboutus = ref(null);
const aboutustext = ref(null);

const image2 = ref(null);


const ourservices = ref(null);
const motorize = ref(null);
const elect = ref(null);
const cctvsys = ref(null);
const firesys = ref(null);
const other = ref(null);




onMounted(() => {
  const tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power.out()'} });
  const tl2 = gsap.timeline({ defaults: { duration: 0.4, ease: 'power.out()'} });
  const tl3 = gsap.timeline({ defaults: { duration: 0.5, ease: 'power.out()'} });
  const tl4 = gsap.timeline({ defaults: { duration: 1.1, ease: 'power.out()'} });
  const tl5 = gsap.timeline({ defaults: { duration: 1, ease: 'power.out()'} });
  const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ourservices.value, // The element that triggers the timeline
    start: 'top 90%', // When the top of the trigger element hits 90% of the viewport height
    end: 'bottom 10%', // When the bottom of the trigger element hits 10% of the viewport height
    // scrub: 1, // Smooth scrubbing
    // markers: true, // Enable markers for debugging (remove in production)
    // toggleActions: 'play none none reverse', // Play on enter, do nothing on leave, do nothing on enterBack, reverse on leaveBack

  }
});
//   const tl5 = gsap.timeline({ defaults: { duration: 0.5, ease: 'power.out()'} });

  tl.from(welcome.value, { y: -40, delay: 0.2 }), '<'; //use 1.5 if its homepage
  tl.from(to.value, { y: -40, delay: 0.2 }, '<'); // Add the second animation to start immediately after the first one
  tl.from(soatech.value, { y: -40, delay: 0.2 }, '<'); // Add the third animation to start immediately after the second one

  tl2.from(expert.value, { y: -40, delay: 0.05 }), '<'; // use 1.6 if its homepage   Add the third animation to start immediately after the second one
  tl2.from(installation.value, { y: -40, delay: 0.3 }, '<'); // Add the second animation to start immediately after the first one
  tl2.from(off.value, { y: -40, delay: 0.1 }, '<'); // Add the second animation to start immediately after the first one

  tl2.from(motorized.value, { y: -40, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one
  tl2.from(gates.value, { y: -40, delay: 0.1}, '<'); // Add the third animation to start immediately after the second one

  tl2.from(electric.value, { y: -40, delay: -0.3 }), '<'; //use 1.8
  tl2.from(fences.value, { y: -40, delay: 0.1 }, '<'); // Add the second animation to start immediately after the first one
  tl2.from(firealarm.value, { y: -40, delay: 0.1 }, '<'); // Add the second animation to start immediately after the first one
  tl2.from(system.value, { y: -40, delay: 0.1 }, '<'); // Add the second animation to start immediately after the first one
  tl2.from(and.value, { y: -40, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one
  tl2.from(cctv.value, { y: -40, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one
  tl2.from(systems.value, { y: -40, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one


  tl3.from(image1.value, {  delay: 0.1 }, '<') // Your existing animation
   .to(image1.value, { scale: 1.3, opacity: 0.5, duration: 30 }, '<'); // Adding scale and opacity animation

  tl4.from(button1.value, {  opacity: 0, delay: 1 }, '<') // Your existing animation
   .to(button1.value, { opacity: 1, delay: 0 }, '<'); // Adding scale and opacity animation
  tl4.from(button2.value, {  opacity: 0, }, '<') // Your existing animation
   .to(button2.value, { opacity: 1 }, '<'); // Adding scale and opacity animation

  tl5.from(aboutus.value, { y: 40, duration: 1, delay: 0 }, '<'); // Add the third animation to start immediately after the second one
  tl5.from(aboutustext.value, { y: 50, opacity:0, duration: 1.4, delay: 0 }, '<'); // Add the third animation to start immediately after the second one

  tl6.from(ourservices.value, { y: 50, opacity:0, delay: 0 }, '<'); // Add the third animation to start immediately after the second one
  tl6.from(motorize.value, { x: -50, opacity:0, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one
  tl6.from(elect.value, { x: -50, opacity:0, delay: 0.15 }, '<'); // Add the third animation to start immediately after the second one
  tl6.from(cctvsys.value, { x: -50, opacity:0, delay: 0.2 }, '<'); // Add the third animation to start immediately after the second one
  tl6.from(firesys.value, { x: -50, opacity:0, delay: 0.25 }, '<'); // Add the third animation to start immediately after the second one
  tl6.from(other.value, { x: -50, opacity:0, delay: 0.3 }, '<'); // Add the third animation to start immediately after the second one


  gsap.to(image2.value, {
      y: '-15%', // Adjust the percentage for the parallax speed
      scale: 1.05, // Adjust the scale value for the zoom level

      ease: 'none',
      scrollTrigger: {
        trigger: image2.value,
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: 1,
        // markers: true,

      },
    });

});

</script>