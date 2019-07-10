<template>
  <q-page padding>
    <div v-for="item in list" :key="item.name">
      <OrderReviewDetail :item="item" />
      <q-separator class="q-my-md" />
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="arrow_forward" color="primary" />
    </q-page-sticky>
  </q-page>
</template>

<style>
</style>

<script>
import { OrderReviewDetail } from '../components'

export default {
  name: 'Reload',

  components: {
    OrderReviewDetail
  },

  data () {
    return {
      list: [
        {
          image: 'statics/images/menu/caramelfrapp.jpg',
          productName: 'Caramel Frappuccino',
          calorie: 240,
          quantity: 1
        },
        {
          image: 'statics/images/menu/darkmochafrapp.jpg',
          productName: 'Dark Mocha Frappuccino',
          calorie: 200,
          quantity: 1
        },
        {
          image: 'statics/images/menu/javachipfrapp.jpg',
          productName: 'Java Chip Frappuccino',
          calorie: 220,
          quantity: 1
        },
        {
          image: 'statics/images/menu/sandwiches-wraps.jpg',
          productName: 'Chicken, Cheese & Pesto Toastie',
          calorie: 300,
          quantity: 1
        }
      ]
    }
  }
}
</script>
