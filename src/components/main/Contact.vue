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
            <v-text-field
              v-model="message.name"
              :rules="[rules.required]"
              validate-on-blur
              label="Nome Completo"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              type="number"
              @input="tel"
              :hint="phoneResult"
              v-model.trim="message.phone"
              :rules="[rules.required]"
              validate-on-blur
              label="Telefone (Whatsapp)"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="message.email"
              :rules="[rules.required, rules.email]"
              validate-on-blur
              label="Email"
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="message.text"
              :rules="[rules.required]"
              validate-on-blur
              label="Escreva sua ideia"
            />
          </v-col>
        </v-row>
        <div class="d-flex justify-center">
          <v-btn :loading="isLoading" type="submit" dark color="bprimary">
            <span>QUERO LANÇAR MEU PRODUTO</span>
            <v-icon right>mdi-rocket</v-icon>
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { db } from "../../plugins/firebase";
import { mapActions } from "vuex";
import formMixin from "@/mixins/formMixin";

export default {
  mixins: [formMixin],
  data: () => ({
    message: {
      name: "",
      phone: "",
      email: "",
      text: ""
    },
    phoneResult: '',
  }),
  methods: {
    ...mapActions({
      setSnackbar: "mainSnackbar/setSnackbar"
    }),
    tel() {
      let phone = this.message.phone.split('')
      const firstTwoNumbers = phone.splice(0, 2)
      firstTwoNumbers.push(')')
      firstTwoNumbers.unshift('(')
      phone.unshift(firstTwoNumbers.join(''))
      phone.join('')
      phone = phone.join('')
      this.phoneResult = phone
      
    },
    submit() {
      const form = this.$refs.contactForm;
      if (form.validate()) {
        this.startLoading();
        const messageRef = db.collection("messages").doc();
        messageRef
          .set({
            time: new Date().toLocaleString(),
            newMessage: true,
            ...this.message
          })
          .then(() => {
            this.setSnackbar({
              mode: "success",
              text: "Mensagem enviada com sucesso."
            });
            this.clearForm();
          })
          .catch(e => {
            this.setSnackbar({
              mode: "error",
              text: e.message
            });
          })
          .finally(() => {
            this.stopLoading();
          });
      }
    }
  }
};
</script>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
</style>