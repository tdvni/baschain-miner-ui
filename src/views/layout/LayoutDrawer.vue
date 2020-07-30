<template>
  <v-navigation-drawer
    dark fixed app
    :value="navbarShow"
    :width="250">

    <v-app-bar>

    </v-app-bar>
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
