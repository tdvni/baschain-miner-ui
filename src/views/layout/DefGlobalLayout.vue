<template>
  <div class="v-application--wrap">
    <layout-drawer />
    <layout-toolbar />
    <ad-layout-main />
  </div>
</template>

<script>
import AdLayoutMain from './AdminLayoutMain'
import LayoutDrawer from './LayoutDrawer'
import LayoutToolbar from './LayoutToolbar'

export default {
  name: "MainLayout",
  components: {
    AdLayoutMain,
    LayoutDrawer,
    LayoutToolbar,
  },
  data: () => ({}),
}
</script>
