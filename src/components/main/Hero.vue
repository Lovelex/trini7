<template>
  <div id="hero">
    <v-img src="@/assets/img/background.png">
      <v-container>
        <div class="hero-content white--text">
          <h2 class="display-3 font-weight-medium">
            Trini
            <span :style="{color: $vuetify.theme.themes.light.bprimary}">7</span>
          </h2>
          <p>
            Trabalhamos sempre com o intuito de ajudar nossos clientes a realizar seus sonhos e transformar suas vidas e de várias pessoas.
            Queremos, através da nossa experiência e transparência, alavancar os resultados de negócios digitais usando da nossa equipe especializada em lançamentos e das melhores estratégias de marketing para garantir o sucesso do seu produto / serviço.
          </p>
          <v-btn @click="$vuetify.goTo('#main-contact')" large color="bprimary" dark outlined>
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
#hero {
  background-color: #ebe9ee;
  .hero-content {
    h2 {
      margin-bottom: 64px;
      margin-top: 5vh;
    }
    p {
      max-width: 460px;
      margin-bottom: 32px;
    }
  }
}
</style>