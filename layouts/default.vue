<template>
  <v-app>
    <TheHeader app/>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";

export default {
  components: { TheHeader },
};
</script>
