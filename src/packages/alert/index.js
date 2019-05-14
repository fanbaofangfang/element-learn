import ElAlert from "./src/main.vue";

ElAlert.install = function(Vue) {
  Vue.component(ElAlert.name, ElAlert);
};

export default ElAlert;
