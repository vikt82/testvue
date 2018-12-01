<template>
  <v-app>
    <app-header/>
    <router-view/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
    // HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
