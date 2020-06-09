<template>
  <div id="hero-mobile">
    <v-img src="@/assets/img/backgroundMobile.png">
      <v-container class="d-flex align-center">
        <div class="hero-content white--text">
          <h2 class="mt-0">
            Trini
            <span :style="{color: $vuetify.theme.themes.light.bprimary}">7</span>
          </h2>
          <p>Trabalhamos sempre com o intuito de ajudar nossos clientes a realizar seus sonhos e transformar suas vidas e de várias pessoas.
Queremos, através da nossa experiência e transparência,  alavancar os resultados de negócios digitais usando da nossa equipe especializada em lançamentos e das melhores estratégias de marketing para garantir o sucesso do seu produto / serviço.</p>
          <v-btn @click="$vuetify.goTo('#main-contact')" class="mb-4" large color="bprimary" dark outlined>
            <span :style="{color: 'white'}">QUERO LANÇAR MEU PRODUTO</span>
            <v-icon right>mdi-rocket</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#hero-mobile {
  .container {
    height: 100%;
  }
}
@media screen and (min-width: 600px) {
  #hero-mobile {
    .hero-content {
      h2 {
       
        margin-bottom: 32px;
        margin-top: 32px;
      }
      p {
        max-width: 460px;
        margin-bottom: 32px;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  #hero-mobile {
    .hero-content {
      h2 {
        margin-bottom: 16px;
      }
      p {

       
        margin-bottom: 16px;
      }
    }
  }
}
</style>