<template>
  <div>
    <DatePicker
      type="daterange"
      placeholder="Select date and time(Excluding seconds)"
      style="width: 300px"
      :show-week-numbers="true"
      v-model="timeValue"
    ></DatePicker>
    <button @click="prevWeek">上一周</button>
    <button @click="nextWeek">下一周</button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import moment from "moment";
export default {
  name: "home",
  data() {
    return {
      fileList: [],
      extraData: {},
      timeValue: [],
      weekTime: 24 * 60 * 60 * 1000
    };
  },
  mounted() {
    this.timeValue = this.getTime(Date.now());
    console.log(new Date().getDay());
    // axios
    //   .get("https://testapi.robo2025.com/common/qiniu/upload_token")
    //   .then(res => {
    //     this.extraData = {
    //       token: res.data,
    //       key: "/test/test/test/upload"
    //     };
    //   });
  },
  methods: {
    getTime(time, currentWeekDay) {
      if (currentWeekDay) {
        return [
          time - (currentWeekDay - 1) * this.weekTime,
          time + (7 - currentWeekDay) * this.weekTime
        ];
      }
    },
    prevWeek() {
      this.timeValue = this.getTime(this.timeValue[0] - this.weekTime * 7);
    },
    nextWeek() {
      this.timeValue = this.getTime(this.timeValue[1]);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      console.log(files, fileList);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>
