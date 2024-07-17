
var myApp={
    data:function(){
        return{


            products:  products,

            iscartvispled:false,

            cart:[],
            showCart:false,
             
        }
    },

    methods:{
        shCart()
        {
        this.showCart=false;
         
        },
    
    AddtoCart(products){

        // add product cart
    

        var cheak=this.cart.some(function(item){

            return  item.products.id == products.id;

       
        }) 
   
        if(!cheak){

            this.cart.push({

                products: products,
                quantity:1 
    
    
            })
            
        }
        else{

        var newcart=this.cart.find(function(item){

          return  item.products.id == products.id;

            })
            newcart.quantity ++;

        }

        // console.log(cheak);
        
        products.stock --;
        

   
},
        
        deletecart(item){

            var del= this.cart.findIndex(function( searchItem){

                return searchItem.products.id == item.products.id;

            })

        
            this.cart.splice(del ,1);

        }

    }
  


}
Vue.createApp(myApp).mount("#app");


 
