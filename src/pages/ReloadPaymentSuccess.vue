<template>
  <q-layout class="bg-color-starbucks">
    <q-page-container>
      <q-page padding>
        <transition appear enter-active-class="animated slideInDown">
          <div class="text-center q-my-md">
            <q-img
                src="https://img.icons8.com/dusk/256/000000/ok.png"
                spinner-color="white"
                style="width: 40%"
            />
          </div>
        </transition>
        <transition appear enter-active-class="animated slideInUp">
          <q-card class="q-mt-md bg-color-starbucks--light text-white">
            <q-card-section>
              <div class="text-center">
                <div class="q-mt-md text-subtitle1">You've Reloaded :</div>
                <div class="q-mt-md text-h4 text-weight-medium">Rp 200.000</div>
              </div>

              <q-separator class="q-my-md" color="white" />

              <div class="q-mt-md text-subtitle1 text-center">Balance 803.789</div>

              <q-separator class="q-my-md" color="white" />

              <div class="row bg-white q-pa-md">
                <div class="col-4 text-center ">
                  <img src="statics/images/1280px-Mastercard-logo.svg.png" style="height: 50px; width: auto"/>
                </div>
                <div class="col text-black q-pl-md">
                  <div>Mastercard Credit</div>
                  <div>8888123</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </transition>

        <div class="absolute-bottom q-pa-md">
          <q-btn color="primary" unelevated no-caps label="Return to Dashboard" class="full-width" :to="{name: 'home'}" />
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
</style>

<script>

export default {
  name: 'ReloadPaymentSuccess',

  data () {
    return {
      amount: null
    }
  }
}
</script>
