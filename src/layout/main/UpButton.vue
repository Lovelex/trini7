<template>
  <div class="elevation-3" @click="$vuetify.goTo(0)" id="up-button">
    <img width="24" src="@/assets/svg/up.svg" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  #up-button {
    cursor: pointer;
    position: fixed;
    right: 24px;
    bottom: 24px;
    padding: 16px;
    border-radius: 6px;
    background-color:#5F4C8C ;
    z-index: 10;
  }
</style>