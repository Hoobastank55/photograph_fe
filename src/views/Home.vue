<template>
  <div id="home">
    <app-header></app-header>
    <app-icon></app-icon>
    <app-portfolio></app-portfolio>
    <app-collaborate></app-collaborate>
    <app-profile></app-profile>
  </div>
</template>

<script>
import appHeader from "../components/home/Header"
import appIcon from "../components/home/Icon"
import appPortfolio from  "../components/home/Portfolio"
import appCollaborate from "../components/home/Collaborate"
import appProfile from "../components/home/Profile"
export default {
  components: {
    appHeader,
    appIcon,
    appPortfolio,
    appCollaborate,
    appProfile,
  }
}
</script>
