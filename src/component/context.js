import React, { Component } from 'react';
import {storeProducts , detailProduct} from '../data';

const ProductContext = React.createContext();

class ProductProvider extends Component{
    state={
        products:[],
        detailProduct:detailProduct,
        cart :[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    }

    componentDidMount(){
        this.setProducts();
    }

    setProducts=()=>{
        let tempProducts = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        })

        this.setState(()=>{
            return {products:tempProducts}
        })
    }

    getItem = (id)=>{
        const product = this.state.products.find(item => item.id ===id);
        return product
    }

    handleDetail = (id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return  {detailProduct:product}
        })
    }

    addToCart = (id)=>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price; 
        this.setState(()=>{
            return {products:tempProducts , cart:[...this.state.cart]}
        })
    }

    openModal = (id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product ,modalOpen:true}
        })
    }

    closeModal = (id)=>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }
   
   increment = (id) =>{
          console.log("increment the value of cart");
   }

   decrement = (id) =>{
         console.log("decrement the item of cart");
   }

   removeItem = (id)=>{
         console.log("remove item from cart");
   }

   clearCart = ()=>{
        console.log("clear item from cart");
   }

   addTotals = ()=>{
       let subTotal =0;
       this.state.cart.map(item=>{subTotal +=item.total});
       console.log("add total price");

   }

    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handlerDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider ,ProductConsumer}