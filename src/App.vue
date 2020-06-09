<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
.logo {
  cursor: pointer;
}

@media screen and (min-width: 600px) {
  .brand-padding {
    margin: 128px 0 128px 0;
  }

  h2 {
    font-size: 64px;
  }
  p {
    max-width: 460px;
  }
}
@media screen and (max-width: 600px) {
  .brand-padding {
    padding: 32px 0 32px 0;
  }

  h2 {
    font-size: 32px;
  }
  p {
    font-size: 14px;
    max-width: 460px;
  }
}
</style>