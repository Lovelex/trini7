<template>
  <v-snackbar :color="snackbarMode.color" v-model="snackbar.isActive">
		<span>{{ snackbar.text }}</span>
		<v-icon>
			{{ snackbarMode.icon }}
		</v-icon>
	</v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      snackbar: "mainSnackbar/getSnackbar"
    }),
    snackbarMode() {
      const snacks = {
        success: {
          color: "success",
          icon: "mdi-checkbox-marked-circle"
        },
        error: {
          color: "error",
          icon: "mdi-close-circle"
        },
        info: {
          color: "info",
          icon: "mdi-alert-circle"
        },
        warning: {
          color: "warning",
          icon: "mdi-alert"
        }
			};
			
			return snacks[this.snackbar.mode]
    }
  }
};
</script>

<style>
</style>