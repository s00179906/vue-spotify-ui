import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      dark: {
        primary: '#040404',
        secondary: '#282828'
      },
      light: {
        primaryDark: '#040404',
        secondaryDark: '#0c0c0c',
        teritaryDark: '#121212',
        primaryGray: '#282828',
        primary: '#696'
      }
    }
  }
});
