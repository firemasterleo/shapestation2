<template>
    <div class="body">

        <div class="herosection">
            
            <div class="veil">
    
            </div>
    
            <div class="image">
                                <img src="../assets/sideprojectpic.jpg" alt="">
                            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.body {
    height: 100vh;
    width: 99vw;
    overflow: hidden;
    .herosection {
        height: 100vh;
    width: 100vw;
        overflow: hidden;
        background-color: black;
        
        .veil {
            position: absolute;
            z-index: 2;

            background-color: hsla(0, 0%, 0%, 0.804);
            width: 100vw;
            height: 100vh;
    
        }
    
        .image {
            position: relative;
            z-index: 1;
            width: 100vw;
            height: 100vh;
            
            img {
                position: relative;
                top: 0rem;
                width: 120%;
                height: auto;
                rotate: 40deg;
                // object-fit: cover;

            }
        }
    }
}

</style>

<script setup>


</script>