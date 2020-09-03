<template>
  <div id="app">
      <li v-if="!loggedIn"> 
        {{callback()}}
      </li>

      <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn () {
      return this.$store.getters.loggedIn
    }
  },
  methods: {
    callback () {
      this.$router.push({name: 'login'})
    },
    home () {
      this.$router.push({name: 'home'})
    }
  }
  
}
</script>
