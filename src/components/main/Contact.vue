<template>
  <div id="main-contact">
    <v-container>
      <div class="brand-padding text-center mb-8">
        <h2>Vamos falar sobre o seu projeto?</h2>
        <span>Escreva sobre sua ideia</span>
      </div>
      <v-form @submit.prevent="submit" ref="contactForm">
        <v-row>
          <v-col cols="12">
            <v-text-field :rules="[rules.existsOrError]" validate-on-blur label="Nome Completo"/>
          </v-col>
          <v-col cols="12" sm="6" >
            <v-text-field :rules="[rules.existsOrError]" validate-on-blur label="Telefone (Whatsapp)"/>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field :rules="[rules.existsOrError, rules.validEmailOrError]" validate-on-blur label="Email"/>
          </v-col>
          <v-col cols="12">
            <v-textarea :rules="[rules.existsOrError]" validate-on-blur label="Escreva sua ideia"/>
          </v-col>
        </v-row>
        <div class="d-flex justify-center">
          <v-btn type="submit" dark color="bprimary">
            <span>QUERO LANÇAR MEU PRODUTO</span>
              <v-icon right>mdi-rocket</v-icon>
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { db } from '../../plugins/firebase'

export default {
  data: () => ({
    rules: {
      existsOrError: v => !!v || "O campo dever ser preenchido",
      validEmailOrError: v => /.+@.+\..+/.test(v) || "E-mail deve ser válido"
    },
    message: {
      name: '',
      phone: '',
      email: '',
      text: ''
    }
  }),
  methods: {
    submit() {
      const form = this.$refs.contactForm
      const messageRef = db.collection('messages')
        .doc()
      messageRef
        .set(this.message)
        .then()
        .catch(e => {
          
        })
    }
  }
}
</script>

<style>

</style>