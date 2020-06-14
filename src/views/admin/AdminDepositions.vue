<template>
  <div id="admin-depositions">
    <h2>Depoimentos</h2>
    <div>
      <v-card class="pa-4 pt-8">
        <v-btn @click="openInSubmitMode" fab top right absolute color="primary">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <div>
          <v-progress-circular v-show="checkbox.isLoading" indeterminate size="24"></v-progress-circular>
          <v-checkbox
            :disabled="checkbox.isLoading"
            @change="changeDepositionVisibility"
            v-model="checkbox.isVisible"
            label="Deixar Depoimentos visível?"
          />
        </div>
        <v-dialog :width="$vuetify.breakpoint.xs ? '100%' : '50%' " v-model="dialog.isActive">
          <v-card color="pa-4 px-8">
            <v-form>
              <v-text-field v-model="deposition.imageUrl" label="Imagem do depoimento (URL)" />
              <v-textarea v-model="deposition.text" label="Texto do depoimento" />
              <div class="d-flex justify-end">
                <v-btn @click="closeDialog" color="secondary" class="mr-2">
                  <span>Fechar</span>
                </v-btn>
                <v-btn
                  @click="addDeposition"
                  :loading="isLoading"
                  v-if="mode === 'submit'"
                  color="primary"
                >
                  <span>Adicionar</span>
                </v-btn>
                <v-btn
                  @click="updateDeposition()"
                  :loading="isLoading"
                  v-if="mode === 'update'"
                  color="warning"
                >
                  <span>Editar</span>
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-dialog>
        <v-row>
          <v-col v-for="(deposition, i) in depositions" :key="i" cols="12" sm="6" md="4">
            <v-card class="pa-4">
              <div class="ma-2 d-flex flex-column align-center">
                <v-img width="150" contain :src="deposition.imageUrl"></v-img>
              </div>
              <p class="caption">{{deposition.text}}</p>
              <div class="d-flex justify-end">
                <v-btn
                  @click="openInUpdateMode(deposition)"
                  color="warning"
                  small
                  fab
                  right
                  class="mr-2"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn @click="deleteDeposition(deposition)" color="error" fab small>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
import { db } from "../../plugins/firebase";
import formMixin from "../../mixins/formMixin";
import { mapActions } from "vuex";

export default {
  mixins: [formMixin],
  data: () => ({
    deposition: {
      imageUrl: "",
      text: ""
    },
		checkbox: {
			isVisible: false,
			isLoading: false,
		},
    depositions: []
  }),
  firestore: {
    depositions: db.collection("depositions")
  },
  methods: {
    ...mapActions({
      setSnackbar: "adminSnackbar/setSnackbar"
    }),
    openInSubmitMode() {
      this.submitMode();
      this.openDialog();
      this.clear()
    },
    openInUpdateMode(deposition) {
      this.updateMode();
      this.openDialog();
      this.deposition = deposition;
    },
    clear() {
      this.deposition = {
        imageUrl: "",
        text: ""
      };
    },
    addDeposition() {
      this.startLoading();
      db.collection("depositions")
        .add(this.deposition)
        .then(() => {
          this.closeDialog();
          this.clear();
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
    },
    updateDeposition() {
			this.startLoading();
      db.collection("depositions")
        .doc(this.deposition.id)
        .update(this.deposition)
        .then(() => {
					this.closeDialog();
          this.clear();
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
		},
		deleteDeposition(deposition) {
			if(confirm('Quer mesmo deletar esse depoimento?')) {
				db.collection("depositions")
        .doc(deposition.id)
				.delete()
				.then(() => {
					this.closeDialog();
          this.clear();
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
		},
		changeDepositionVisibility() {
			this.checkbox.isLoading = true
			db.collection('configs')
				.doc('depositions')
				.update({
					isVisible: this.checkbox.isVisible
				})
				.then(() => {
					this.setSnackbar({
						mode: 'success',
						text: 'Visibilidade de depoimentos alterado com sucesso.'
					})
				})
				.catch(e => {
					this.setSnackbar({
						mode: 'error',
						text: e.message
					})
				})
				.finally(() => {
					this.checkbox.isLoading = false
				})
		}
	},
	created() {
		db
			.collection('configs')
			.doc('depositions')
			.get()
			.then(doc => {
				this.checkbox.isVisible = doc.data().isVisible
			})
	}
};
</script>

<style>
</style>