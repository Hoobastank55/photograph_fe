<template>
   
        
    <div class=" flex  align-ver align-hor blog">
        
                            
                            
                                <div class="flex   column blog-content">
                                    <h6>CANDYSHOOT MET SAMANTHA KISS</h6>
                                    <p>
                                        Introduction Readymade godard brooklyn, kogi shoreditch hashtag hella shaman kitsch man bun pinterest flexitarian. Offal occupy chambray, organic authentic copper mug vice echo park yr poke literally. Ugh coloring book fingerstache schlitz retro cronut man bun copper mug small batch…</p>
                                           
                                    </div>
                                    <div class="flex align-ver blog-photo">
                                <img src="~@/assets/images/project/samantha.jpg">
                            </div>
                              
                        </div>
                        
</template>
<script>
export default {
    
}
</script>

<style>
.blog-content h6{
    font-size: 200%;
    margin-top: 30px;
    margin-right: 50px;
    

}
.blog-content h6::after{
    content: '';
    background: red;
    height: 2px;
    width: 100px;
    display: block;
    margin-top: 10px;
}
.blog{
    width: 100%;
    height: 100vh;
    
}
.blog-photo img{
    height: 400px;
    margin-left: 40px;
}
.blog-content p{
    margin-top: 30px;
    margin-bottom: 35px;
    line-height: 25px;
    font-size: 100%;
}

.blog-content{
    width: 50%;
    text-align: left;
    
    
}

    

    
</style>