<template>
  <q-page padding>
    <q-card class="q-mt-md">
      <q-card-section>
        <div class="row">
          <div class="col">Payment Method :</div>
        </div>
        <q-separator class="q-my-md" />
        <div class="row q-gutter-md">
          <div class="col">
            <q-btn outline color="primary" no-caps="" class="full-width">
              <img src="statics/images/1280px-Mastercard-logo.svg.png" style="height: 40px; width: auto"/>
            </q-btn>
          </div>
          <div class="col">
            <q-btn outline color="primary" no-caps="" class="full-width">
              <img src="statics/images/visa_PNG3.png" style="height: 40px; width: auto" />
            </q-btn>
          </div>
          <div class="col">
            <q-btn outline color="primary" no-caps="" class="full-width">
              <img src="statics/images/ovo-logo-png-6.png" style="height: 40px; width: auto" />
            </q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <div class="q-mt-xl">
      <p>Select reload value :</p>
      <div class="row q-gutter-md">
        <div class="col">
          <q-btn outline color="primary" no-caps="" label="Rp 200 Rb" class="full-width" :to="{name: 'reload.payment'}" />
        </div>
        <div class="col">
          <q-btn outline color="primary" no-caps="" label="Rp 500 Rb" class="full-width" :to="{name: 'reload.payment'}" />
        </div>
        <div class="col">
          <q-btn outline color="primary" no-caps="" label="Rp 1 Juta" class="full-width" :to="{name: 'reload.payment'}" />
        </div>
      </div>

      <q-input class="q-mt-md" outlined v-model="amount" label="Or enter a value" />
    </div>

    <div class="absolute-bottom q-pa-md">
      <q-btn color="primary" unelevated no-caps label="Top-up credit" class="full-width" :to="{name: 'reload.payment.success'}" />
    </div>

  </q-page>
</template>

<style>
</style>

<script>

export default {
  name: 'ReloadPayment',

  data () {
    return {
      amount: null
    }
  }
}
</script>
