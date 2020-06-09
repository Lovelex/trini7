<template>
  <div>
    <Drawer :drawer="drawer" />
    <nav id="main-navbar">
      <v-app-bar color="white" app>
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click="drawer.isActive = !drawer.isActive"/>
        <div
          :class="{'main-logo': $vuetify.breakpoint.smAndDown, 'ml-n6': $vuetify.breakpoint.smAndDown}"
          class="d-flex flex-column align-center align-md-start"
        >
          <v-img class="logo" @click="$vuetify.goTo(0)" width="140" src="@/assets/svg/logo-trini-horizontal.svg" />
        </div>
        <v-spacer />
        <div v-if="!$vuetify.breakpoint.smAndDown">
          <v-tabs>
            <v-tab @click="$vuetify.goTo(item.to)" v-for="item in items" :key="item.label">{{ item.label }}</v-tab>
          </v-tabs>
        </div>
      </v-app-bar>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Drawer from "../../layout/main/Drawer";

export default {
  components: { Drawer },
  data: () => ({
    drawer: {
      isActive: false
    }
  }),
  computed: {
    ...mapGetters({ items: "mainNav/getNavItems" })
  }
};
</script>

<style lang="scss">
#main-navbar {
  .main-logo {
    width: 100%;
  }
}
</style>