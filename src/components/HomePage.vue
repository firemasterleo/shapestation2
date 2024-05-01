<template>
    <div class="body">

        <div class="section1">
            <div class="text">
                <h1>ShapeStation Digital</h1>
                <h1>Websites</h1>

                <p class="p">learn more </p>
            </div>
            
            <div class="container">
                <div class="image">

                    <img src="../assets/phonepic.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="section2">
            <div class="image">

<img src="../assets/mockup.jpg" alt="">
</div>


        </div>
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
        // justify-content: space-between;
        align-items: center;
        background-color: #000000;
        color: #f5f5f7;
        padding-top: 4rem;
        margin-top: -4rem;


        height: 35.5rem;
        perspective: 2000px;
        .text {
            text-align: center;
            padding-top: 2rem;
            color: #fbfbfb;

            .p {
                position: relative;
                top: 3rem;
                color: rgb(152, 152, 185);
            }
        }

        .container {
            position: relative;
            top: 4rem;
            height: 15rem;
            width: 23rem;
            border-radius: 1.6rem;
            overflow: hidden;

            border: solid rgb(116, 120, 126) 7px;
            // transform-style: preserve-3d;
            // transform-origin: bottom center 20px;
            // transform: rotateX(50deg);
            // animation: scrollAnimation 1s ease forwards 1.08s; /* Apply the animation */


            .image {

            width: 100%;
            height: 100%;

            img {

                width: 100%;
                height: 100%;
                object-fit: cover;
            }
}



        }


        
    }
    

    .section2 {
        
        background-color: #fbfbfb;
        height: 32rem;
        padding-inline: 2rem;
        .image {

        width: 100%;
        height: 100%;
        overflow: hidden;

        img {

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