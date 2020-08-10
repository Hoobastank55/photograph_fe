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

.header-content{
    padding-bottom: 40px;
    height: 100%;
}

</style>