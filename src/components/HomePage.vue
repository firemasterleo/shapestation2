<template>
    <div class="body">

        <div class="section1">
            <div class="corousel">

                <div class="slidecontainer1">

                    <div class="slide1">
                    <img src="../assets/chesspic3.jpg" alt="">

                        
                    </div>
                    <div class="slide2">
                    <img src="../assets/iphone15mockup.png" alt="">


                    </div>
                    <div class="slide3">
                    <img src="../assets/phonepic.jpg" alt="">


                    </div>


                </div>

            </div>
            <div class="text">
                <h1>Website Development</h1>
                <p>Every brand deserves a Webpage that reflects Creativity and Commitment to say the very least.</p>

            </div>
            <button class="p">Learn more </button>
            
           
                <div class="image">

                    <img src="../assets/laptopmockup.png" alt="">
                </div>
  
        </div>

        <div class="section2">

            <div class="text">
                <h1>UI/UX Designing</h1>
                <p>Design your websites and apps with simplicity, functionality, and Efficiency in mind.</p>

            </div>
            <button class="p">Learn more </button>
            
           
                <div class="image">

                    <img src="../assets/imagesection2.png" alt="">
                </div>
  
        </div>
        <!-- <div class="section2">
            <div class="image">

<img src="../assets/mockup.jpg" alt="">
</div>


        </div> -->
        <div class="section3">

        </div>
        <div class="section4">

        </div>

    </div>

</template>

<style lang="scss" scoped>
.body {
    height: 150rem;

//     @keyframes scrollAnimation {
//     0% {


//     }
//     100% {
//         transform: rotateX(0deg);

//     }
// }
    
    .section1 {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        background-color: #000000;
        color: #f5f5f7;
        padding-top: 4rem;
        margin-top: -4rem;
        padding-inline: 2rem;


        height: 35.5rem;
        perspective: 2000px;
        .text {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            // border: solid red;
            text-align: center;
            padding-top: 2rem;
            color: #fbfbfb;
            h1 {
                font-size: 34px;
                color: rgba(255, 255, 255, 0.413);

                      
            }

            p {
                font-size: 22px;

                color: rgba(255, 255, 255, 0.413);
            }
        }
        button {
            border: none;
            width: 9rem;
            height: 2rem;
            border-radius: 0.5rem;
            font-size: 22px;
            background-color: #48713E;
            color: rgba(255, 255, 255, 0.413);

        }

        .image {

         height: auto;
            width: 100vw;
            overflow: hidden;

                img {
                    position: relative;
                    bottom: 0.5rem;
                    right: 3.5rem;

                    width: 120%;
                    height: 100%;
                    object-fit: cover;
                }
        }
        .corousel {

            // border: solid red;
            position: absolute;
            z-index: 100;
            top: 20.3rem;
            width: 19.3rem;
            height: 12.33rem;
            background-color: WHITE;
            overflow: hidden;

            h1 {
                color: black;
            }

            .slidecontainer1 {
                height: 36.99rem;
                width: 100%;
                // border: solid blue;
                position: absolute;
                top: -0rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                

                .slide1 {
                    height: 12.33rem;
                    width: 100%;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .slide2 {
                    height: 12.33rem;
                    width: 100%;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .slide3 {
                    height: 12.33rem;
                    width: 100%;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

        // .container {
        //     position: relative;
        //     top: 4rem;
        //     height: 15rem;
        //     width: 23rem;
        //     border-radius: 1.6rem;
        //     overflow: hidden;

        //     border: solid rgb(116, 120, 126) 7px;
        //     // transform-style: preserve-3d;
        //     // transform-origin: bottom center 20px;
        //     // transform: rotateX(50deg);
        //     // animation: scrollAnimation 1s ease forwards 1.08s; /* Apply the animation */


          



        // }


        
    }
    .section2 {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        background-color: #eaeaef;
        color: #f5f5f7;
        padding-top: 0rem;

        padding-inline: 2rem;


        height: 654px;
        overflow: hidden;
        border: solid blue;

        .text {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            text-align: center;
            padding-top: 2rem;
            color: #000000;
            h1 {
                font-size: 34px;
                color: rgb(0, 0, 0);

                      
            }

            p {
                font-size: 22px;

                color: rgb(0, 0, 0);
            }
        }
        button {
            border: none;
            width: 9rem;
            height: 2rem;
            border-radius: 0.5rem;
            font-size: 22px;
            background-color: #48713E;
            color: rgba(255, 255, 255, 0.413);

        }

        .image {
            // border: solid red;

         height: auto;
            width: 100vw;
            // overflow: hidden;

                img {
                    position: relative;
                    top: -14rem;


                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
        }
    }
    


    .section3 {
        background-color: #eaeaef;
        height: 32rem;

    }

    .section4 {
        
        background-color: #fbfbfb;
        height: 32rem;
        border: solid rgb(98, 139, 14);
        
        
    }
}


</style>

<script>

</script>