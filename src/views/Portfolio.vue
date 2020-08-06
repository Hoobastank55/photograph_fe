<template>
    <div>
        <app-header></app-header>
        <app-content></app-content>
        <app-photo></app-photo>
        <app-collaborate></app-collaborate>
        
    </div>
</template>


<script>
import appHeader from "../components/Portfolio/Header"
import appContent from "../components/Portfolio/Content"
import appPhoto from "../components/Portfolio/Photo"
import appCollaborate from "../components/home/Collaborate"
export default {
    
    components:{
        appHeader,
        appContent,
        appPhoto,
        appCollaborate,

        
    }
}
</script>

<style>
    
</style>