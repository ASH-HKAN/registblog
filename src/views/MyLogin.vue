<template>
  <div class="form-wrap">
    <form class="MyLogin">
      <h5 class="Mylogin-MyRegister">
        Dont Have an account ?
    <router-link class="router-link" :to="{name:'register'}"> register</router-link>
      </h5>
      <h2>Login to FireBlog</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <email class="icon" />
        </div>
        <div class="input">
          <input type="Password" placeholder="Password" v-model="Password" />
          <password class="icon" />
        </div>
      </div>
      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }">
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

export default {
  name: "MyLogin",
  components: {
    email,
    password,
  },

  data() {
    return {
      email: null,
      password: null,
    };
  },
};
</script>

<style lang="scss" >
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  text-justify: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }
  .login-register {
    margin-bottom: 32px;

    .router-link {
      color: #000;
    }
  }

  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 0 50px;
    }
    h2 {
      text-align: center;
      font-size: 32px;
      color: #ac0808;
      margin-bottom: 34px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;
      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 30px;
          height: 50px;
          &:focus {
            outline: orange;
          }
        }
        .icon {
          width: 15px;
          position: absolute;
          left: 6px;
        }
      }
    }

    .SignUp {
      position: relative;
      width: 72px;
      height: 30px;
      border-radius: 100px;
      color: rgba(252, 252, 252, 0.898);
      background-color: #000000;
      cursor: pointer;
      font-size: 14px;
    }

    .forgot-password {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.898);
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;

      &:hover {
        border-color: rgb(14, 2, 2);
      }
    }

    .angle { 
      display: flex;
      position: absolute;
      background-color: #ffffff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }

  .background {
    display: flex;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/background.png");
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>

