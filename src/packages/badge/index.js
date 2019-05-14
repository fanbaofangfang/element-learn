import ElBadge from "./src/main.vue";

ElBadge.install = function(Vue) {
  Vue.component(ElBadge.name, ElBadge);
};

export default ElBadge;
