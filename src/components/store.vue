<template>
    <div>
        <div v-for="(product, index) in products.products" :key="index">
            <div>
            {{product.name}}
            <img :src="base_url+(product.images[0] || {}).image" class="img">
            <!-- {{}} -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex' 
export default {
    mounted () {
        if(this.$route.params.storeName === 'login') {
            this.$router.push({name: 'home'})
        } else {
            this.$store.dispatch('loadStoreItems', this.$route.params.storeName)
        }
    },
    computed: {
        ...mapState([
            'products'
        ])
    },
    data: () => {
        return{
            base_url: 'https://catastore.com/'
        }
    }
}
</script>

<style scoped>
.img{
    height: 200px;
    width: 200px;
}
</style>