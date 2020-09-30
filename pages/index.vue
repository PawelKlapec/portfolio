<template>
  <div>
    <CustomModal
      ref="modal"
      :modal-styles="modalStyles"
      :modal-header-styles="modalHeaderStyles"
    />
    <div class="container">
      <div class="row header__gutter align-items-center header">
        <div class="col col-md-6">
          <h2 class="header__subtitle">PAWEŁ KŁAPEĆ</h2>
          <h1 class="header__title">RUBY ENGINEER</h1>
          <h3 class="header__quote">
            Make it work, make it right, make it fast.
          </h3>
        </div>
        <div class="col col-md-6 text-center justify-self-center">
          <HeaderMenu @menuClick="handleMenuClick" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import CustomModal from '@/components/CustomModal'
import anime from 'animejs/lib/anime.es.js'

export default {
  components: {
    HeaderMenu,
    CustomModal,
  },
  data() {
    return {
      modalVisible: false,
      modalStyles: {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        display: 'none',
        backgroundColor: 'transparent',
      },
      modalHeaderStyles: {
        backgroundColor: 'transparent',
      },
      modalAnimation: null,
    }
  },
  methods: {
    handleMenuClick(target) {
      const rect = target.getBoundingClientRect()
      const backgroundColor = window.getComputedStyle(target).fill
      this.modalStyles.height = rect.height + 'px'
      this.modalStyles.width = rect.width + 'px'
      this.modalStyles.top = rect.top + rect.height / 2 + 'px'
      this.modalStyles.left = rect.left + rect.width / 2 + 'px'
      this.modalStyles.backgroundColor = backgroundColor
      this.modalStyles.display = 'block'
      this.modalHeaderStyles.backgroundColor = backgroundColor
      this.revealPage(rect).play()
    },

    revealPage(rect) {
      this.modalAnimation = anime({
        targets: this.$refs.modal.$el,
        zIndex: 1050,
        duration: 700,
        autoplay: false,
        backgroundColor: '#FFF',
        keyframes: [
          {
            value: 500,
            top: [rect.top + rect.height / 2, window.innerHeight / 2 - 200],
            left: [rect.left + rect.width / 2, window.innerWidth / 2 - 200],
            width: [0, 400],
            height: [0, 100],
          },
          { value: 200, height: [100, 400] },
        ],

        borderRadius: ['50%', '4px'],
        easing: 'cubicBezier(0.4, 0.0, 0.2, 1)',
      })

      return this.modalAnimation
    },
  },
}
</script>
