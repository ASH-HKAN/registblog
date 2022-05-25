<template>
  <div class="reset-password">
    <MyModal v-if="modalActive" v-on:close-modal="closeModal" />
    <MyLoading v-show="loading" />
    <div class="form-wrap">
      <form class="reset">
        <h2>Reset Password</h2>
        <span>Forgot Your Password</span>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <email class="icon" />
          </div>
        </div>
        <button>Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import MyModal from "../components/MyModal.vue";
import MyLoading from "../components/MyLoading.vue";
export default {
  name: "ForgotPassword",
  data() {
    return {
      email: null,
      modalActive: false,
      modalMessage: "",
      loading: false,
    };
  },

  components: {
    email,
    MyModal,
    MyLoading,
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      h3 {
        text-align: center;
        margin-bottom: 30px;
      }
      button {
        position: relative;
        width: 72px;
        height: 30px;
        border-radius: 100px;
        color: rgba(252, 252, 252, 0.898);
        background-color: #303030;
        cursor: pointer;
        font-size: 14px;
      }
    }
  }
}
</style>