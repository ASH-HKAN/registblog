<template>
  <div class="form-wrap">
    <form class="MyLogin">
      <h5 class="Mylogin-MyRegister">
        Already Have an account ?
        <router-link class="router-link" :to="{ name: 'login' }">
          Login</router-link
        >
      </h5>
      <h2>Register on FireBlog</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name " v-model="firstName" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="last Name " v-model="lastName" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="User Name " v-model="userName" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <email class="icon" />
        </div>
        <div class="input">
          <input type="Password" placeholder="Password" v-model="Password" />
          <password class="icon" />
        </div>
      </div>
      <router-link class="forgot-password" :to="{ name: 'forgot-password' }">
        <h3>Forgot your password</h3></router-link
      >
      <button class="SignUp"><h8>Sign in </h8></button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>
<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import user from "../assets/Icons/user-alt-light.svg";
export default {
  name: "MyLogin",
  components: {
    email,
    password,
    user,
  },

  data() {
    return {
      firstName: null,
      lastName: null,
      userName: null,
      email: null,
      password: null,
    };
  },
};
</script>

<style lang="scss" scoped>
form {
  h2 {
    color: #002351a5;
    max-width: 350px;
  }
}
</style>
