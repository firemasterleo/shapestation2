<template>
    <div class="body">
        <div class="section1">
            
            <h1>hwllo world </h1>

            <div class="image">
                <img src="../assets/imagesectionnew2.png" alt="">
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
// * {
//     padding: 0;
//     margin: 0;
//     list-style: none;
//     text-decoration: none;
//     box-sizing: border-box;
//     font-family: 'Caudex', serif;

// }
.body {
    height: 100vh;
    width: 100vw;
    background-color: black;
    color: white;
    padding-inline: 1rem;
    padding-top: 2rem;
    border: solid green;

    .section1 {
        padding: 10px;
        width: 100%;
        height: 65vh;
        border: solid red;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        // justify-content: space-around;

        h1 {
            font-size: auto;
            border: solid yellow;
            // height: 10rem;
        }
        .image {
            border: solid blue;
            padding: 10px;
            // width: 100%;
            // height: 100%;
            overflow: hidden;

            img {
            padding: 10px;

                position: relative;

                border: solid white;
                // margin: 5px;
                width: 100%;
                height: 100%;
                // object-fit: scale-down;
                // scale: 1.5;
                object-fit: cover;


                @media (max-width: 380px) {

                }


            }


        }
    }


}


</style>