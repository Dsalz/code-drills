<template>
  <div class="not-found-wrapper text-align-center">
    <p>This {{ item }} does not exist</p>
  </div>
</template>


<script>
export default {
  props: {
    item: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.not-found-wrapper {
  padding-top: 200px;
}
</style>