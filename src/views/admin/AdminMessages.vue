<template>
  <div id="admin-messages">
    <h2>Mensagens</h2>
    <v-text-field
      class="px-4"
      v-model="search"
      append-icon="mdi-magnify"
      label="Procurar"
      single-line
      hide-details
    ></v-text-field>
    <v-dialog :width="$vuetify.breakpoint.xs ? '100%' : '80%'" v-model="dialog.isActive">
      <v-card class="pa-4">
        <div class="my-1">
          <span class="mr-2 grey--text text--darken-2">Enviado em:</span>
          <span class="font-weight-bold">{{ message.time }}</span>
        </div>
        <div class="my-1">
          <span class="mr-2 grey--text text--darken-2">Nome completo:</span>
          <span class="font-weight-bold">{{ message.name }}</span>
        </div>
        <div class="my-1">
          <span class="mr-2 grey--text text--darken-2">Email:</span>
          <span class="font-weight-bold">{{ message.email }}</span>
        </div>
        <div class="my-1">
          <span class="mr-2 grey--text text--darken-2">Telefone:</span>
          <span class="font-weight-bold">{{ message.phone }}</span>
        </div>
        <div class="my-1">
          <span class="mr-2 grey--text text--darken-2">Mensagem:</span>
          <span class="font-weight-bold">{{ message.text }}</span>
        </div>
      </v-card>
    </v-dialog>
    <v-data-table :sort-by="['time']" :sort-desc="[true]" :search="search" :items="messages" :headers="headers">
      <template v-slot:item.name="{ item, index }">
        <span v-if="item.newMessage" class="green caption newMessage white--text">Nova!</span>
        <span class="d-block">{{item.name}}</span>
      </template>
      <template v-slot:item.actions="{ item, index }">
        <v-icon color="primary" @click="openMessage(item)">mdi-eye</v-icon>
        <v-icon class="ml-2" color="error" @click="deleteMessage(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { db } from "../../plugins/firebase";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    dialog: {
      isActive: false
    },
    message: {},
    headers: [
      {
        text: "Nome",
        value: "name"
      },
      {
        text: "Email",
        value: "email"
      },
      {
        text: "Enviada",
        value: "time"
      },
      {
        text: "Cell",
        value: "phone"
      },
      {
        text: "Ações",
        value: "actions",
        sortable: false
      }
    ],
    search: ""
  }),
  computed: {
    ...mapGetters({
      messages: "adminMessages/getMessages"
    })
  },
  methods: {
    openMessage(message) {
      (this.message = message), (this.dialog.isActive = true)
      db.collection('messages')
        .doc(message.id)
        .update({ newMessage: false })
    },
    deleteMessage(message) {
      if (confirm("Quer mesmo deletar essa mensagem?")) {
        db.collection("messages")
          .doc(message.id)
          .delete();
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .newMessage {
    padding: 3px;
    border-radius: 6px;
  }
</style>
