import AutoComplete from './src/autocomplete-suggestions.vue';

AutoComplete.install = function(Vue){
    Vue.component(AutoComplete.name,AutoComplete)
}

export default AutoComplete;