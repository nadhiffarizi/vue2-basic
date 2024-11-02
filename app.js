
const app = new Vue({
    el: '#app',
    data: {
        products: null,
        maxPrice: 50,
        cart: [],
        // slugtext: "The Quick #(*!&@ Brown 29",
        style: {
            label: ['fw-bold w-25 text-end pe-3'],
            shopTitle: ["w-25 text-center pb-4"],
            sliderStatus: true
        }
    },
    mounted: function(){
        
        axios.get('https://hplussport.com/api/products/order/price')
        .then((res)=>{
            this.products = res.data;
        })
    },

    methods: {                              // computes something based on event received in front end
        addItems: function (product){
            this.cart.push(product);
        },

        now: function (){
            let date = new Date()
            return date.getHours()
            
        },
        tonggleSwitch: function(){
            this.style.sliderStatus = !this.style.sliderStatus
            return this.style.sliderStatus
        }
    },

    computed: {                             // computes property
        // slugetize : function(){
        //     return (this.slugtext.toLowerCase().replace(/[^A-Za-z 0-9]+/, "") + " "+ this.now())
        // },

        sliderState: function(){
            return this.style.sliderStatus ? 'd-flex': 'd-none'
        }
    },


});

// Untuk Binding
// v-model, v-html, v-once, v-bind="{class: <class_name>, src=<link_product>}"
// note: v-bind adalah cara untuk binding yang multifungsi, bisa dilakukan dengan object JS


// untuk methods
// v-on:click="<method_name>" -> untuk button

// untuk logic, pada container yang applicable:
// v-if:"<condition>" or v-for="<condition>"


