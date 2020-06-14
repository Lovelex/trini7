export default {
  namespaced: true,
  state: {
    items: [
      {
        label: "Quem Somos",
        to: 0,
        icon: 'mdi-home-outline'
      },
      {
        label: "Serviços",
        to: "#main-things",
        icon: 'mdi-face-agent'
      },
      {
        label: "Depoimentos",
        to: "#main-depositions",
        icon: 'mdi-notebook-outline'
      },
      {
        label: "Trabalhe Conosco",
        to: "#main-contact",
        icon: 'mdi-cash-multiple'
      }
    ]
  },
  getters: {
    getNavItems: state => state.items
  }
}