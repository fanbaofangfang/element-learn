import ElCard from "./src/main.vue";

ElCard.install = function(Vue){
    Vue.component(ElCard.name,ElCard);
}

export default ElCard;