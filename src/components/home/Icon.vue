<template>
    
        <section class="flex column">
                    <div class="flex align-ver align-hor column icon-section">
                            <div class=" flex align-ver align-hor column icon-section-title">
                                    <h1 class="flex align-ver align-hor">WHAT AM I DOING</h1>
                                    

                            </div>
                            <div class="flex align-ver align-hor  icon-content">
                                <div class=" flex align-ver align-hor column world">
                                     <router-link to="citynature"><i class="fa fa-globe" aria-hidden="true"></i></router-link> 
                                    <router-link to="citynature">NATURE & CITY</router-link> 
                                </div>
                                <div class=" flex align-ver align-hor column world">
                                    <router-link to="concert"><i class="fa fa-music" aria-hidden="true"></i></router-link>
                                   <router-link to="concert">CONCERT</router-link>
                                </div>
                                <div class=" flex align-ver align-hor column world">
                                    <router-link to="projects"><i class="fa fa-camera" aria-hidden="true"></i></router-link>
                                    <router-link to="projects">PROJECTS</router-link>
                                </div>
                               
                                


                             </div>
                             <div class="flex align-ver align-hor  icon-content">
                                <div class=" flex align-ver align-hor column world">
                                    <router-link to=""><i class="fa fa-heart" aria-hidden="true"></i></router-link>
                                    <router-link to="">ARTISTIC NUDE</router-link>
                                </div>
                                <div class=" flex align-ver align-hor column world"> 
                                    <router-link to="/portrait"><i class="fa fa-user-circle-o" aria-hidden="true"></i></router-link> 
                                    <router-link to="/portrait"> PORTRAIT</router-link> 
                                    
                                </div>
                                <div class=" flex align-ver align-hor column world">
                                   <router-link to=""> <i class="fa fa-user-secret" aria-hidden="true"></i></router-link>
                                    <router-link to="">BOUDOIR</router-link>
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
.icon-section{
    height: 600px;
    width: 100%;
    background-color:white;
}
.icon-section-title h1{
font-size: 150%;
color: black;
height: 80px;
min-height: 100px;
}
.icon-section-title h2{
    font-size: 100%;
    color: black;
    
}
.icon-content{
    height: 300px;
    
}
.world a{
    font-size: 100%;
    font-weight: bold;
    padding: 10px 30px;
    text-decoration: none;
    color: black;
    
    

}
.world i{
    font-size: 300%;
    color: red;
    padding: 10px 100px;

}

</style>