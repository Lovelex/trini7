export default {
	data: () => ({
		isLoading: false,
		mode: 'submit',
		dialog: {
			isActive: false
		},
		rules: {
      required: v => !!v || "O campo deve ser preenchido",
      email: v => /.+@.+\..+/.test(v) || "E-mail precisa ser válido",
      min: v => v.length >= 6 || "A senha dever ter no mínimo 6 dígitos"
    }
	}),
	methods: {
		openDialog() {
			this.dialog.isActive = true
		},
		closeDialog() {
			this.dialog.isActive = false
		},
		updateMode() {
			this.mode = 'update'
		},
		submitMode() {
			this.mode = 'submit'
		},
		startLoading() {
			this.isLoading = true
		},
		stopLoading() {
			this.isLoading = false
		},
		clearForm() {
			Object.assign(this.$data, this.$options.data.apply(this));
		}
	}
}