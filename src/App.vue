<template lang="pug">
  #app
    myheader

    router-view

    myfooter
</template>

<script>
import myfooter from './components/layouts/Footer.vue'
import myheader from './components/layouts/Header.vue'

export default {
  name: 'app',

  components: { myfooter, myheader}

}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px greenyellow solid;
  }
</style>
