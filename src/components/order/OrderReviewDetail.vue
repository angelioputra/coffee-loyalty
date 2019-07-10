<template>
  <q-card flat class="transparent">
    <q-card-section>
      <div class="row">
        <div class="col-3">
          <q-avatar size="60px" >
            <img :src="item.image">
          </q-avatar>
        </div>
        <div class="col">
          <div class="text-subtitle2">{{item.productName}}</div>
          <div class="text-subtitle text-grey-6">{{item.calorie}} calorie</div>
          <div class="q-mt-sm">
            <q-input outlined bottom-slots v-model="item.quantity" dense style="width: 150px">
              <template v-slot:before>
                <q-btn round dense flat icon="remove" />
              </template>

              <template v-slot:after>
                <q-btn round dense flat icon="add" />
              </template>
            </q-input>
          </div>
        </div>
        <div class="col-1">

        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    item: Array
  },

  data () {
    return {

    }
  }
}
</script>

<style>

</style>
