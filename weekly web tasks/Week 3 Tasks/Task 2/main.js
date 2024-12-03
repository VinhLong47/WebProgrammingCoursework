var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: "Vue Mastery",
        description: "A pair of warm, fuzzy socks",
        altText: "A pair of socks",
        selectedVariant: 0,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Unisex"],
        variants: [
            {
                variantId: 1234,
                variantColor: "green",
                variantImage:"./assets/images/socks_green.jpg",
                variantQuantity: 10,
                onSale: true,
            },

            {
                variantId: 5678,
                variantColor: "blue",
                variantImage:"./assets/images/socks_blue.jpg",
                variantQuantity: 0,
                onSale: false,
            }
        ],
        sizes: [
            {
                sizeId: 1,
                sizeLabel: "S",
            },

            {
                sizeId: 3,
                sizeLabel: "M",
            },

            {
                sizeId: 2,
                sizeLabel: "L",
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart(){
            this.cart -= 1
        },
        updateProduct(index) {
            this.selectedVariant = index
            // console.log(index)
            this.onSale = this.variants[index].onSale; // Task 7 challenge
        }
    },
    computed: {
        saleMessage() { // Task 7 challenge
            if (this.onSale) {
                return `${this.brand} ${this.product} is on sale!`;
            }
                return `${this.brand} ${this.product} is not on sale.`;
        },

        title(){
            return this.brand + ' ' + this.product
        }
    ,
        image(){
            return this.variants[this.selectedVariant].variantImage
        }
    ,
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    ,
        }
});