<template>
  <div>
    <div class="flex align-hor samantha-main">
      <div class="left-content">
        <app-left></app-left>
        
        
      </div>
      <div class="right-content">
        <app-right></app-right>
       
      </div>
    </div>
  </div>
</template>

<script>
import appLeft from './LeftContent'
import appRight from './RightContent'

  export default {
    components:{
      appLeft,
      appRight

    }

  };
</script>


<style>
  
</style>