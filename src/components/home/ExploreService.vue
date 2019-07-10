<template>
  <q-card flat>
    <q-card-section>
      <div>
        <div class="text-h5">Explore</div>
        <p class="text-subtitle2 text-grey-6">Check out all our service</p>
      </div>
      <div class="row">
        <div class="col"></div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          icon: 'statics/images/icons8-wallet-64.png',
          label: 'Reload'
        },
        {
          icon: 'statics/images/icons8-mobile-payment-64.png',
          label: 'Pay'
        },
        {
          icon: 'statics/images/icons8-gift-80.png',
          label: 'Rewards'
        }
      ]
    }
  }
}
</script>

<style>

</style>
