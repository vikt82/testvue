<template>
  <v-app>
    <app-header/>

    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
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
