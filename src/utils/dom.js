import Vue from "vue";

const isServer = Vue.prototype.$isServer; //当前vue是否运行于服务器

export const on = (function() { //兼容性处理，attachEvent在IE9以下版本中受到支持。其他的都支持addEventListener,attachEvent的this总是window
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attchEvent("on" + event, handler);
      }
    };
  }
})();

export const off = (function(element, event, handler) {
  if (!isServer && document.addEventListener) {
    if (element && event) {
      element.removeEventListener(event, handler, false);
    }
  } else {
    if (element && event) {
      event.detachEvent("on" + event, handler);
    }
  }
})();
