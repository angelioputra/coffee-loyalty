<template>
  <q-footer class="bg-white shadow-1">
    <q-toolbar class="text-center">
      <div
        v-for="item in menu"
        :key="item.label"
        class="col text-black"
      >
        <q-btn
          flat
          round
          class="main-menu__button"
          size="sm"
          :to="item.to"
        >
          <img :src="item.icon" style="height: 25px" />
        </q-btn>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      menu: [
        {
          to: { name: 'home' },
          icon: 'https://img.icons8.com/windows/32/000000/home.png',
          label: 'Home'
        },
        {
          to: { name: 'wallet' },
          icon: 'https://img.icons8.com/ios/50/000000/wallet.png',
          label: 'Wallet'
        },
        {
          to: { name: 'order' },
          icon: 'https://img.icons8.com/windows/32/000000/cup.png',
          label: 'Order'
        },
        {
          to: { name: 'Redeem' },
          icon: 'https://img.icons8.com/windows/32/000000/gift.png',
          label: 'Redeem'
        }, {
          to: { name: 'location' },
          icon: 'https://img.icons8.com/ios/50/000000/marker.png',
          label: 'Location'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style>
.main-menu__button {
  margin-bottom: -4px;
}
</style>
