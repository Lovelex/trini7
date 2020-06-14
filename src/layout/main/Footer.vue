<template>
  <footer id="main-footer" class="mt-8">
    <v-footer class="d-flex justify-center py-8" color="#D3CCDE">
      <div>
        <div class="d-flex flex-column align-center mb-2">
          <v-img
            class="logo"
            @click="$vuetify.goTo(0)"
            width="133"
            src="@/assets/svg/logo-trini-vertical.svg"
          />
        </div>
        <div class="d-flex justify-center mb-2">
          <v-tooltip top v-for="social in socials" :key="social.label">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" target="_blank" :href="social.label === 'Gmail' ? `mailto: ${social.href}`: social.href" class="mx-1" icon>
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{social.label}}</span>
          </v-tooltip>
        </div>
        <span class="caption d-block text-center">{{email.value}}</span>
        <span class="caption font-weight-medium">2020 - Trini7 Desing e Marketing</span>
      </div>
    </v-footer>
  </footer>
</template>

<script>

export default {
  data: () => ({
    email: {
      value: 'trini7agencia@gmail.com'
    },
    socials: [
      {
        label: "Gmail",
        icon: "mdi-email-outline",
        href: "trini7agencia@gmail.com"
      },
      {
        label: "Instagram",
        icon: "mdi-instagram",
        href: "https://www.instagram.com/agencia.trini7/"
      },
      {
        label: "Facebook",
        icon: "fab fa-facebook-f",
        href: "https://www.facebook.com/agenciatrini7"
      }
    ]
  })
};
</script>

<style>
</style>