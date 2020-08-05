<template>
    
         
                        <div class="portfolio">
                            <div class="flex align-ver align-hor column portfolio-title">
                                <h1>PORTFOLIO</h1>
                                <h2>MY CREATIVE PORTFOLIO</h2>
                            </div>
                            <div class="flex align-ver align-hor portfolio-photo">
                                <img src="~@/assets/images/foto-1.jpg">
                                <img src="~@/assets/images/foto-2.jpg">
                                <img src="~@/assets/images/foto-3.jpg">

                            </div>

                            <div class="flex align-ver align-hor portfolio-photo">
                                <img src="~@/assets/images/foto-4.jpg">
                                <img src="~@/assets/images/foto-5.jpg">
                                

                            </div>

                        </div>
                
        
    

</template>
<script>
export default {
    
}
</script>

<style>
.portfolio{
    background-color: black;
    color: white;
}
.portfolio-title{
    height: 200px;
    min-height: 200px;
}
.portfolio-title h1{

    font-size: 300%;

}
.portfolio-title h2{
    font-size: 100%;
}

.portfolio-photo img{
    height: 550px;
    border: 4px solid white;
    margin: 25px 20px;
}
    
</style>

