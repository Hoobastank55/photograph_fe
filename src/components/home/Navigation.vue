<template>
    <nav class="flex between">
        <img class="logo" src="@/assets/images/cropped-mArtijnPhotography_trans_white.png">
        <ul class="flex align-ver align-hor nav-main">
            <li class="flex align-hor align-ver nav-item"><router-link class="nav-item" :to="{name:'Home'}">Home</router-link></li>
            <li class="flex align-hor align-ver nav-item"><router-link class="nav-item" :to="{name:'About'}">About</router-link></li>
            <li class="flex align-hor align-ver nav-item"><router-link class="nav-item" :to="{name:'Blog'}">Blog</router-link></li>
            <li class="flex align-hor align-ver nav-item">Project
                <ul class="flex column sub-nav-wrap">
                    <li class="sub-nav-item">Nature</li>
                    <li class="sub-nav-item">Wedding</li>
                    <li class="sub-nav-item">Personal</li>
                </ul>
            </li>
            <li class="flex align-hor align-ver nav-item"><router-link class="nav-item" :to="{name:'Contact'}">Contact</router-link></li>
        </ul>
    </nav>
</template>
<style>
nav a.nav-item  {
    color: #fff;
    text-decoration: none;
}

</style>