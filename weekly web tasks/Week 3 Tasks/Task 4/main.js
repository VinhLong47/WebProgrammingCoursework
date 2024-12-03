var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks.',
        image: "./assets/images/socks_green.jpg",
        link: "https://communityclothing.co.uk/products/premium-cotton-sock-rib-green?variant=44268007424277",
        altText: "A pair of socks",
        inStock: false,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})