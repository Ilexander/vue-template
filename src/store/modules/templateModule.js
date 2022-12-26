const templateModule = {
  state() {
    return {
      templateData: null,
    };
  },
  mutations: {
    setTemplateData(state, payload) {
      state.templateData = payload;
    },
  },
};

export { templateModule };