<template lang="pug">
  main

    transition(name="move")
      cNotification(v-show="showNotification")
        p(slot="body") No se encontraron resultados

    transition(name="move")
      cLoader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.navbar
        .container.field.has-addons.has-addons-centered
          input.input.is-large.is-rounded(
            type="text",
            style="width: 40%;",
            placeholder="Buscar canciones", 
            v-model="searchQuery", 
            @keyup.enter="search"
          )
          a.button.is-info.is-large.is-rounded(@click="search") Buscar
          a.button.is-danger.is-large.is-rounded &times;
      
      .container.field.has-addons.has-addons-centered
        p
          small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks") 
            cTrack(
              :track="t", 
              @select="setSelectedTrack", 
              :class="{'is-active': t.id === selectedTrack}",
              v-blur="t.preview_url"
            )

</template>

<script>
import trackService from '../services/track'

import cTrack from './Track.vue'
import cLoader from './shared/Loader.vue'
import cNotification from './shared/Notification.vue'

export default {
  name: 'app',

  components: { cTrack, cLoader, cNotification },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  methods: {
    search () {
      if(this.searchQuery === '') {return }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items    
          this.isLoading = false      
        })
    },

    setSelectedTrack (id) {
      this.selectedTrack = id;
    }
  }
}
</script>

<style lang="scss">
  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px greenyellow solid;
  }
</style>
