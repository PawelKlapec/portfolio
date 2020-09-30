<template>
  <div class="custom-modal" :style="modalStyles">
    <div
      class="custom-modal__header d-flex align-items-center"
      :style="modalHeaderStyles"
    >
      <div>
        <h3 class="m-0">{{ title }}</h3>
      </div>
      <div></div>
    </div>
    <div class="container"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    modalStyles: {
      required: true,
      type: Object,
    },
    modalHeaderStyles: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.custom-modal {
  position: fixed;
  content: '';
  z-index: 1050;
  top: 0;
  left: 0;
  width: 10%;
  height: 10%;
  background-color: theme-color('primary');
  border-radius: 50%;
}

.custom-modal__header {
  position: relative;
  width: 100%;
  height: 70px;
  padding: 15px;
  border-radius: 4px 4px 0px 0px;
}
</style>
