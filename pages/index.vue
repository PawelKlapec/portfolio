<template>
  <div>
    <CustomModal
      ref="modal"
      :styles="modalStyles"
      :header-styles="modalHeaderStyles"
      :title="modalTitle"
      @close-modal="closeModal"
      ><SkillsCustomModal
    /></CustomModal>
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
import anime from 'animejs/lib/anime.es.js'

import findColor from '@/lib/findColor'
import findTitle from '@/lib/findTitle'

import HeaderMenu from '@/components/HeaderMenu'
import CustomModal from '@/components/CustomModal'
import SkillsCustomModal from '@/components/SkillsCustomModal'

export default {
  components: {
    HeaderMenu,
    CustomModal,
    SkillsCustomModal,
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
      modalTitle: '',
      modalRect: '',
      modalRectPosition: null,
    }
  },
  methods: {
    handleMenuClick(event) {
      const rect = event.target.getBoundingClientRect()
      const backgroundColor = findColor(event.target)
      const title = findTitle(event.target)

      this.modalStyles.height = rect.height + 'px'
      this.modalStyles.width = rect.width + 'px'
      this.modalStyles.top = rect.top + rect.height / 2 + 'px'
      this.modalStyles.left = rect.left + rect.width / 2 + 'px'
      this.modalStyles.backgroundColor = backgroundColor
      this.modalStyles.display = 'block'
      this.modalTitle = title

      this.modalHeaderStyles.backgroundColor = backgroundColor

      this.modalRect = rect
      this.revealModal(rect).play()
    },

    closeModal() {
      this.revealModal(this.modalRect, 'reverse').play()
    },

    revealModal(rect, direction) {
      this.modalAnimation = anime({
        targets: this.$refs.modal.$el,
        zIndex: 1050,
        duration: 700,
        autoplay: false,
        direction,
        backgroundColor: '#423b3d',
        keyframes: [
          {
            value: 300,
            width: [0, 70],
            height: [0, 70],
            top: [rect.top + rect.height / 2, window.innerHeight / 2 - 300],
            left: [rect.left + rect.width / 2, window.innerWidth / 2 - 390],
          },
          {
            value: 200,
            width: [70, 760],
          },
          { value: 200, height: [70, 570] },
        ],

        borderRadius: ['50%', '4px'],
        easing: 'cubicBezier(0.4, 0.0, 0.2, 1)',
      })

      return this.modalAnimation
    },
  },
}
</script>

<style lang="scss">
.header {
  min-height: 100vh;
}

.header__gutter {
  margin-right: 0px;
  margin-left: 0px;
}

.header__subtitle {
  font-weight: 300;
  color: theme-color('white') !important;
  font-size: 32px;
  margin-bottom: 8px;
}

.header__title {
  font-weight: 600;
  color: theme-color('white') !important;
  font-size: 52px;
  margin-bottom: 32px;
}

.header__quote {
  font-size: 16px;
  background: linear-gradient(
    to right,
    theme-color('primary') 0%,
    theme-color('info') 100%
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
