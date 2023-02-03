<template>
  <v-container>
    <v-row justify="center">
      <v-col align="center">
        <form>
          <v-text-field readonly v-model="mario.email"></v-text-field>
          <v-text-field readonly v-model="mario.password"></v-text-field>
          <v-text-field readonly v-model="mario.badge"></v-text-field>
          <v-btn color="success">-</v-btn><v-btn color="success">+</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  computed: {
    // The `mapFields` function takes an array of
    // field names and generates corresponding
    // computed properties with getter and setter
    // functions for accessing the Vuex store.
    ...mapFields(["mario"]),
  },
};
</script>
