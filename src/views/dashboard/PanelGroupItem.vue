<template>
  <v-col cols="12" sm="6" md="3">
    <v-card class="mx-auto">
      <v-list-item three-line>
        <v-list-item-avatar size="80">
          <v-icon size="64" :color="color">
            {{ icon }}
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="title font-weight-light">
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <count-to
              :start-val="start"
              :end-val="end"
              :duration="duration"
              :decimals="decimals"
              :suffix="suffix"
              class="title font-weight-bold" />
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-col>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  name: "PanelGroupItem",
  components: {
    CountTo,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    suffix: {
      default: '',
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: '',
    },
    start: {
      default: 0,
      type: Number,
      required: false,
    },
    end: {
      default: 0,
      type: Number,
      required: false,
    },
    decimals: {
      default: 0,
      type: Number,
      required: false,
    },
    duration: {
      default: 1000,
      type: Number,
      required: false,
    },

  }
}
</script>
<style>

</style>
