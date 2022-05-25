<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-if="!Navigation" />
      <router-view />
      <Footer v-if="!Navigation" />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/MyNavigation";
import Footer from "./components/MyFooter";

export default {
  name: "app",
  components: { Navigation, Footer },
  data() {
    return {
      Navigation: null,
    };
  },
  created() {
    this.checkRoute();
  },
  mounted() {},
  methods: {
    checkRoute() {
      if (
        this.$route.name === "MyLogin" ||
        this.$route.name === "MyRegister" ||
        this.$route.name === "ForgotPassword"
      ) {
        this.Navigation = true;
        return;
      }
      this.Navigation = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow {
  margin-left: 3px;
  width: 15px;
  path {
    fill: rgb(4, 12, 98);
  }
}

.arrow-light {
  path {
    fill: rgb(255, 255, 255);
  }
}

.error {
  text-align: center;
  
  color: red;
}

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #1f1f1f1f;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
