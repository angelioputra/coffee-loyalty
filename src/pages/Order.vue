<template>
  <q-page>
      <q-tabs
        v-model="tab"
        no-caps
        class="shadow-1 text-grey-6 bg-white"
      >
        <q-tab name="menu" label="Menu" />
        <q-tab name="featured" label="Featured" class="text-primary" />
        <q-tab name="previous" label="Previous" />
        <q-tab name="favourite" label="Favourite" />
      </q-tabs>

      <div class="q-pb-xl">
        <SliderCatalog title="Featured Drinks" :list="listDrink" />

        <q-separator class="q-my-sm" />

        <SliderCatalog title="Featured Food" :list="listFood" class="q-pb-lg" />
      </div>

      <OrderFooter />
  </q-page>
</template>

<style>
</style>

<script>
import { SliderCatalog, OrderFooter } from '../components'

export default {
  name: 'Reload',

  components: {
    SliderCatalog,
    OrderFooter
  },

  data () {
    return {
      tab: 'featured',
      listDrink: [
        {
          image: 'statics/images/menu/caramelfrapp.jpg',
          productName: 'Caramel Frappuccino'
        },
        {
          image: 'statics/images/menu/darkmochafrapp.jpg',
          productName: 'Dark Mocha Frappuccino'
        },
        {
          image: 'statics/images/menu/javachipfrapp.jpg',
          productName: 'Java Chip Frappuccino'
        },
        {
          image: 'statics/images/menu/mochafrapp.jpg',
          productName: 'White Chocolate Mocha Frappuccino'
        },
        {
          image: 'statics/images/menu/winter-20193.jpg',
          productName: 'Banoffee Frappuccino'
        }
      ],
      listFood: [
        {
          image: 'statics/images/menu/bakery.jpg',
          productName: 'Plain Bagel'
        },
        {
          image: 'statics/images/menu/cakes-slices.jpg',
          productName: 'Macarons'
        },
        {
          image: 'statics/images/menu/sandwiches-wraps.jpg',
          productName: 'Chicken, Cheese & Pesto Toastie'
        },
        {
          image: 'statics/images/menu/savoury-bites.jpg',
          productName: 'Quiche Lorraine'
        }
      ]
    }
  }
}
</script>
