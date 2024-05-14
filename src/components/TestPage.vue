<template>
    <div class="body">
        <div class="section1">
            
            <h1>hwllo world </h1>

            <div class="image">
                <img src="../assets/imagesectionnew2.png" alt="">
            </div>
        </div>

        <div class="section2">

            <div class="image">
                <img src="../assets/laptopmockup.png" alt="">
            </div>


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

            

        </div>


        

    </div>
</template>

<style lang="scss" scoped>

.body {
    height: 100rem;
    width: 100vw;
    background-color: black;
    color: white;
    padding-inline: 1rem;
    padding-top: 2rem;
    border: solid green;
    overflow: hidden;

    .section1 {
        margin-bottom: 10rem;

        padding: 10px;
        width: 100%;
        height: 65vh;
        border: solid red;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        justify-content: space-between;

        h1 {
            font-size: auto;
            border: solid yellow;
            // height: 10rem;
        }
        .image {

            display: flex;
            justify-content: center;
            align-items: center;
            border: solid blue;
            padding: 10px;
            width: 100%;
            height: 100%;
            overflow: hidden;

            img {
            padding: 10px;

                position: relative;

                border: solid white;
                // margin: 5px;
                width: 300px;
                height: auto;
                // object-fit: scale-down;
                // scale: 1.5;
                // object-fit: contain;
                // object-fit: cover;


                @media (max-width: 380px) {

                }


            }


        }
    }

    .section2 {
        border: solid yellow;

        // overflow: hidden;
        padding: 10px;
        height: 30rem;
        width: 100%;
        position: relative;



        .image {
            // position: absolute;
            width: 100%;
            height: 100%;
            border: solid green;
            display: flex;
            justify-content: center;
            align-items: center;
            
            img {
                // border: solid red;
                width: 335px;
                height: auto;
            }
        }



            .corousel {
                border: solid red;
    
                position: relative;
                z-index: 100;
                // top: 0rem;
                // left: 16.5rem;

                width: 16rem;
                height: 10.5rem;
                background-color: WHITE;
                overflow: hidden;
    
                .slidecontainer1 {
                    height: 36.99rem;
                    width: 100%;
                    // border: solid blue;
                    position: absolute;
                    top: -7rem;
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

    }




    


}


</style>