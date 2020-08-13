<template>

    <section class="icons-wrap align-ver flex column">
        <h2 class="flex align-ver align-hor">WHAT AM I DOING</h2>
        <div class="flex wrap inner-icons-wrap">
            <router-link class="flex align-ver column align-hor icon-content" :to="{name:item.link}" v-for="(item, index) in icons" :key="index">
                <fa-icon class="icon-svg" :icon="['fas', item.icon]" />
                <p class="icon-context">{{item.name}}</p>
            </router-link>
        </div>
    </section>

</template>

<script>
export default {
    data() {
        return {
            icons: [{
                    icon: 'globe',
                    name: 'NATURE & CITY',
                    link:'Citynature'
                },
                {
                    icon: 'music',
                name: 'CONCERT',
                link:'Concert'
            },  
            {
                icon: 'heart',
                name: 'ARTISTIC NUDE',
                link:''
            },
            {
                icon: 'hippo',
                name: 'PROJECTS',
                link:'Projects'
            },
            {
                icon: 'camera',
                name: 'PORTRAIT',
                link:'Portrait'
            },
            {
                icon: 'user-secret',
                name: 'BOUDOIR',
                link:''
            },
        ],
    }
},
methods: {
    push_to_page(link) {
        if (link == 'projects') {
            this.$router.push({
                name: 'Projects'
            })
        } else {

        }
    }
}
}
</script>

<style>
section.icons-wrap {
height: 600px;
width: 100%;
background-color: white;
}

section.icons-wrap h2 {
font-size: 150%;
color: black;
height: 80px;
min-height: 100px;
}

section.icons-wrap h3.icon-hdr {
font-size: 100%;
color: black;
}

section.icons-wrap div.inner-icons-wrap {
    width: 900px;
    margin: 0 auto;
}
section.icons-wrap div.inner-icons-wrap a.icon-content {
    height:180px;
    text-align: center;
    width: 33.333%;
    text-decoration: none;
}
section.icons-wrap div.inner-icons-wrap a.icon-content .icon-svg{
    height: 50% !important;
    font-size: 300%;
    color: red;
}
section.icons-wrap div.inner-icons-wrap a.icon-content p.icon-context {
    height: 50% !important;
    font-size: 150%;
    color: black;
    
}
</style>