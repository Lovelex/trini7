<template>
  <v-navigation-drawer v-model="drawer.isActive" app disable-resize-watcher>
    <v-list>
      <v-list-item-group>
        <v-list-item @click="$vuetify.goTo(item.to)" v-for="item in items" :key="item.label">
          <v-list-item-avatar>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-title>
            {{ item.label }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    drawer: Object
  },
  computed: {
    ...mapGetters(
      {
        items: 'mainNav/getNavItems'
      }
    )
  }
};
</script>

<style>
</style>