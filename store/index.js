// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from "vuex-map-fields";

export default {
  state: {
    mario: {
      email: "mario@email.com",
      password: "test1234",
      badge: 4,
    },
  },
  getters: {
    // Add the `getField` getter to the
    // `getters` of your Vuex store instance.
    getField,
  },
  mutations: {
    // Add the `updateField` mutation to the
    // `mutations` of your Vuex store instance.
    updateField,
  },
};
