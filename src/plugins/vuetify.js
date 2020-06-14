import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
        bprimary: '#E5711A',
				bsecondary: '#5F4C8C',
				firestacks: '#ff5722'
			},
			dark: {
        bprimary: '#E5711A',
				bsecondary: '#5F4C8C',
				firestacks: '#ff5722'
			}
		}
	}
});
