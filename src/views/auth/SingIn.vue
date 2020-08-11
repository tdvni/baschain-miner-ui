<template>
  <v-container class="container--fluid fill-height bg-wrapper">
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12"
        sm="8" md="4" lg="4" class="">
        <v-card class="elevation-5 pa-3">
          <v-card-text>
            <div class="layout column align-center">
              <img src="/static/img/icons/logo_large.png" alt="Baschain" width="128" height="128">
              <h1 class="text-center my-4 text-h3 ">
                Miner Pool Management
              </h1>
            </div>
            <v-form>
              <v-text-field
                v-model="model.email"
                append-icon="mdi-account"
                name="email"
                :label="$t('l.login.email')"
                type="email"
                required
                autocomplete="username"
              />
              <v-text-field
                v-model="model.password"
                append-icon="mdi-lock"
                name="password"
                :label="$t('l.login.password')"
                type="password"
                required
                autocomplete="current-password"
              />
            </v-form>
          </v-card-text>
          <v-card-text>
            <v-row class="text-center"
              dense no-gutters>
              <v-col cols="12">
                <v-btn-toggle v-show="false">
                  <v-btn text color="warning">
                    <span>Editor</span>
                  </v-btn>
                  <v-btn text color="warning">
                    <span>admin</span>
                  </v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <app-localization />
            <v-btn icon>
              <v-icon color="dark">mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="dark">mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="dark">mdi-github</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn color="green accent-2" outlined v-show="false">
              {{ $t('l.login.singUp')}}
            </v-btn>
            <v-btn color="green accent-2"
              @click="login"
              outlined>
              {{ $t('l.login.singIn')}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <ul class="bg-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </v-container>
</template>

<script>
import AppLocalization from '@/views/widget/AppLocalization'

export default {
  name: "SingIn",
  components: {
    AppLocalization,
  },
  computed: {

  },
  data() {
    return {
      loading: false,
      model: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    async login() {
      // login
    },
    setUserToLogin(id) {

    }
  },
}
</script>
<style lang="less">
.theme--light .bg-wrapper {
  background: #50a3a2;
  background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: -moz-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: -o-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc( 100vh + 200px );
  margin-top: -200px;
  overflow: hidden;
  z-index: 0;
}

.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: -1;

  li {
    position: absolute;
    list-style: none;
    display: block;
    width: 40px;
    height: 40px;
    background-color: fade(white, 15%);
    bottom: -160px;

    -webkit-animation: square 25s infinite;
    animation:         square 25s infinite;

    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;

    &:nth-child(1) {
      left: 10%;
    }

    &:nth-child(2) {
      left: 20%;

      width: 80px;
      height: 80px;

      animation-delay: 2s;
      animation-duration: 17s;
    }

    &:nth-child(3) {
      left: 25%;
      animation-delay: 4s;
    }

    &:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;

      animation-duration: 22s;

      background-color: fade(white, 25%);
    }

    &:nth-child(5) {
      left: 70%;
    }

    &:nth-child(6) {
      left: 80%;
      width: 120px;
      height: 120px;

      animation-delay: 3s;
      background-color: fade(white, 20%);
    }

    &:nth-child(7) {
      left: 32%;
      width: 160px;
      height: 160px;

      animation-delay: 7s;
    }

    &:nth-child(8) {
      left: 55%;
      width: 20px;
      height: 20px;

      animation-delay: 15s;
      animation-duration: 40s;
    }

    &:nth-child(9) {
      left: 25%;
      width: 10px;
      height: 10px;

      animation-delay: 2s;
      animation-duration: 40s;
      background-color: fade(white, 30%);
    }

    &:nth-child(10) {
      left: 90%;
      width: 160px;
      height: 160px;

      animation-delay: 11s;
    }
  }
}

@-webkit-keyframes square {
  0%   { transform: translateY(0); }
  100% { transform: translateY(-700px) rotate(600deg); }
}
@keyframes square {
  0%   { transform: translateY(0); }
  100% { transform: translateY(-700px) rotate(600deg); }
}
</style>
