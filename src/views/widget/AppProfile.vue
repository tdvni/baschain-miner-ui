<template>
  <v-menu offset-y origin="center center"
    :nudge-bottom="10" transition="scale-transiton">
    <template v-slot:activator="{ on }">
      <v-btn icon large text v-on="on">
        <v-avatar size="36px">
          <img v-if="avatar" :src="avatar" alt="name">
          <v-icon
            v-else x-large
            class="bule--text">
            mdi-account
          </v-icon>
        </v-avatar>
      </v-btn>
    </template>
    <v-list class="pa-0" min-width="140" dense>
      <v-list dense>
        <v-list-item dense>
          <v-list-item-avatar dense>
            <img v-if="avatar" :src="avatar" alt="name">
            <v-icon v-else x-large class="blue--text">
              mdi-account
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ name }}</v-list-item-title>
            <v-list-item-subtitle>{{ user }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list-item v-for="(item,idx) in menus"
        :to="!item.href ? {name: item.name} : null"
        :href="item.href"
        ripple="ripple"
        :disabled="item.disabled"
        :target="item.target"
        rel="noopener"
        @click="item.click"
        :key="idx">
        <v-list-item-action v-if="item.icon">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ $t(item.title) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'

const menus = [
  {
    icon: 'mdi-account',
    href: '#',
    title: 'toolbar.profile',
    click: (e) => {

    },
  },
  {
    icon: 'mdi-cog-outline',
    href: '#',
    title: 'toolbar.settings',
    click: (e) => {

    },
  },
  {
    icon: 'mdi-exit-to-app',
    href: '#',
    title: 'toolbar.logout',
    click: (e) => {

    },
  }
]

export default {
  name: "AppProfile",
  computed: {
    ...mapGetters([
      'user',
      'name',
      'avatar',
      'status',
    ]),
  },
  data() {
    return {
      menus,
    }
  },
}
</script>
<style>

</style>
