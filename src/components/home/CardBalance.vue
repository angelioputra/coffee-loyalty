<template>
  <q-card>
    <q-card-section>
      <div class="row">
        <div class="col text-h6">
          Card Balance
        </div>
        <div class="col text-right text-h6">
          Rp 250.000
        </div>
      </div>
      <q-separator class="q-my-md" />
      <div class="row">
        <div class="col text-center" v-for="item in list" :key="item.icon">
          <router-link :to="item.to" tag="div">
            <q-img
                :src="item.icon"
                spinner-color="white"
                style="height: 40px; width: 40px"
            />
            <div class="q-mt-sm">{{item.label}}</div>
          </router-link>
        </div>
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
          to: { name: 'reload' },
          icon: 'statics/images/icons8-wallet-64.png',
          label: 'Reload'
        },
        {
          to: { name: 'reload' },
          icon: 'statics/images/icons8-mobile-payment-64.png',
          label: 'Pay'
        },
        {
          to: { name: 'reload' },
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
