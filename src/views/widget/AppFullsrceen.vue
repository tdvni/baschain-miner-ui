<template>
  <v-btn icon @click="toggleFullScreen">
    <v-icon>
      {{ toggleFullScreenIcon }}
    </v-icon>
  </v-btn>
</template>

<script>
import { mapGetters } from 'vuex'

const toggleFullScreenHandle = () => {
  const doc = window.document
  const docE1 = doc.documentElement;

  const requestFullScreen = docE1.requestFullscreen
    || docE1.mozRequestFullScreen
    || docE1.webkitRequestFullscreen
    || docE1.msRequestFullscreen

  const cancelFullScreen = doc.exitFullscreen
    || doc.mozCancelFullScreen
    || doc.webkitExitFullscreen
    || doc.msExitFullscreen

  if (!doc.fullscreenElement
    && !doc.mozFullScreenElement
    && !doc.webkitFullscreenElement
    && !doc.msFullscreenElement) {

    requestFullScreen.call(docE1)
    return true
  }

  cancelFullScreen.call(doc)
  return false
}

export default {
  name: "AppFullscreen",
  computed: {
    ...mapGetters([
      'fullscreenShow',
    ]),
    toggleFullScreenIcon() {
      return this.fullscreenShow ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'
    },
  },
  methods: {
    toggleFullScreen() {
      this.$store.dispatch('FullscreenToggle',{ state: toggleFullScreenHandle() })
    }
  },
}
</script>
<style>

</style>
