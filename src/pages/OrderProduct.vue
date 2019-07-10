<template>
  <q-page padding>
    <q-card flat class="q-mb-xl">
      <q-card-section>
        <div class="text-center">
          <q-img
            src="statics/images/menu/javachipfrapp.jpg"
            spinner-color="white"
          />
        </div>
        <div class="q-mt-md">
          <div class="row">
            <div class="col">
              <div class="text-h5">Java Chip Frappuccino</div>
            </div>
            <div class="col-2 text-right">
              <q-btn fab icon="add" color="primary" :to="{name: 'order.review'}" />
            </div>
          </div>

          <div class="text-yellow-9 q-mt-md">Product details</div>
          <p class="q-mt-sm">We created this wondrously decadent beverage for those who love the taste of chocolate – and lots of it – with their iced coffee. Rich, chocolatey chips punctuate a cool, refreshing blend of coffee and mocha flavours. And in case that isn’t enough chocolatey goodness for you, we finish our sweetened whipped cream topping with a deliciously sweet chocolate-flavoured drizzle.</p>
        </div>
      </q-card-section>
    </q-card>
    <OrderFooter />
  </q-page>
</template>

<style>
</style>

<script>
import { OrderFooter } from '../components'

export default {
  name: 'Reload',

  components: {
    OrderFooter
  },

  data () {
    return {

    }
  }
}
</script>
