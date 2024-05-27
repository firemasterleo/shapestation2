<template>
    <div class="body">

        <div class="herosection">
            
            <div class="veil">
    
            </div>
    
            <div class="image">
                <img src="../assets/bgpic.jpg" alt="">
            </div>
            <div class="text">
                <div>
                    <h1>Unleashing Africa's </h1>
                    <h1>Carbon Potential to Foster </h1>
                    <h1>Sustainable Livelihoods</h1>
                </div>
                <div>
                    <p>Empowering Communities and Preserving Ecosystems</p>
                    <p>Harnessing Africas Carbon Potential for Sustainable</p>
                    <p>Livelihoods and Environmental conservation</p>
    
                    </div>

                </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.body {
    height: 100vh;
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
                right: 13rem;

                width: auto;
                height: 70vh;
                object-fit: cover;

            }
        }
        .text {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            position: absolute;
            z-index: 3;
            color: rgb(209, 223, 219);
            top: 5rem;
            text-align: center;

            div {
                p {
                    font-size: 18px
                }
            }
            
        }
    }
}

</style>

<script setup>


</script>