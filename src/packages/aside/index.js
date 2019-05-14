import ElAside from './src/main.vue';

ElAside.install = function (Vue){
    Vue.component(ElAside.name,ElAside);
}

export default ElAside;