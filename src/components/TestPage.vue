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
                    <div class="bottomslide">
                        <!-- <div class="image" ref="image2">
                            <img src="../assets/electricfence2.jpg" alt="">
                        </div> -->
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
            <h1 ref="aboutus">About Us
                
            </h1>
            <div class="underline" ref="aboutustext"></div>
            <p>Welcome to SOA-Tech, your premier destination for comprehensive home and office security solutions and upgrades. Specializing in motorized gate installations, electric fence setups, and state-of-the-art CCTV systems, we ensure that your property remains secure and protected.</p>
            <p>At SOA-Tech, we are committed to enhancing both the safety and functionality of your living and working environments.</p>
            <p>Beyond security, our expert team transforms spaces with meticulous home renovations, office upgrades, and kitchen and bathroom remodeling.</p>
        </div>
        <div class="section3">
            <h1>Our Services</h1>
            <div class="underline"></div>


        </div>
        <div class="section4">

        </div>


        

    </div>
</template>

<style lang="scss" scoped>

.body {
    // height: 100rem;
    width: 100vw;
    background-color: rgb(18, 18, 18);
    // color: white;
    padding-top: 0rem;
    // border: solid rgb(80, 109, 80);
    overflow: hidden;
    // padding-inline: 0.6rem;
    margin-top: -4rem;


    .section1 {
        position: relative;
        height: 50vh;
        background-color: black;
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
            z-index: 3;
            height: 30rem;
            background-color: rgb(35, 32, 32);
            // margin-top: 2rem;

            // margin-inline: 0.5rem;
            padding-inline: 1rem;
            padding-top: 1rem;
            // margin-top: -5rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            h1 {
                color: rgba(239, 236, 232, 0.753);
                font-size: 24px;
            }
            p {
                color: rgba(239, 236, 232, 0.753);
                font-size: 20px;

            }

            .underline {
                position: absolute;
                top: 3.5rem;
                width: 28%;
                height: 0.5px;
                background-color: rgb(239, 169, 5);
            }


            

            


        }
        .section3 {
            position: relative;
            // border: solid red;
            height: 50rem;
            background-color: rgb(24, 23, 23);
            margin-top: 2rem;
            padding-top: 0.5rem;


            margin-inline: 0.5rem;
            padding-inline: 0.5rem;

            h1 {
                color: rgba(239, 236, 232, 0.753);
                font-size: 24px;

            }




            
            .underline {
                position: absolute;
                top: 2.8rem;
                width: 36%;
                height: 0.5px;
                background-color: rgba(223, 220, 18, 0.731);            }
        }
        
        .section4 {
            margin-top: 2rem;

            // border: solid red;

            height: 50rem;
            background-color: rgb(220, 231, 235);
    
            margin-inline: 0.5rem;
            padding-inline: 0.5rem;

        }

    }    


</style>


<script setup>

import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue';


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


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
const and = ref(null);
const cctv = ref(null);
const systems = ref(null);

const image1 = ref(null);

const button1 = ref(null);
const button2 = ref(null);

const aboutus = ref(null);
const aboutustext = ref(null);


onMounted(() => {
  const tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power.out()'} });
  const tl2 = gsap.timeline({ defaults: { duration: 0.4, ease: 'power.out()'} });
  const tl3 = gsap.timeline({ defaults: { duration: 0.5, ease: 'power.out()'} });
  const tl4 = gsap.timeline({ defaults: { duration: 1.1, ease: 'power.out()'} });
  const tl5 = gsap.timeline({ defaults: { duration: 1, ease: 'power.out()'} });
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
  tl2.from(and.value, { y: -40, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one
  tl2.from(cctv.value, { y: -40, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one
  tl2.from(systems.value, { y: -40, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one


  tl3.from(image1.value, {  delay: 0.1 }, '<') // Your existing animation
   .to(image1.value, { scale: 1.3, opacity: 0.5, duration: 30 }, '<'); // Adding scale and opacity animation

  tl4.from(button1.value, {  opacity: 0, delay: 1 }, '<') // Your existing animation
   .to(button1.value, { opacity: 1, delay: 0 }, '<'); // Adding scale and opacity animation
  tl4.from(button2.value, {  opacity: 0, }, '<') // Your existing animation
   .to(button2.value, { opacity: 1 }, '<'); // Adding scale and opacity animation

  tl5.from(aboutus.value, { y: 40, delay: 0.2 }, '<'); // Add the third animation to start immediately after the second one

});

</script>