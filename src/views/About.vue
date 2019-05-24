<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" prop="desc">
        <el-input v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="活动名称">
        <el-input v-model="ruleForm.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <button type="primary" @click="submitForm('ruleForm')">立即创建</button>
        <button @click="resetForm('ruleForm')">重置</button>
      </el-form-item>
    </el-form>
    123456
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        desc: "",
        pwd:""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "change" }
        ],
        desc: [{ required: true, message: "请选择活动区域", trigger: "blur" }]
      }
    };
  },
  mounted() {},
  methods: {
    submitForm(formName) {
        // this.$refs[formName].validateField(['desc','name'],(error,fieldsvalue) => {
        //     console.log(error,fieldsvalue,'1111')
        // })
    //   this.$refs[formName].validate((valid,fieldsValue) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       console.log(fieldsValue)
    //       return false;
    //     }
    //   });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  watch: {}
};
</script>

<style>
</style>

