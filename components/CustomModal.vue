<template>
  <div class="custom-modal" :style="modalStyles">
    <div class="custom-modal__header" :style="modalHeaderStyles">test</div>
    <div class="container"></div>
  </div>
</template>

<script>
export default {
  props: {
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
