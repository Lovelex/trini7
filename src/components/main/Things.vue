<template>
  <div id="main-things">
    <v-container>
      <div class="brand-padding">
        <h2 class="mb-12">O QUE FAZEMOS?</h2>
        <p
          class="mb-12"
        >Trabalhamos para ajudar nossos clientes a realizar sonhos e transformar a vida das pessoas. Queremos alavancar os resultados de negócios digitais transformadores colocando em prática toda a nossa experiência e transparência nas ações, e utilizando as melhores estratégias de marketing para garantir o sucesso do seu produto ou serviço. Contamos com uma equipe especializada em lançamentos de produtos online à disposição para entender as necessidades dos nossos clientes e propor a melhor estratégia de mercado.</p>
        <v-row>
          <v-col cols="12" sm="6" md="3" v-for="thing in things" :key="thing.title">
            <div class="d-flex flex-column align-center align-sm-start">
              <div class="mb-8">
                <v-img contain width="128" height="128" :src="thing.icon" />
              </div>
              <h3 class="mb-6">{{ thing.title }}</h3>
              <p>{{thing.text}}</p>
            </div>
          </v-col>
        </v-row>
        <div class="mt-12 d-flex justify-center">
          <v-btn @click="$vuetify.goTo('#main-contact')" color="bprimary" outlined>
            <span :style="{color: 'black'}">QUERO ALAVANCAR MEUS RESULTADOS</span>
            <v-icon>
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import Chess from "@/assets/svg/Chess.svg";
import Megaphone from "@/assets/svg/Megaphone.svg";
import Lamp from "@/assets/svg/Lamp.svg";
import Funnel from "@/assets/svg/Funnel.svg";

export default {
  data: () => ({
    things: [
      {
        icon: Chess,
        title: "ESTRATÉGIA",
        text:
          "Etapa de extrema importância para que o restante da campanha efetivamente funcione. Inclui a aplicação das estratégias de lançamento para desenvolvimento do negócio online e as estratégias mais adequadas ao produto que será desenvolvido."
      },
      {
        icon: Megaphone,
        title: "TRÁFEGO",
        text: "(Geração de Leads) Trata-se da captação e geração de leads por meio de anúncios nas principais plataformas digitais: Facebook Ads e Google Adwords. Essa etapa também envolve a criação (design e layout) de todas as páginas utilizadas durante a campanha, criação das páginas de vendas e diagramação de conteúdos-iscas como e-books e ferramentas adicionais em PDF."
      },
      {
        icon: Lamp,
        title: "COPY",
        text: "(Scripts e E-mails de Vendas) Criação de todas as copys (e-mails) da campanha e scripts dos webinários, vídeos de lançamento e vídeos de vendas. Esses e-mails e scripts são criados utilizando as melhores técnicas de estruturação da mensagem como gatilhos mentais, AIDA e conexão, e criam um relacionamento com seus potenciais clientes para gerar antecipação em relação à oferta que será anunciada."
      },
      {
        icon: Funnel,
        title: "FUNIL DE VENDAS",
        text: 'Após selecionar os melhores leads de sua base, é hora de afunilar os potenciais clientes e introduzi-los na abertura do carrinho, monitorando os resultados dos processos anteriores e tomando decisões estratégicas para garantir o melhor resultado. É nessa etapa que a venda efetivamente acontece.'        
      }
    ]
  })
};
</script>

<style scoped lang="scss">
p {
  max-width: 100%;
}
#main-things {
  background-color: #ebe9ee;
}
</style>