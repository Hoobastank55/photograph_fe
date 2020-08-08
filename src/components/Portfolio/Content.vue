<template>
    
        <section class="flex align-ver align-hor">
                    <div class="flex align-ver align-hor column port-section">
                            
                            <div class="flex align-ver align-hor  port-content">
                                <div class=" flex align-ver align-hor port">
                                    <p><router-link to="/portrait">Portrait</router-link></p>  
                                </div>
                                <div class=" flex align-ver align-hor port">
                                    <p><router-link to="/portfolio">Boudoir</router-link></p>   
                                </div>
                                <div class=" flex align-ver align-hor  port">
                                   <p><router-link to="/citynature">City&Nature</router-link></p>  
                                </div>
                               
                                


                             </div>
                             <div class="flex align-ver align-hor  port-content">
                                <div class=" flex align-ver align-hor  port">
                                    <a href="#">Artistic Nude</a>   
                                </div>
                                <div class=" flex align-ver align-hor  port">
                                   <a href="#">Concert</a>
                                </div>
                                <div class=" flex align-ver align-hor  port">
                                   <a href="#">Projects</a>   
                                </div>
                               
                                


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
.port{
    margin: 0 70px;
}

</style>