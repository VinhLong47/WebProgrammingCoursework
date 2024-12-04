var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks.',
        image: "./assets/images/socks_green.jpg",
        link: "https://communityclothing.co.uk/products/premium-cotton-sock-rib-green?variant=44268007424277",
        altText: "A pair of socks",
        inStock: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green'    
      },
      {
        variantId: 2235,
        variantColor: 'blue'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    } 
})