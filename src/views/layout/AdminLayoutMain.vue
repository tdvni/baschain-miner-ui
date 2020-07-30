<template>
  <v-main>
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </v-main>
</template>

<script>


export default {
  name: "AdminLayoutContent",
  components: { },
}
</script>
<style>

</style>
