<template>
  <div>
    <Navbar />
    <NotFoundText item="page" />
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NotFoundText from "../components/NotFoundText";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
    NotFoundText
  }
};
</script>
