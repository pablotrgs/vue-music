const trackMixin = {
    methods: {
        selectedTrack () {
            if (!this.track.preview_url) { return }
            
            this.$emit('select', this.track.id)
            this.$bus.$emit('set-track', this.track)
        }
    }
}

export default trackMixin