<template>
    <div class="flex align-hor align-ver column header-inner header-content">
        <h1 class="flex align-hor align-ver column">mARTijn Photography</h1>
        <h2 class="flex align-hor align-ver column">LOOK, FEEL, CLICK</h2>
        <p class="flex align-hor align-ver column"><router-link to="/portfolio"> View Portfolio</router-link></p>
        
    </div>
</template>
<style>
.header-content a{
    background-color: black;
    color: white;
    font-size: 140%;
    text-decoration: none;
    border: 2px solid white;
    padding: 10px 20px;
}
.header-content a:hover{
    background-color: black;
    color:red;
    font-size: 140%;
    text-decoration: none;
    border: 2px solid red;
    padding: 10px 20px;

}
    
</style>