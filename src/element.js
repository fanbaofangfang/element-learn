import Alert from "./packages/alert/index";
import Aside from "./packages/aside/index";
import Badge from "./packages/badge/index";
import Breadcrumb from "./packages/breadcrumb/index";
import BreadcrumbItem from "./packages/breadcrumb-item/index";
import Button from "./packages/button/index";
import ButtonGroup from "./packages/button-group/index";
import Card from "./packages/card/index";

const components = [Alert, Aside, Badge, Breadcrumb, BreadcrumbItem,Button,ButtonGroup,Card];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export default {
  install
};
