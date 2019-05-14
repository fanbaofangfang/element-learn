import { on, off } from "../../../utils/dom";

import { renderThumbStyle, BAR_MAP } from "./util";

export default {
  name: "Bar",
  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },
  computed: {
    bar() {
      return BAR_MAP[this.vertical ? "vertical" : "horizontal"];
    },
    wrap() {
      return this.$parent.wrap;
    }
  },
  methods: {
    clickThumbHandler(e) {
      if (e.ctrlKey || e.button === 2) {
        return;
      }
      this.startDrag(e);
      this[this.bar.axis] =
        e.currentTarget[this.bar.offset] -
        (e[this.bar.client] -
          e.currentTarget.getBoundingClientRect()[this.bar.direction]);
    },
    clickTrackHander(e){
        const offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
        const thumbHalf = (this.$refs.thumb[this.bar.offset]/2);
        const thumbPositionPercentage = ((offset-thumbHalf) * 100 /this.$el[this.bar.offset]);
        
    }
  },
  render(h) {
    const { size, move, bar } = this;

    return <div />;
  }
};
