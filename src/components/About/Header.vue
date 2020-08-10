<template>
    <div class="flex align-ver align-hor landing">
            <div class="flex align-ver align-hor column landing-content">
                <h1>ABOUT ME</h1>
                <h3>MARTIJN BERGEVOET</h3>
            </div>
        </div>
    
</template>

<script>
export default {
    
}
</script>

<style>
.landing{
    background-image:linear-gradient(0deg, rgba(3, 3, 3, 0.521), rgba(3, 3, 3, 0.521)), url(~@/assets/images/headers/sky.jpg);
    background-size: cover;
    width: 100%;
    height: 50vh;
}
.landing-content{
    width: 40%;
    border: 2px solid white;
    
}
h3{
    padding: 30px;
    color: white;
    font-size: 90%;
    padding-top: 0;
}
    

    
</style>