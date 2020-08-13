<template>
    <div>
         
                        <div class="flex wrap " v-for="item in 14" :key="item">
                            <img class="" :src="image(item)" />
                        </div>
        </div>
    

</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        image(param){
            param = param -1
            let image = require("@/assets/images/concert/concert"+param+".jpg")
            return image
        }
    }
    
}
</script>

<style>
.concert{
    background-color: black;
    
}


.concert-photo img{
    height: 300px;
    border: 4px solid white;
    margin: 20px 5px;
}
.concert-photo-inner img{
    height: 300px;
    border: 4px solid white;
    margin: 0 5px;
}
.concert-photo-vertical img{
    height: 675px;
    border: 4px solid white;
    margin:  5px;

}  

</style>

