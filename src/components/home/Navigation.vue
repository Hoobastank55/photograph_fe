<template>
    <nav class="flex between">
        <img class="logo" src="@/assets/images/home/cropped-mArtijnPhotography_trans_white.png">
             <ul class="flex align-ver align-hor nav-main">
                <router-link class="nav-item" :to="{name: item}" v-for="(item,index) in items" :key="index">
                    <li class="flex align-hor align-ver nav-item">
                        <p>{{item}}</p>
                        <ul class="flex column sub-nav-wrap" v-if="item == 'Portfolio'">
                            <router-link class="nav-item" v-for="(subitem, index) in subs" :key="index" :to="{name:subitem}"><li class="flex align-hor align-ver sub-nav-item">{{subitem}}</li></router-link>
                        </ul>
                    </li>
                </router-link>
            </ul>
       
    </nav>
</template>

<script>
export default {
    
        data(){
            return{
                items:['Home', 'About', 'Blog','Portfolio','Contact'],
                subs:['Citynature','Concert','Projects','Portrait']
            }
        }
        
        
   
   
}
</script>
<style>


nav{
    background-color: black;
    opacity: .8;
    height: 75px;
    min-height: 75px;
    position: fixed;
    width: 100%;
    
}

.logo{
    height: 75px;
    display: block;
}
.nav-main {
    list-style: none;
    color: white;
    margin-right: 100px;
    
}
ul.nav-main li.nav-item {
    position: relative;
    width: 100px;
    height: 45px;
    
}
ul.nav-main li.nav-item:hover{
    background-color: red;
    border-radius: 0;
    transition: background-color 0.5s;
    border-radius: 5px;

    
}


nav a.nav-item  {
    color: #fff;
    text-decoration: none;

}
nav a.nav-item:hover:nth-child(4){
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color:red;
}

/*---------------------------------------------*/


ul.sub-nav-wrap {
    list-style: none;
    display: none;
    top: 45px;
    left: 0;
    height: 30px;
    position: absolute;
    
    
}


ul.sub-nav-wrap li {
    width: 100px;
    text-align: center;
    padding-top: 10px;
    background-color: black;
    opacity: .8;
    padding-bottom: 10px;
    height: 25px;
    
}
ul.sub-nav-wrap li:hover {
   background-color: red;
   transition: background-color 0.5s;
   
opacity: .9;

}
ul.nav-main li.nav-item:hover .sub-nav-wrap{
    display: block;
}
h1{
font-size: 500%;
    color: white;
    font-family: 'Varela', serif;
    
}

h2{
    font-size: 200%;
    color: white;
    font-family: 'Varela', sans-serif;
    padding: 50px;

    

}





.header-content a{
    background-color: black;
    color: white;
    font-size: 140%;
    text-decoration: none;
    border: 2px solid white;
    padding: 10px 20px;
}

</style>