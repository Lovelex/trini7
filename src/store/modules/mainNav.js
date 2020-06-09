export default {
  namespaced: true,
  state: {
    items: [
      {
        label: "Quem Somos",
        to: 0,
        icon: 'mdi-home'
      },
      {
        label: "Serviços",
        to: "#main-things",
        icon: 'mdi-home'
      },
      {
        label: "Depoimentos",
        to: "#main-depositions",
        icon: 'mdi-home'
      },
      {
        label: "Trabalhe Conosco",
        to: "#main-contact",
        icon: 'mdi-home'
      }
    ]
  },
  getters: {
    getNavItems: state => state.items
  }
}