<template>
  <div class="form-wrap">
    <form class="MyLogin">
      <p class="Mylogin-Myregister">
        Dont Have an account ?
        <router-link
          class="router-link"
          :to="{ name: 'MyRegister' }"
        ></router-link>
      </p>
      <h2>Login to FireBlogs</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <email class="icon"/>
        </div>
           <div class="input">
          <input type="Password" placeholder="Password" v-model="Password" />
          <password class="icon"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg"
import password from "../assets/Icons/lock-alt-solid.svg"

export default {
  name: "MyLogin",
  components:{
      email,
      password
  }
};
</script>

<style lang="scss">
</style>