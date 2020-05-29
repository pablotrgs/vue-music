<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}

      .container.results
        .columns
          .cloumn(v-for="t in tracks") {{ t.name }} - {{t.artist }}
</template>

<script>
const tracks = [
  {name: 'fasfc', artist: 'ECDL'},
  {name: 'fsfgbbgb', artist: 'Melendi'},
  {name: '3424cd', artist: 'Estopa'}
]

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  methods: {
    search () {
      this.tracks = tracks
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 50px;
  }
</style>
