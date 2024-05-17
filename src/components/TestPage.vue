<template>
    <div class="body">
        <div class="section1">
            <div class="herosection">
                <div class="veil">

                </div>

                <div class="swiper">
                    <div class="topslide">
                <div class="image">

                

                    <img src="../assets/soapic1.jpg" alt="">
                </div>
                    </div>
                    <div class="bottomslide">
                <div class="image">

                

                    <img src="../assets/soapic2.jpg" alt="">
                </div>
                    </div>

                </div>
                <div class="displaytext">
                    <div class="heading">
                        <h4 class="welcome" ref="welcome">Welcome</h4>
                        <h4 class="to" ref="to">to</h4>
                        <h4 class="soatech" ref="soatech">SOATech</h4>
                        
                    </div>
                    
                    
                    <div class="subheading">

                        <div class="line1">
                            <h4 class="specialized" ref="specialized">Specializing</h4>
                            <h4 class="inn" ref="inn">in</h4>
                            <h4 class="motorized" ref="motorized">Motorized</h4>
                            <h4 class="gates" ref="gates">Gates,</h4>
                            
                        </div>
                        <div class="line2">
                            <h4 class="electric" ref="electric">ELectric</h4>
                            <h4 class="fences" ref="fences">Fences,</h4>
                            <h4 class="and" ref="and">and</h4>
                            <h4 class="cctv" ref="cctv">CCTV</h4>
                            <h4 class="systems" ref="systems">Systems.</h4>

                        </div>

                    </div>
                    <div class="buttons">


                        <button class="freeconsultation">
                            Request For a Free Consultation

                        </button>

                        <button class="services">
                            Learn More About Our Services

                        </button>
                    </div>
                </div>
            </div>
            
           

            

        </div>

        <div class="section2">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Nihil quo ipsam ex? Commodi excepturi accusantium corrupti 
                veniam explicabo! Doloremque vero dolores tempore odio. Tempora voluptatibus officia 
                laboriosam temporibus incidunt molestias?</p>
            <p>Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Nihil quo ipsam ex? Commodi excepturi accusantium corrupti 
                veniam explicabo! Doloremque vero dolores tempore odio. Tempora voluptatibus officia 
                laboriosam temporibus incidunt molestias?</p>
        </div>


        

    </div>
</template>

<style lang="scss" scoped>

.body {
    height: 100rem;
    width: 100vw;
    background-color: black;
    color: white;
    // padding-inline: 1rem;
    padding-top: 2rem;
    // border: solid rgb(80, 109, 80);
    overflow: hidden;

    .section1 {
        width: 100vw;

        
        
        .herosection {
            // border: solid blue;
            height: 32rem;
            // border: solid rgb(137, 158, 236);
            background-color: rgb(51, 57, 49);
            .veil {
                position: absolute;
                background-color: rgba(0, 0, 0, 0.731);
                z-index: 1;
                height: 32rem;
                width: 100vw;

        

            }
            
            .swiper {

                position: absolute;
                // border: solid rgba(255, 0, 0, 0.676);
                // z-index: -3;
                // width: 100vw;
                width: 100%;
                padding-inline: 1.1rem;
                
                .topslide {
            border-radius: 1rem;

                    position: relative;
                    z-index: 0;
                            overflow: hidden;
                            width: 100%;

                            .image {
                                height: 15.8rem;
                                width: 100%;
                            
                                
                                img {
                                    width: 100%;
                                    height: 100%;
                                    // object-fit: cover;
                                }
                            }
                        }

                        .bottomslide {
            border-radius: 1rem;
                            

                            position: relative;
                            z-index: 0;

                            .image {
                                height: 15.8rem;
                                width: 100%;
                            
                                
                                img {
                                    width: 100%;
                                    height: 100%;
                                    // object-fit: cover;
                                }
                            }
                        }

                    }
            
            
            .displaytext {
                // border: solid red;
                display: flex;
                flex-direction: column;
                gap: 20px;
                // align-items: center;
                padding-top: 4rem ;
                padding-right: 1rem;
                position: relative;
                z-index: 1;
                
    

    
                .heading {
                    // border: solid red;
                    // border: solid red;
                    display: flex;
                    overflow: hidden;
                    // flex-direction: column;
                    gap: 6px;
                    color: rgb(233, 223, 223);
                    text-align: left;
                    margin-left: 2rem;
                    font-size: 30px;

                    .welcome {
                        animation: scrollAnimation 5s ease-out 2s; /* Adjust duration and timing function as needed */

                    }
                }
                
                .subheading {
                    margin-left: 2rem;
                    display: flex;
                    gap: 4px;
                    flex-direction: column;
                    font-size: 24px;
                    overflow: hidden;


                    .line1 {
                        display: flex;
                        gap: 6px;

                    }
                    .line2 {
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
                padding-left: 2rem;

                    // border: solid red;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    // height: 2rem;
                    width: 354px;
                    
                    .freeconsultation {
                        border-radius: 0.5rem;
                        border: none;
                        font-size: 20px;
                        font-weight: 900;
                        height: 2.5rem;
                    background-color: rgb(104, 148, 90);
                    color: rgb(243, 232, 232);
         

                    

                    }
                    .services {
                        border: none;
                        background-color: rgb(104, 148, 90);
                    color: rgb(243, 232, 232);



                        border-radius: 0.5rem;
                        font-size: 20px;
                        font-weight: 900;
                        height: 2.5rem;
                    }
                }
            }

    
        }
    
      
    
        }

        .section2 {
            position: relative;
            z-index: 3;

            padding-inline: 1rem;
            margin-top: -5rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            


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

const specialized = ref(null);
const inn = ref(null);

const motorized = ref(null);
const gates = ref(null);

const electric = ref(null);
const fences = ref(null);
const and = ref(null);
const cctv = ref(null);
const systems = ref(null);


onMounted(() => {
  const tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power.out()'} });
  const tl2 = gsap.timeline({ defaults: { duration: 0.3, ease: 'power.out()'} });
  const tl3 = gsap.timeline({ defaults: { duration: 0.3, ease: 'power.out()'} });

  tl.from(welcome.value, { y: -40, delay: 0.2 }), '<'; //use 1.5 if its homepage
  tl.from(to.value, { y: -40, delay: 0.09 }, '<'); // Add the second animation to start immediately after the first one
  tl.from(soatech.value, { y: -40, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one

  tl3.from(specialized.value, { y: -40, delay: 0.3 }), '<'; // use 1.6 if its homepage   Add the third animation to start immediately after the second one
  tl3.from(inn.value, { y: -40, delay: 0.09 }, '<'); // Add the second animation to start immediately after the first one
  tl3.from(motorized.value, { y: -40, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one
  tl3.from(gates.value, { y: -40, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one

  tl2.from(electric.value, { y: -30, delay: 0.4 }), '<'; //use 1.8
  tl2.from(fences.value, { y: -40, delay: 0.09 }, '<'); // Add the second animation to start immediately after the first one
  tl2.from(and.value, { y: -40, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one
  tl2.from(cctv.value, { y: -40, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one
  tl2.from(systems.value, { y: -40, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one

  
});

</script>