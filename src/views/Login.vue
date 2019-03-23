<template>
  <div class="login-container">
    <el-form class="loginform" label-position="top" label-width="80px" :model="loginForm">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click.prevent="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    // 点击登录
    handleLogin() {
      // vue.$http
      this.$http
        // 1.路径  2.请求体 提交给服务器的数据判断是否成功
        .post("login", this.loginForm)
        // 发送成功走这里
        .then(res => {
          // console.log(res);
          const {
            //   解构赋值
            data: {
              // 登录成功返回给你 token
              data,
              meta: { msg, status }
            }
          } = res;
          //   console.log(msg,status)
          if (status === 200) {
            //保存token值      保存设置token名字
            localStorage.setItem("token", data.token);
            // 如果返回值是200，则路由跳转到主页home页面
            this.$router.push({
              name: "home"
            });
          } else {
            // 如果失败提示失败信息
            // element-ul组件库里提供的方法复制来的
            if (msg === "参数错误") {
              this.$message.error("请输入用户名或密码");
            } else {
              this.$message.error(msg);
            }
          }
        })
        // 出错的时候走这里
        .catch();
    }
  }
};
</script>

<style scoped>
.login-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: deeppink;
}
.loginform {
  width: 400px;
  height: 400px;
  border-radius: 20px;
  background-color: #fff;
  padding: 20px;
}
.login-btn {
  width: 100%;
}
h2 {
  text-align: center;
}
</style>
