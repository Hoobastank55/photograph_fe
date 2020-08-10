<template>
    <div>
          <div class=" flex  align-ver align-hor profile">
                            <div class="flex align-ver prof-photo">
                                <img src="~@/assets/images/home/ben.jpg">
                            </div>
                                <div class="flex   column prof-content">
                                    <h2>ABOUT ME</h2>
                                    <span class="under-line"></span>
                                    <p>
                                        Banh mi semiotics tumeric meh, unicorn ugh umami mumblecore echo park cronut. Lomo man bun chambray meh wake up raclette vegan rooftop party brunch ennui. Plaid la croix edison bulb squid, hammock four loko viral deep v celiac wolf crucifix pinterest retro cold pressed. Truffaut gochujang semiotics meh, subway tile bushwick pok pok pok deep.</p>
                                        <p><router-link to="/about">Read More</router-link></p>   
                                    </div>

                        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .profile{
    width: 100%;
    height: 100vh;
    background-color: black;
}
.prof-photo img{
    height: 600px;
    margin-right: 40px;
}
.prof-content p{
    color: white;
    margin-bottom: 35px;
    line-height: 20px;
    font-size: 100%;
}
.prof-content a{
    background-color: black;
    color: white;
    font-size: 120%;
    text-decoration: none;
    border: 2px solid white;
    padding: 10px;
    width: 115px;
}

.prof-content a:hover{
    background-color: black;
    color:red;
    font-size: 120%;
    text-decoration: none;
    border: 2px solid red;
    padding: 10px;
    width: 115px;
}
.prof-content{
    width: 30%;
    text-align: left;
    align-items: left;
}
.prof-content h2{
    padding-left: 0;
}


</style>