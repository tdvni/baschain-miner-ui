<template>
  <v-navigation-drawer
    fixed app dark
    :value="navbarShow"
    @input="stateNavbarShow"
    :width="250">
    <v-app-bar v-if="navbarLogo"
      :dense="toolbarDense"
      dark>
      <v-toolbar-title class="text-center">
        <v-avatar size="32px" title>
          <img src="static/img/icons/logo_medium.png" alt="BASChain"/>
        </v-avatar>
        <span class="ml-2">{{ $t('toolbar.appname') }}</span>
      </v-toolbar-title>
    </v-app-bar>

    <layout-drawer-list :dense="navbarDense"
      :routes="permissionRoutes"
      icon-show />
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
import LayoutDrawerList from './LayoutDrawerList'

export default {
  name: 'LayoutDrawer',
  components: {
    LayoutDrawerList,
  },
  computed: {
    ...mapGetters([
      'navbarLogo',
      'navbarShow',
      'navbarDense',
      'toolbarDense',
    ]),
    ...mapGetters('permission',[
      'permissionRoutes'
    ])
  },
  data: () => ({}),
  methods: {
    stateNavbarShow(state) {
      this.$store.dispatch('NavbarState' ,{ state })
    }
  },
}
</script>
