<template>
  <div>
    <v-navigation-drawer app v-model="drawer.isActive">
      <div class="px-4 pt-4">
        <v-btn text>
          <span>Firestacks</span>
        </v-btn>
        <v-divider class="my-4"></v-divider>
        <span class="grey--text text--darken-2 font-weight-medium ml-4">
          Menu
        </span>
        <v-list class="mt-2">
          <v-list-item-group>
            <v-list-item v-for="item in navItems" :key="item.label" :to="{ name: item.to }">
              <v-list-item-icon>
                <v-icon>
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                {{ item.label }}
              </v-list-item-title>
              <v-badge v-if="item.label === 'Mensagens' && messagesCount" :content="messagesCount" class="mr-8" ></v-badge>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div class="mt-4">
          <v-btn @click="logout" block dark color="firestacks">
            <v-icon left>
              mdi-power
            </v-icon>
            <span>DESLOGAR</span>
          </v-btn>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { auth } from "../../plugins/firebase";
import { mapGetters } from 'vuex';

export default {
  props: {
    drawer: Object
  },
  data: () => ({
    navItems: [
      {
        label: 'Mensagens',
        icon: 'mdi-email-outline',
        to: 'AdminMessages',
      },
      {
        label: 'Depoimentos',
        icon: 'mdi-notebook-outline',
        to: 'AdminDepositions',
      },
    ]
  }),
  computed: {
    ...mapGetters(
      {
        messagesCount: 'adminMessages/getNewMessagesCount'
      }
    )
  },
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.push({ name: "Main" });
      });
    },
    user() {
      console.log(auth.currentUser);
    }
  }
};
</script>

<style>
</style>