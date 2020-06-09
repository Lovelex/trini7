<template>
  <div id="main-about">
    <v-container>
      <div class="brand-padding">
        <div class="d-flex">
          <h2 class="mr-2">Sobre a</h2>
          <h2 :style="{color: $vuetify.theme.themes.light.bsecondary}">
            Trini
            <span :style="{color: $vuetify.theme.themes.light.bprimary}">7</span>
          </h2>
        </div>
        <h4
          class="mb-8"
        >Uma equipe apaixonada no que faz, viciada em pensar fora da caixa e acostumada a ultrapassar as metas propostas</h4>
        <p
          class="mb-12"
        >Nós somos especialistas em lançamento de infoprodutos. Procuramos sempre entregar resultados duradouros para nossos clientes sempre acompanhando e monitorando cada passo da estratégia definida para bater as respectivas metas, dentre outras técnicas traçada no planejamento da estratégia de cada projeto.</p>
        <v-row v-if="!$vuetify.breakpoint.xs">
          <v-col md="12" lg="6">
            <div class="d-flex">
              <div>
                <v-img max-width="300" src="@/assets/img/P1.jpg"></v-img>
              </div>
              <div class="ml-2">
                <h4>Erickson Henrique</h4>
                <h4>Diretor de Marketing</h4>
                <p>Formado em Comunicação Social, Publicidade e Propaganda, tem mais de 5 anos de experiência em marketing e gestão de tráfego.</p>
              </div>
            </div>
          </v-col>
          <v-col md="12" lg="6">
            <div class="d-flex align-end">
              <div class="mr-2">
                <h4>Matheus Assumpção</h4>
                <h4>Diretor de Design</h4>
                <p>Depois de rodar pela engenharia, no setor privado e público, se encontrou no Design. Experiência de 4 anos na área de Design com expertise em diversas áres correlacionadas.</p>
              </div>
              <div>
                <v-img max-width="300" src="@/assets/img/P2.jpg"></v-img>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row v-if="$vuetify.breakpoint.xs">
          <v-col>
            <div class="mb-6 d-flex flex-column align-center">
              <div>
                <v-img max-width="300" src="@/assets/img/P1.jpg"></v-img>
              </div>
              <div class="mt-4 d-flex flex-column align-center">
                <h4>Erickson Henrique</h4>
                <h4 class="mb-2">Diretor de Marketing</h4>
                <p>Formado em Comunicação Social, Publicidade e Propaganda, tem mais de 5 anos de experiência em marketing e gestão de tráfego.</p>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="d-flex flex-column align-center">
              <div>
                <v-img max-width="300" src="@/assets/img/P2.jpg"></v-img>
              </div>
              <div class="mt-4 d-flex flex-column align-center">
                <h4>Matheus Assumpção</h4>
                <h4 class="mb-2">Diretor de Design</h4>
                <p>Depois de rodar pela engenharia, no setor privado e público, se encontrou no Design. Experiência de 4 anos na área de Design com expertise em diversas áres correlacionadas.</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#main-about {
  background-color: #dfdae5;
}
h4 {
  max-width: 436px;
}
p {
  max-width: 100%;
}
</style>