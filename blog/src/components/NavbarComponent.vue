<template>
  <v-app-bar>
    <v-toolbar-title>My App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn><router-link to="/">Home</router-link></v-btn>
    <v-btn><router-link to="/list">List</router-link></v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
</style>
