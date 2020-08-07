<template>
   <div>
        
    <div class=" flex  align-ver align-hor project">
        
                            
                                <div class="flex   column project-content">
                                    <h6>CANDY SHOOT</h6>
                                    <p>
                                       Een vrolijke kleurrijke fotoshoot in deze corona tijd, dat beoogde ik met deze over de top candyshoot samen met model Samantha Kiss.</p>
                                        <a href="#">PROJECT CANDY</a>
                                        
                                           
                                    </div>
                                    <div class="flex align-ver project-photo">
                                <img src="~@/assets/images/samantha.jpg">
                            </div>
                            
                              
                        </div>
                        <div class=" flex  align-ver align-hor project-second">

                                    <div class="flex align-ver project-second-photo">
                                <img src="~@/assets/images/zincir.jpg">
                            </div>
                            
                                <div class="flex   column project-second-content">
                                    <h6>CHAINS</h6>
                                    <p>
                                       Kettingen, het verbindt, overbrugd kracht en laat zien dat er connectie is tussen ons allen.Bovenal “KRACHT”, en dat wil ik benadrukken in mijn doorlopende serie “CHAINS”</p>
                                        <a href="#">PROJECT CHAINS</a>
                                        
                                           
                                    </div>
                                    
                            
                              
                        </div>
                        </div>
</template>
<script>
export default {
    
}
</script>

<style>
h6{
    font-size: 250%;
    margin-top: 30px;
    margin-right: 50px;
    

}
.project{
    width: 100%;
    margin-top: 70px;
    
    
    
}
.project-photo img{
    height: 500px;
    margin-left: 40px;
}
.project-content p{
    
    margin-bottom: 35px;
    line-height: 25px;
    font-size: 100%;
}

.project-content{
    width: 30%;
    text-align: left;
    align-items: left;
}
.project-content a{
    background-color: black;
    color: white;
    font-size: 150%;
    text-decoration: none;
    border: 2px solid white;
    padding: 10px;
    width: 200px;
    text-align: center;
}
.project-content a:hover{
    color: red;
    border:2px solid red;
}

/*-------------------------------*/
.project-second{
    width: 100%;
    margin-bottom: 70px;
    
    
}
.project-second-photo img{
    height: 350px;
    margin-right: 40px;
}
.project-second-content p{
    
    margin-bottom: 35px;
    line-height: 25px;
    font-size: 100%;
}

.project-second-content{
    width: 40%;
    text-align: left;
    align-items: left;
}
.project-second-content a{
    background-color: black;
    color: white;
    font-size: 150%;
    text-decoration: none;
    border: 2px solid white;
    padding: 10px;
    width: 200px;
    text-align: center;
}
.project-second-content a:hover{
    color: red;
    border:2px solid red;
}

    
    

    
</style>