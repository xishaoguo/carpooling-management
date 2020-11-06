<template>
  <div class="login">
    <div class="login-content">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName" class="login-content-input" placeholder="请输入用户名" maxlength="15"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" class="login-content-input" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onLogin('ruleForm')">登录</el-button>
          <el-button @click="onRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import AxiosHttp from '../../utils/http';
export default {
  data() {
    const validateUserName = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('用户名不能为空'));
      } else if (value.length > 15) {
        return callback(new Error('用户名最多输入15位'));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入密码'));
      } else if (value.length > 20) {
        return callback(new Error('密码最多输入20位'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [{ validator: validateUserName, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }]
      }
    };
  },
  methods: {
    onLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$router.push({name: 'home'})
          // AxiosHttp.postRequest('/user/backend/login', {
          //   captcha: '',
          //   password: '123456',
          //   platformType: 'merchant',
          //   userName: '13333333333',
          //   uuid: 'a9d66aeb-c1e2-4054-86b0-fb74b8608614'
          // },(data)=>{
          //   console.log("请求回来的数据",data)
          // });
          const obj = {
            captcha: '',
            password: '123456',
            platformType: 'merchant',
            userName: '13333333333',
            uuid: 'a9d66aeb-c1e2-4054-86b0-fb74b8608614'
          }
          const aHttp = new AxiosHttp('/user/backend/login',obj)
          aHttp.postRequest(data => {
            console.log("返回数据",data)
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    onRegister() {
      console.log('注册');
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #6392da 0%, #d6e7fa 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  &-content {
    width: 500px;
    height: 300px;
    background: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-input {
      width: 300px;
    }
  }
}
</style>