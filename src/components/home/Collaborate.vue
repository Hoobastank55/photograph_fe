<template>
    
         <div class="flex align-ver align-hor collaborate">
                                <h1>YES FUN, COLLABORATE!</h1>
                               <router-link to="/contact">Get in Touch</router-link>
                                
                        </div>
    
</template>

<script>
export default {
    
}
</script>

<style>
.collaborate{
    background-color: white;
    width: 100%;
    height: 100px;
}
.collaborate h1{
    color: black;
    font-size: 200%;
    margin-right: 50px;
}
.collaborate a{
    background-color: black;
    color: white;
    font-size: 130%;
    text-decoration: none;
    border: 2px solid black;
    padding: 10px 20px;
}
.collaborate a:hover{
    background-color: black;
    color:red;
    font-size: 130%;
    text-decoration: none;
    border: 2px solid red;
    padding: 10px 20px;
}
    
</style>