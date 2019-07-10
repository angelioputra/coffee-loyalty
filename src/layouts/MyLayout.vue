<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black text-center">
      <q-toolbar>
        <q-btn
          v-if="!$route.meta.isRootPage"
          flat
          dense
          round
          @click="$router.go(-1)"
        >
          <q-icon name="fas fa-arrow-left" />
        </q-btn>

        <q-toolbar-title>
          {{$route.meta.title}}
        </q-toolbar-title>

        <q-btn
          v-if="!$route.meta.isRootPage"
          flat
          dense
          round
        >
          <q-icon color="white" name="fas fa-arrow-left" />
        </q-btn>

      </q-toolbar>
    </q-header>

    <Footer v-if="$route.meta.isRootPage" />

    <q-page-container>
      <transition
        appear
        :enter-active-class="transitionName"
      >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

import { Footer } from '../components'

export default {
  name: 'MyLayout',

  components: {
    Footer
  },

  data () {
    return {
      transitionName: 'animated slideInRight'
    }
  },

  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'animated slideInLeft' : 'animated slideInRight'
    }
  },

  methods: {
    openURL
  }
}
</script>

<style>
</style>
