<template>
    
        <section class="flex align-ver align-hor">
                    <div class="flex align-ver align-hor column port-section">
                            
                            <div class="flex align-ver align-hor  port-content">
                                
                                    <router-link to="/portrait">Portrait</router-link>  
                                    <router-link to="/portfolio" class="middle">Boudoir</router-link> 
                                    <router-link to="/citynature">City&Nature</router-link> 
                                </div>
                             <div class="flex align-ver align-hor  port-content">
                                    <router-link to="/portrait"> Artistic Nude</router-link>  
                                    <router-link to="/concert" class="middle">Concert</router-link> 
                                    <router-link to="/projects">Projects</router-link> 
                               
                                </div>
                               
                                


                             </div>

                    
                            
                </section>
   
</template>

<script>
export default {
    
}
</script>

<style>
.port-section{
    height: 40vh;
    width: 100%;
    background-color:white;
}
.middle{
    margin: 50px;
}

 

.port-content{
    height: 70%;
    
}

.port-content a{
    background-color: black;
    color: white;
    font-size: 150%;
    text-decoration: none;
    border: 2px solid white;
    padding: 10px;
    width: 190px;
    text-align: center;
    
}
.port-content a:hover{
    color: red;
    border:2px solid red;
}


</style>