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
                    <div class="welcome">
                        <h4 class="welcome">Welcome to SOATech</h4>
                        <h4 class="specialized">Specializing in Motorized Gates, ELectric Fences, and CCTV Systems.</h4>

                    </div>

                    <div class="subheading">

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
                gap: 10px;
                // align-items: center;
                padding-top: 4rem ;
                padding-right: 1rem;
                position: relative;
                z-index: 1;
                
    
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
                        font-size: 16px;
                        font-weight: 900;
                        height: 2.5rem;
                    background-color: rgb(104, 148, 90);
                    color: rgb(243, 232, 232);
         

                    

                    }
                    .services {
                    background-color: antiquewhite;

                        border-radius: 0.5rem;
                        font-size: 16px;
                        font-weight: 900;
                        height: 2.5rem;
                    }
                }
    
                .welcome {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    color: rgb(233, 223, 223);
                    text-align: left;
                    margin-left: 1rem;
                    font-size: 30px;
    
                    .specialized {
                        text-align: left;
                    margin-left: 1rem;
                        font-size: 23px;
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