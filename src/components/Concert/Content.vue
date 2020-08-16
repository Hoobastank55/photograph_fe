<template>
    <div>         
        <div class="flex align-hor wrap concert" >
            <div v-for="(src, index) in images"
                :key="index"
                class="img"
                @click="() => showImg(index)"
                :style="{backgroundImage: 'url('+ src + ')'}"
            >

            </div>
            <vue-easy-lightbox
                :visible="visible"
                :imgs="images"
                :index="index"
                @hide="handleHide"
            ></vue-easy-lightbox>
        </div>
    </div>
    

</template>
<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
    components: {
        VueEasyLightbox
    },
    data(){
        return{
           visible: false, 
           index: 0,
        }
    },
    methods:{
        showImg (index) {
            this.index = index
            this.visible = true
        },
        handleHide () {
            this.visible = false
        }
    },
    computed: {
         images(){
             const count = 14
             let image_arr = []
             for (let index = 0; index < count; index++) {
                 image_arr.push(require("@/assets/images/concert/concert"+index+".jpg"))                 
             }

             return image_arr
         }
    }
    
}
</script>

<style>
.concert{
    background-color: black;
    width: 100%;
    
}


.concert .img{
    height: 600px;
    width: 400px;
    background-size: cover;
    background-position: center;
    border: 4px solid white;
    margin: 10px;
    
}
.concert .img:hover{
    cursor: pointer;
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

