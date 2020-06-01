<template lang="pug">
  #app
    myheader

    cNotification(v-show="showNotification")
      p(slot="body") No se encontraron resultados

    cLoader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      
      .container
        p
          small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks") 
            cTrack(:track="t", @select="setSelectedTrack", :class="{'is-active': t.id === selectedTrack}")

    myfooter
</template>

<script>
import trackService from './services/track'
import myfooter from './components/layouts/Footer.vue'
import myheader from './components/layouts/Header.vue'
import cTrack from './components/Track.vue'
import cLoader from './components/shared/Loader.vue'
import cNotification from './components/shared/Notification.vue'

export default {
  name: 'app',

  components: { myfooter, myheader, cTrack, cLoader, cNotification },

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
  @import './scss/main.scss';

  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px greenyellow solid;
  }
</style>
