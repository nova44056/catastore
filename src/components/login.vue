<template>
    <div>
        <li v-if="!loggedIn">
            <div>
                <label for="email">Email: </label>
                <input type="text" name="email" id="email" v-model="email">
                {{email}}
                <br>

                <label for="password">Password: </label>
                <input type="password" name="password" id="password" v-model="password">
                {{password}}
                <br>
                <button @click="login">login</button>
            </div>
        </li>
        <li v-else>
            {{pushback()}}
        </li>
    </div>
</template>

<script>
export default {
    data: () => {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
      loggedIn () {
          return this.$store.getters.loggedIn
      }
  },
  methods: {
      pushback () {
          this.$router.push({name: 'home'})
      },
      login () {
        this.$store.dispatch('retrieveToken', {
          email: this.email,
          password: this.password
        })
      },
      logout () {
        this.$store.dispatch('destroyToken')
      }
    }
}
</script>