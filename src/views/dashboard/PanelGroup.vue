<template>
  <v-row dense class="panel-group">
    <panel-group-item
      title="Pool Miners"
      icon="mdi-account-multiple"
      color="orange"
      :start="0"
      :end="126"
      :duration="1"
    />

    <panel-group-item
      title="Client Numbers"
      icon="mdi-account-multiple"
      color="orange"
      :start="0"
      :end="126"
      :duration="1"
    />
    <panel-group-item
      title="BAS Token"
      icon="mdi-account-multiple"
      color="orange"
      :start="0"
      :end="126"
      :duration="1"
    />
    <panel-group-item
      title="Withdraw Tokens"
      icon="mdi-account-multiple"
      color="orange"
      :start="200"
      :end="10000"
      :duration="1"
    />
  </v-row>
</template>

<script>
import PanelGroupItem from './PanelGroupItem'

export default {
  name: "PanelGroup",
  components: {
    PanelGroupItem,
  },
}
</script>
<style>

</style>
