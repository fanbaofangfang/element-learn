import ElForm from "./packages/form/index";
import FormItem from "./packages/form-item/index";
import ElInput from "./packages/input/index";

const components = [ElForm,FormItem,ElInput];

const install = function(Vue) {
  components.forEach(ele => {
    Vue.component(ele.name, ele);
  });
}

export default {
    install
}