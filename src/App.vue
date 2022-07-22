<template>
  <v-app>
    <v-app-bar app class="header" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-white display-1 font-italic font-weight-bold">
        <router-link :to="{ name: 'home' }">
          Lottery System
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({

  })
};
</script>

<style scoped>
.header {
  background: linear-gradient(to right, rgba(36, 198, 220, 1), rgba(33, 150, 243, 0.6));
}
.v-application a {
  color: white;
}
a {
  text-decoration: none;
}
</style>
