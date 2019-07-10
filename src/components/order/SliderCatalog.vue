<template>
  <q-card flat class="transparent">
    <q-card-section>
      <div class="row items-center">
        <div class="col text-h6">
          {{title}}
        </div>
        <div class="col text-right text-yellow-9">
          See all (18)
        </div>
      </div>
      <div class="flex no-wrap q-mt-md scroll" style="margin-left: -16px; margin-right: -16px;">
        <router-link tag="div" :to="{name : 'order.product'}" class="text-center q-ml-md" v-for="item in list" :key="item.productName">
          <q-avatar size="120px" >
            <img :src="item.image">
          </q-avatar>
          <div class="q-mt-sm">{{item.productName}}</div>
        </router-link>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    title: String,
    list: Array
  },

  data () {
    return {

    }
  }
}
</script>

<style>

</style>
