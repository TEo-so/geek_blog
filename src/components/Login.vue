<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input type="text" v-model="ruleForm.name" autocomplete="off" class="input"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" class="input"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" class="input"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { FETCH_LOGIN_IN } from "../store/type/actions";
import { mapGetters } from "vuex";
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        name: ""
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm() {
  
    let name = this.ruleForm.name
    let password = this.ruleForm.password
    localStorage.setItem("username", name);
    localStorage.setItem("userpassword", password);
      this.$store.dispatch(FETCH_LOGIN_IN);
      if (this.status[0].status == 200) {
        this.$router.push("/");
      }
    }
  },
  computed: {
    ...mapGetters(["status"])
  }
};
</script>

<style lang = "scss" scoped>
.ruleForm {
  margin: 50px;
}
.input {
  width: 40vw;
}
</style>
