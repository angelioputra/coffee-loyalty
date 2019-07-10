<template>
  <transition
    appear
    :enter-active-class="transitionName"
  >
    <router-view />
  </transition>
</template>

<script>
export default {
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
  }
}
</script>

<style>
</style>
