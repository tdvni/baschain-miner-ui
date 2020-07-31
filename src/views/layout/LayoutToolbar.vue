<template>
  <v-app-bar app :dense="toolbarDense">
    <v-app-bar-nav-icon @click.stop="toggleNavbar">
      <v-icon>{{ toggleNavbarIcon }}</v-icon>
    </v-app-bar-nav-icon>
    <app-breadcrumbs />
    <v-spacer />
    <app-fullscreen />
    <app-localization />

  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import AppBreadcrumbs from '../widget/AppBreadcrumbs'
import AppFullscreen from '../widget/AppFullsrceen'
import AppLocalization from '../widget/AppLocalization'

export default {
  name: "LayoutToolbar",
  components: {
    AppBreadcrumbs,
    AppFullscreen,
    AppLocalization,
  },
  computed: {
    ...mapGetters([
      'toolbarDense',
      'navbarShow',
    ]),
    toggleNavbarIcon() {
      return this.navbarShow ? 'mdi-format-indent-decrease' : 'mdi-format-indent-increase'
    },
  },
  data: () => ({}),
  methods: {
    toggleNavbar() {
      this.$store.dispatch('NarbarToggle')
    }
  },
}
</script>
<style>

</style>
