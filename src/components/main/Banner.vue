<template>
  <div id="main-banner">
    <div class="brand-divider-wrapper">
      <div class="brand-divider my-4" />
    </div>
    <v-container>
      <div class="white--text">
        <h2 :class="$vuetify.breakpoint.xs ? `mb-4` : `mb-12`">VOCÊ PODE IR ALÉM</h2>
        <v-row>
          <v-col cols="12" sm="8">
            <div>
              <p>Somos especialistas no que fazemos, por isso, focamos nos sonhos dos nossos clientes e desenvolvemos estratégias para torná-lo realidade!</p>
            </div>
          </v-col>
          <v-col cols="12" sm="4">
            <div>
              <v-btn @click="$vuetify.goTo('#main-contact')" large color="bprimary" dark outlined>
                <span :style="{color: 'white'}">QUERO LANÇAR MEU PRODUTO</span>
                <v-icon right>mdi-rocket</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <div class="brand-divider-wrapper">
      <div class="brand-divider my-4" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#main-banner {
  background-color: #5b54a3;
  .brand-divider-wrapper {
    padding: 32px 0 32px 0;
  }
  .brand-divider {
    width: 100%;
    height: 3px;
    background-color: white;
  }
  p {
    max-width: 80%;
  }
}
</style>