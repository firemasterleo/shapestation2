<template>
    <div class="body">

        <div class="herosection">
            
            <div class="veil">
    
            </div>
    
            <div class="image">
                <img src="../assets/bgpic.jpg" alt="">
            </div>
            <div class="text">
                <div class="primary">
                    <h1>Unleashing Africa's </h1>
                    <h1>Carbon Potential to Foster </h1>
                    <h1>Sustainable Livelihoods</h1>
                </div>
                <div>
                    <p>Empowering Communities and Preserving Ecosystems</p>
                    <p>Harnessing Africas Carbon Potential for Sustainable</p>
                    <p>Livelihoods and Environmental conservation</p>
    
                    </div>
                    <div class="button">
                        <button>Contact us</button>
                        <button>Schedule a Consultation</button>
                    </div>




                </div>
        </div>
<div class="section2">
    <div class="class1"></div>
    <div class="class2"></div>
    <div class="class3"></div>
    <div class="class4"></div>
</div>

    </div>

</template>

<style lang="scss" scoped>
.body {
    height: fit-content;
    width: 100vw;
    overflow: hidden;
    .herosection {
        position: relative;
        // border: solid red;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        display: flex;
        justify-content: center;
        background-color: rgb(229, 235, 233);
        
        .veil {
            position: absolute;
            z-index: 2;

            background-color: hsla(0, 0%, 0%, 0.507);
            width: 100vw;
            height: 100vh;
    
        }
    
        .image {
            position: absolute;
            z-index: 1;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            
            img {
                position: relative;
                // right: 13rem;

                width: 100%;
                height: 60%;
                object-fit: cover;

            }
        }
        .text {
            opacity: 0;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            position: absolute;
            z-index: 3;
            color: rgb(209, 223, 219);
            top: 5rem;
            text-align: center;
            margin-top: 2rem;


            .primary {
                transform: translateY(-1rem);
            }
            



            div {
                p {
                    font-size: 18px
                }
            }

            .button {
                display: flex;
                // border: solid;
                justify-content: center;
                gap: 2rem;
                transform: translateY(1rem);


                button {

                    font-size: 20px;
                    border-radius: 1rem;
                    padding: 0.5rem;
                    border: none;
                    background-color: #FFC107;
                }
                :nth-child(2) {
                    background-color: #87CEEB;

                }
            }
            
        }
    }
    .section2 {

        div {
            height: 10rem;
        }
        .class1 {
            background-color: #228B22;
        }
        .class2 {
            background-color: #8B4513;
        }
        .class3 {
            background-color: #87CEEB;
        }
        .class4 {
            background-color: #FF8C00;
        }
 
    }
}

</style>

<script setup>
import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue';


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: 'ease-in' }, delay: 1.5 });
    const tl2 = gsap.timeline({ defaults: { duration: 0.5, ease: 'ease-in' }, delay: 1.5 });
    const tl3 = gsap.timeline({ defaults: { duration: 0.5, ease: 'ease-in' }, delay: 1.5 });


      tl.to(".text", { opacity: 1,}); //target css using this code and you dont need 
      tl2.to(".primary", { y: 0,}); //target css using this code and you dont need 
      tl3.to(".button", { y: 0,}); //target css using this code and you dont need 


});




</script>