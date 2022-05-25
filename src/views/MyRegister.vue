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
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register" class="SignUp"><h8>SIGN UP</h8></button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>
<script>
console.log("qcqc");
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import user from "../assets/Icons/user-alt-light.svg";
// import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
import { createUserWithEmailAndPassword } from "firebase/auth";

console.log("cwcw");
export default {
  name: "MyRegister",
  components: {
    email,
    password,
    user,
  },

  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      email: "",
      errorMsg: "",
      error: null,
    };
  },

  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.userName !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        // const firebaseAuth = await firebase.auth();

        const creatUser = await createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await creatUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          userName: this.userName,
          email: this.email,
        });
        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = "File the Fucking Empty Table bitch";
      return;
    },
  },
};
console.log(123);
</script>


<style lang="scss" scoped>
form {
  h2 {
    color: #002351a5;
    max-width: 350px;
  }
}
</style>
