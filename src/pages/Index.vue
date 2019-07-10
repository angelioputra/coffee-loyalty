<template>
  <q-page padding>
    <CardBalance />
    <CardRewardProgress class="q-mt-md" />
    <ExploreService class="q-mt-md" />
  </q-page>
</template>

<style>
</style>

<script>
import { CardBalance,
  CardRewardProgress, ExploreService } from '../components'

export default {
  name: 'PageIndex',

  components: {
    CardBalance,
    CardRewardProgress,
    ExploreService
  }
}
</script>
