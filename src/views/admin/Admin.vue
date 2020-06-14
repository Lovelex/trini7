<template>
  <div id="admin">
    <AdminNavbar />
    <Snackbar />
    <v-container>
      <router-view />
    </v-container>
    <Footer />
  </div>
</template>

<script>
import AdminNavbar from "@/layout/admin/AdminNavbar";
import Snackbar from "@/layout/admin/AdminSnackbar";
import Footer from "@/layout/admin/Footer";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { AdminNavbar, Footer, Snackbar },
  computed: {
    ...mapGetters(
      {
        messages: 'adminMessages/getNewMessagesCount'
      }
    )
  },
  methods: {
    ...mapActions(
      { 
        bindMessages: "adminMessages/bindMessages",
        setSnackbar: "adminSnackbar/setSnackbar" 
      }
    )
  },
  created() {
    this.bindMessages();
  },
  watch: {
    messages() {
      if(this.messages) {
        this.setSnackbar({
          mode: 'info',
          text: 'você recebeu uma nova mensagem.'
        })
      } 
    }
  }
};
</script>

<style>
</style>