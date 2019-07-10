<template>
  <q-page padding>
    <q-img
      src="statics/images/home-coffee.webp"
      spinner-color="white"
      style="width: 100%"
    />

    <q-card class="q-mt-md">
      <q-card-section>
        <div class="row">
          <div class="col">Your card balance :</div>
          <div class="col text-right text-primary">Set as primary</div>
        </div>
        <q-separator class="q-my-md" />
        <div class="text-h6">Rp 138.000</div>
      </q-card-section>
    </q-card>

    <q-card class="q-mt-md">
      <q-card-section>
        <div class="row">
          <div class="col">Auto reload</div>
          <div class="col text-right text-primary">Inactive</div>
        </div>
      </q-card-section>
    </q-card>

    <div class="q-mt-xl">
      <p>Reload using :</p>
      <div class="row q-gutter-md">
        <div class="col">
          <q-btn outline color="primary" no-caps="" label="Card" class="full-width" :to="{name: 'reload.payment'}" />
        </div>
        <div class="col">
          <q-btn outline color="primary" no-caps="" label="Online" class="full-width" :to="{name: 'reload.payment'}" />
        </div>
        <div class="col">
          <q-btn outline color="primary" no-caps="" label="Others" class="full-width" :to="{name: 'reload.payment'}" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>

export default {
  name: 'Reload',

  components: {

  }
}
</script>
