<template>
   
        <div class=" flex column baslik">
                <ul class="flex breadcrumb">
                    <li><router-link to="/">Home</router-link></li>
                    <li>Blog</li>
                </ul>

            <h2>BLOG</h2>
        <div class=" flex  align-ver align-hor blog">
        
                            
                            
                                <div class="flex   column blog-content">
                                    <router-link to="/blog/samantha">CANDYSHOOT MET SAMANTHA KISS</router-link>
                                    <p>
                                        Introduction Readymade godard brooklyn, kogi shoreditch hashtag hella shaman kitsch man bun pinterest flexitarian. Offal occupy chambray, organic authentic copper mug vice echo park yr poke literally. Ugh coloring book fingerstache schlitz retro cronut man bun copper mug small batch…</p>
                                           
                                    </div>
                                    <div class="flex align-ver blog-photo">
                                <img src="~@/assets/images/project/samantha.jpg">
                            </div>
                              
                        </div>
                        </div>
</template>
<script>
export default {
    
}
</script>

<style>
.breadcrumb{
    margin-top: 90px;
    margin-left: 140px;
    color: black;
}
.breadcrumb li{
    margin: 0px;
    list-style: none;

}

.breadcrumb li a{
    text-decoration: none;
    color:gray;
    margin-right: 5px;
}
.breadcrumb li a:hover{
    text-decoration: none;
    color:gray;
    margin-right: 5px;
    text-decoration: underline;
}
ul.breadcrumb li+li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}
.baslik h2{
    color: black;
    margin-left: 85px;
    font-size: 300%;
    padding-top: 10px;
}
.baslik h2::after{
    background:lightslategray;
    display: block;
    content: '';
    height: 1px;
    width: 100%; 
    margin-top: 15px;   
}
.blog-content a{
    font-size: 200%;
    margin-top: 10px;
    margin-right: 50px;
    text-decoration: none;
    color: black;

}
.blog-content a:hover{
    text-decoration: underline;
    
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
    height: 70vh;
    
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