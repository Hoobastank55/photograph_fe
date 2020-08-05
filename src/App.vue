<template>
  <div id="app">
    <app-navigation v-if="this.$route.name != 'Home'" />
    <router-view class="main"></router-view>
    
    <app-footer></app-footer>
  </div>
</template>
<script>
import appNavigation from "./components/Navigation"
import appFooter from "./components/footer/Footer"

export default {
  components: {
    appNavigation,
    appFooter,
    
  },
}
</script>

<style>
@import "./assets/main.css";


</style>
