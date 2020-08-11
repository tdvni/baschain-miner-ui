<template>
  <v-row dense class="panel-group">
    <panel-group-item
      title="Pool Miners"
      icon="mdi-server-network"
      color="orange"
      :start="0"
      :end="126"
      :duration="5000"
    />

    <panel-group-item
      title="Client Number"
      icon="mdi-rocket"
      color="green"
      suffix=""
      :start="0"
      :end="16"
      :duration="6000"
    />
    <panel-group-item
      title="BAS Token"
      icon="mdi-ethereum"
      color="gray"
      :start="0"
      :end="1126.5786"
      :duration="4000"
      :decimals="4"
    />
    <panel-group-item
      title="Withdraw Tokens"
      icon="mdi-transfer"
      color="indigo darken-4"
      suffix="GB"
      :start="2"
      :end="100"
      :duration="3000"
      :decimals="2"
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
