<template>
  <nav class="d-flex justify-content-between align-items-center gen-padding">
    <router-link to="/" class="nav-logo d-flex align-items-center">
      <img :src="require('../../assets/images/Code-Drills.svg')" />
    </router-link>

    <div class="nav-links d-flex align-items-center">
      <router-link class="hide-s" to="/problems">Problems</router-link>
      <router-link class="hide-s" to="/tutorials">Tutorials</router-link>
      <router-link class="hide-s" to="/drills">Drills</router-link>
      <router-link class="hide-s" to="/about">About Us</router-link>
      <router-link class="hide-s" to="/contact">Contact Us</router-link>
      <div class="nav-profile d-flex align-items-center" @click.stop="toggleMenu">
        <img src="https://placehold.it/100" />
        <div v-if="showRespMenu" class="nav-resp-menu">
          <router-link to="/profile">Profile</router-link>
          <router-link class="show-s" to="/problems">Problems</router-link>
          <router-link class="show-s" to="/tutorials">Tutorials</router-link>
          <router-link class="show-s" to="/drills">Drills</router-link>
          <router-link class="show-s" to="/about">About Us</router-link>
          <router-link class="show-s" to="/contact">Contact Us</router-link>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showRespMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showRespMenu = !this.showRespMenu;
    }
  },
  created() {
    document.body.addEventListener("click", () => {
      this.showRespMenu = false;
    });
  }
};
</script>

<style scoped>
nav {
  background-color: #ffffff;
  font-weight: 500;
  height: 60px;
}

nav,
.nav-resp-menu {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
}

.nav-profile {
  position: relative;
  cursor: pointer;
}

.nav-profile::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #ccc;
  right: -16px;
  top: 12px;
}

.nav-profile::after,
.nav-resp-menu {
  position: absolute;
}

.nav-links {
  font-size: 14px;
}

.nav-links a,
.nav-profile {
  margin: 0 15px;
  color: #1c2330;
}

.nav-profile img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.nav-resp-menu {
  top: 40px;
  left: -50px;
  background: #ffffff;
  width: 130px;
  padding: 0;
}

.nav-resp-menu a {
  display: block;
  padding: 10px 0;
  font-size: 14px;
  text-align: center;
  margin: 0;
}

.nav-resp-menu a:hover {
  background: rgba(114, 223, 212, 0.5);
}

@media screen and (max-width: 800px) {
  .nav-resp-menu {
    left: auto;
    right: -5vw;
  }
}
</style>
