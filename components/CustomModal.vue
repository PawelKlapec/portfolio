<template>
  <div class="custom-modal" :style="styles">
    <div
      class="custom-modal__header d-flex justify-content-between align-items-center"
      :style="headerStyles"
    >
      <div>
        <h3 class="m-0">{{ title }}</h3>
      </div>
      <div>
        <div
          class="btn btn-circle btn-transparent"
          @click="$emit('close-modal')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="custom-modal__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    styles: {
      required: true,
      type: Object,
    },
    headerStyles: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss">
.btn-circle {
  width: 30px;
  height: 30px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  border-radius: 50% !important;
  text-align: center;
}

.btn-transparent {
  background-color: transparent;
  transition: background-color $transition-speed $transition-function !important;

  svg {
    transition: fill $transition-speed $transition-function !important;
    fill: theme-color('white');
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
}

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
  overflow: hidden;
}

.custom-modal__header {
  position: relative;
  width: 100%;
  height: 70px;
  padding: 15px;
  border-radius: 4px 4px 0px 0px;
}

.custom-modal__body {
  position: relative;
  height: calc(100% - 70px);
  margin-top: 15px;
}
</style>
