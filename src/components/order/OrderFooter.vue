<template>
  <div class="fixed-bottom q-pa-md bg-white shadow-1">
    <div class="row items-center">
      <div class="col row inline items-center">
        <q-btn
          flat
          round
          to="item.to"
        >
          <img src="https://img.icons8.com/cotton/64/000000/pin3.png" style="height: 25px; margin-top: -5px" />
        </q-btn>
        <div>Jl. Kyai Maja no. 123</div>
      </div>
      <q-separator vertical />
      <div class="col-2 text-right">
        <q-btn
          flat
          round
          :to="{name: 'order.review'}"
        >
          <q-badge color="primary" floating>4</q-badge>
          <img src="https://img.icons8.com/dotty/80/000000/shopping-bag.png" style="height: 25px" />
        </q-btn>
      </div>
    </div>
  </div>
</template>

<style>

</style>
