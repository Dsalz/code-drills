<template>
  <nav class="d-flex justify-content-between align-items-center gen-padding">
    <div class="nav-logo d-flex align-items-center">
      <img :src="require('../../assets/images/Code-Drills.svg')" />
    </div>

    <div class="nav-links d-flex align-items-center">
      <router-link to="/problems">Problems</router-link>
      <router-link to="/tutorials">Tutorials</router-link>
      <router-link to="/drills">Drills</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/contact">Contact Us</router-link>
      <div class="nav-profile d-flex align-items-center">
        <img src="https://placehold.it/100" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
nav {
  background-color: #ffffff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
  font-weight: 500;
  height: 60px;
}

.nav-profile {
  position: relative;
  cursor: pointer;
}

.nav-profile::after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #ccc;
  right: -16px;
  top: 12px;
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
</style>
