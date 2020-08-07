<template>
    <header class="flex column">
        <app-navigation />
        <app-content />
    </header>        
</template>

<script>
import appNavigation from "./Navigation"
import appContent from "./Content"
export default {
    components: {
        appNavigation,
        appContent,
    }
}
</script>
<style>
    header{
    background-image: url(~@/assets/images/home/Header.jpg);
    background-size: cover;
    height:100vh;
    
}
nav{
    background-color: black;
    opacity: .8;
    height: 75px;
    min-height: 75px;
    
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
    
}
ul.nav-main li.nav-item:hover{
    background-color: red;
    
    height: 60%;
    transition: background-color 0.5s;
    border-radius: 5px;

    
}
.header-content{
    padding-bottom: 40px;
    height: 100%;
}



ul.sub-nav-wrap {
    list-style: none;
    display: none;
    top: 46px;
    left: 0;
    height: 30px;
    position: absolute;
    
}

/*---------------------------------------------*/





ul.sub-nav-wrap li {
    width: 100px;
    text-align: center;
    padding-top: 10px;
    background-color: black;
    opacity: .8;
    padding-bottom: 10px;
    
}
ul.sub-nav-wrap li:hover {
   background-color: red;
   transition: background-color 0.5s;
   border-radius: 5px;
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
    font-size: 200%;
    text-decoration: none;
    border: 2px solid white;
    padding: 10px 20px;
}
</style>