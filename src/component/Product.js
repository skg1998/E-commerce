import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import {ProductConsumer } from './context';
import propTypes from 'prop-types';
export default class Product extends Component{
   render(){
       const {id,title,img,price,inCart} = this.props.product;
       return(
           <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
               <ProductConsumer>
                   {(value)=>(
                        <div className ="card img-container p-5" onClick={()=>{value.handlerDetail(id)}}>
                            <Link to="/productdetails">
                                <img src={img} alt="product" className="card-img-top img-height" />
                            </Link>
                            <button className="cart-btn" onClick={()=>{value.addToCart(id); value.openModal(id); }} disabled={inCart?true:false}>
                                {inCart ? (
                                    <p className="text-capitalize mb-0" disabled>{" "} in Cart </p>
                                ):(
                                    <i className="fas fa-cart-plus"></i>
                                )}
                            </button> 
                        </div>
                   )}
               </ProductConsumer>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">{title} </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                </div>
           </div>
       )
   }
}

Product.propTypes={
    product:propTypes.shape({
        id:propTypes.number,
        title:propTypes.string,
        img:propTypes.string,
        price:propTypes.number,
        inCart:propTypes.bool,
    }).isRequired
}