<template>
  <v-row dense class="panel-group">
    <panel-group-item
      title="Pool Miners"
      icon="mdi-server-network"
      color="orange"
      :start="0"
      :end="126"
      :duration="1"
    />

    <panel-group-item
      title="Client Numbers"
      icon="mdi-vpn"
      color="orange"
      :start="0"
      :end="126"
      :duration="1"
    />
    <panel-group-item
      title="BAS Token"
      icon="mdi-ethereum"
      color="gray"
      :start="0"
      :end="126"
      :duration="1"
    />
    <panel-group-item
      title="Withdraw Tokens"
      icon="mdi-transfer"
      color="indigo darken-4"
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
