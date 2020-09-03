<template>
    <div class="wrapper">
      <div v-for="(store, i) in data.stores" :key="i" class="storeCards"> 
          <router-link :to="{name: 'store', params: {storeName: store.slug} }" class="routerLink">
            {{store.name}}
          </router-link>
      </div>
      <button v-if="loggedIn" @click="logout">
        logout
      </button>
    </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted () {
    this.$store.dispatch('loadAllStore')
  },
  computed: {
    ...mapState([
      'data'
    ]),
    loggedIn () {
      return this.$store.getters.loggedIn
    }
    },
    methods: {
    logout () {
      this.$store.dispatch('destroyToken')
    }
    }
}
</script>

<style scoped>
.routerLink{
  text-decoration: none;
  color: black;
}

.wrapper{
  display: flex;
  flex-wrap: wrap;
}

.storeCards{
  border: 2px solid black;
  width: 8rem;
  height: 8rem;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>