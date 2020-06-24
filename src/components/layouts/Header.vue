<template>
    <section class="hero is-success">
        <div class="hero-head">
            <header class="navbar">
                <div class="container">
                    <div class="navbar-start">
                        <div class="navbar-item">
                            <strong>📻 Vue Music</strong>
                        </div>
                    </div>
                    <div class="navbar-end navbar-menu">
                        <a class="navbar-item" @click="selectLang('en')">🇬🇧</a>
                        <a class="navbar-item" @click="selectLang('es')">🇪🇸</a>
                        <router-link class="navbar-item" to="search"> {{ $t('search') }} </router-link>
                        <router-link class="navbar-item" to="about"> {{ $t('about') }} </router-link>
                    </div>
                </div>
            </header>
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title"><router-link class="title" to="/"> Vue Music </router-link></h1>
                <h2 class="subtitle">Canciones Vue-nisimas</h2>
                <c-player></c-player>
            </div>
        </div>
    </section>
</template>

<script>
import cPlayer from '../Player.vue'

export default {
    components: { cPlayer },

    methods: {
        selectLang (lang){
            this.$i18n.locale = lang
        }
    }
}
</script>