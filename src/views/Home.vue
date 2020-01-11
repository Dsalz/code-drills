<template>
  <div>
    <Navbar />
    <div class="home-wrapper"></div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
.home-wrapper {
  height: calc(100vh - 200px);
}
</style>
