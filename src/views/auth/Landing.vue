<template>
  <div>
    <v-app-bar class="white" dense>
      <img
        src="/static/img/icons/logo_medium.png"
        height="48"
        width="50"
        mx-auto
      />
      <v-toolbar-title class="ml-2">
        {{ info.appname }}
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <section>
        <!-- /static/img/land/product_wallet_bg.png  -->
        <v-parallax
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          height="400"
        >
          <v-row
            align="center"
            justify="center"
            class="white--text flex-column"
          >
            <img
              src="/static/img/icons/logo_btm.png"
              alt="BASChain"
              height="45"
            />
            <h1 class="my-2 darken-4--text display-1 text-center">
              {{ info.title }}
            </h1>

            <v-btn x-large
              to="/singin"
              color="green accent-2"
              class="mt-5"
              outlined>
              Get Started
            </v-btn>
          </v-row>
        </v-parallax>
      </section>

      <section>
        <v-row align="center">
          <v-col cols="12" class="text-center">
            <div class="text-center">
              <h2 class="headline">
                Fully Decentralized
              </h2>
            </div>
          </v-col>
          <v-col cols="12">
            <v-container>
              <v-row align="center">
                <v-col cols="12" md="4">
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon class="text--lighten-2">
                        mdi-material-design
                      </v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Register Domain
                      </div>
                    </v-card-title>
                    <v-card-text>
                      You can consume BAS to register domain name in real time,
                      avoid high cost and long waiting time in traditional
                      domain system.
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon class="text--lighten-2">
                        mdi-disqus
                      </v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Trade Domain
                      </div>
                    </v-card-title>
                    <v-card-text>
                      You can consume BAS to register domain name in real time,
                      avoid high cost and long waiting time in traditional
                      domain system.
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon class="text--lighten-2">
                        mdi-history
                      </v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        Register Domain
                      </div>
                    </v-card-title>
                    <v-card-text>
                      You can consume BAS to register domain name in real time,
                      avoid high cost and long waiting time in traditional
                      domain system.
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </section>

      <section>
        <v-parallax
          src="/static/img/land/crit_bg.png"
          dark
          height="260"
          class="crit-bg"
        >
          <v-container>
            <v-row justify="center">
              <v-col cols="6" sm="8">
                <div dark class="d-flex flex-nowrap justify-space-around">
                  <div class="title">区块</div>
                  <div class="title">存续</div>
                  <div class="title">历史</div>
                  <div class="title">科技</div>
                  <div class="title">连接</div>
                  <div class="title">未来</div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>

      <section>
        <v-container>
          <v-row class="my-5">
            <v-col
              v-for="(item,idx) in apps"
              :key="idx"
              cols="12" sm="4">
              <v-card class="elevation-1 transparent app-card--bg">
                <div class="d-flex flex-nowrap justify-space-around">
                  <v-avatar tile class="ma-5" size="84">
                    <v-img :src="item.avatar"></v-img>
                  </v-avatar>

                  <div>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline app-click">
                        {{ item.title }}
                        <v-icon>
                          {{ item.icon }}
                        </v-icon>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      {{ item.text }}
                    </v-card-text>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </div>
</template>

<script>
import browserIcon from "@/assets/icons/browser_icon.png";
import extensionIcon from '@/assets/icons/extension_icon.png'
import walletIcon from '@/assets/icons/wallet_icon.png'

export default {
  name: "HomeIndex",
  computed: {},
  data() {
    return {
      info: {
        appname: "Miner Pool",
        title: "BASChain Miner Pool Management",
        email: "dev@baschain"
      },
      apps: [
        {
          title: "Get BAS Explorer for mac",
          avatar: browserIcon,
          icon: "mdi-download-circle-outline",
          text: " New broswer, support httpb scheme and can surf blockchain data storage"
        },
        {
          title: "Get BAS Extensions",
          avatar: extensionIcon,
          icon: "mdi-power-plug-outline",
          text: "Plugin can support BAS domain analysis"
        },
        {
          title: "security enhenced digital wallet",
          avatar: walletIcon,
          icon: "mdi-arrow-top-right-bold-outline",
          text: "Plugin can support BAS domain analysis"
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style>
.crit-bg {
  background-color: #04062e;
}

.app-card--bg {
  background-color: rgba(0, 179, 202, 0.1);
}

.app-click,.app-click * {
  cursor: pointer;
}
</style>
