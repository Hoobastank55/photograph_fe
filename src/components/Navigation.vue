<template>
    <nav class="flex between">
        <img class="logo" src="@/assets/images/home/cropped-mArtijnPhotography_trans_white.png">
        <ul class="flex align-ver align-hor nav-main">
            <router-link class="nav-item" :to="{name:'Home'}"><li class="flex align-hor align-ver nav-item">Home</li></router-link>
            <router-link class="nav-item" :to="{name:'About'}"><li class="flex align-hor align-ver nav-item">About</li></router-link>
            <router-link class="nav-item" :to="{name:'Blog'}"><li class="flex align-hor align-ver nav-item">Blog</li></router-link>
            <router-link class="nav-item" :to="{name:'Portfolio'}"><li class="flex align-hor align-ver nav-item">Portfolio
                <ul class="flex column sub-nav-wrap">
                    <router-link class="nav-item" :to="{name:'Projects'}"><li class="sub-nav-item">Projects</li></router-link>
                    <router-link class="nav-item" :to="{name:'Citynature'}"><li class="sub-nav-item">City&Nature</li></router-link>
                    <router-link class="nav-item" :to="{name:'Concert'}"><li class="sub-nav-item">Concert</li></router-link>
                     <router-link class="nav-item" :to="{name:'Portrait'}"><li class="sub-nav-item">Portrait</li></router-link>
                </ul>
            </li></router-link>
            <router-link class="nav-item" :to="{name:'Contact'}"><li class="flex align-hor align-ver nav-item">Contact</li></router-link>
        </ul>
    </nav>
</template>
<style>
nav a.nav-item  {
    color: #fff;
}
</style>
