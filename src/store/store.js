import { createStore } from "vuex";
import { templateModule } from "./modules/templateModule";

export default createStore({
  state() {
    return {
      data: null,
    };
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
  },
  modules: {
    templateModule,
  },
});
