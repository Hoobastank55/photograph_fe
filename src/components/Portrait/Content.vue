<template>
    <div>         
        <div class="flex align-hor wrap portrait" >
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
             const count = 32
             let image_arr = []
             for (let index = 1; index < count; index++) {
                 image_arr.push(require("@/assets/images/portrait/portrait"+index+".jpg"))                 
             }

             return image_arr
         }
    }
    
}
</script>

<style>
.portrait{
    background-color: black;
    width: 100%;
    
}


.portrait .img{
    height: 600px;
    width: 400px;
    background-size: cover;
    background-position: center;
    border: 4px solid white;
    margin: 10px;
    
}
.portrait .img:hover{
    cursor: pointer;
}


</style>

