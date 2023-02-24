<template>
  <v-container class="bk">
    <v-row justify="center">
      <v-toolbar class="elevation-0 border">
        <v-app-bar-nav-icon color="secondary"></v-app-bar-nav-icon>

        <v-toolbar-title class="secondary--text"
          >Ristorante PORTO - Fish & Chips</v-toolbar-title
        >
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon color="secondary">mdi-phone</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="secondary">mdi-arrow-right-top-bold</v-icon>
        </v-btn>
      </v-toolbar>
    </v-row>
  </v-container>
</template>

<style scoped>
.border {
  border-radius: 2rem;
  margin-top: 1rem;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0) !important;
}

</style>
