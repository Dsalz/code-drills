<template>
  <div class="loader-wrapper align-items-center d-flex justify-content-center">
    <svg
      width="200px"
      height="200px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      class="lds-rolling"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#fff"
        stroke-width="10"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
        transform="rotate(7.32375 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="0.8s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loader-wrapper svg circle {
  stroke: #72dfd4;
}
</style>