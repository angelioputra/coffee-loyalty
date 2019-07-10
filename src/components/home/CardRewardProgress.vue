<template>
  <q-card flat>
    <q-card-section>
      <div class="row">
        <div class="col">
          <div class="text-h5"><b class="text-h4">118</b> / 125</div>
          <div><b class="text-yellow-9">12</b> stars til next reward</div>
          <div class="q-mt-sm">
            <q-btn no-caps rounded outline class="text-yellow-9" label="Reward details" />
          </div>
        </div>
        <div class="col text-right">
          <q-img
              src="statics/images/coffee.svg"
              spinner-color="white"
              style="width: 70%"
          />
        </div>
      </div>
      <q-linear-progress :value="0.88" class="q-mt-md text-yellow-9" />
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
