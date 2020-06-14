<template>
  <transition mode="out-in" name="fade">
    <div v-show="isScrolled" class="elevation-3" @click="$vuetify.goTo(0)" id="up-button">
      <img width="24" src="@/assets/svg/up.svg" />
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    isScrolled: false
  }),
  methods: {
    handleScroll() {
      window.scrollY > 300
        ? (this.isScrolled = true)
        : (this.isScrolled = false);
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped lang="scss">
#up-button {
  cursor: pointer;
  position: fixed;
  right: 24px;
  bottom: 24px;
  padding: 16px;
  border-radius: 6px;
  background-color: #5f4c8c;
  z-index: 10;
}
.fade-enter-active,
.fade-leave-active {
  transform: rotate(0deg);
  transform: scale(1);
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  transition: all 0.5s;
  transform: rotate(0deg);

  transform: scale(0);
}
</style>