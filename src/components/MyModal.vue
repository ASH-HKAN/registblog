<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ this.modalMessage }}The Confirmation Code Sent to Your Email</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>



<script>
export default {
  props: ["modalMessage"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>


<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #30303030;

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 300px;
    padding: 40px 30px;

    background-color: #fff;

    p {
      text-align: center;
      font-size: 20px;
      color: #0b0101;
      margin: 20px ;
    }

    button {
      position: relative;
      border-radius: 100px;
      align-self: center;
      width: 80px;
      color: rgba(252, 252, 252, 0.898);
      background-color: #303030;
    }
  }
}
</style>