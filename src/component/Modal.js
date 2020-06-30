import React, { Component } from 'react';
import {ProductConsumer} from './context'
import {Link} from "react-router-dom";
import styled from 'styled-components';

export default class Modal extends Component{
    render(){
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }else{
                        return (
                            <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="card col-8 mx-auto my-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h5 className="mb-2">Item added to the cart </h5>
                                        <img src={img} className="img-fluid" alt="product" />
                                        <h5>{title} </h5>
                                        <h5 className="text-muted">Price:$ {price} </h5>
                                        <Link to="/">
                                           <button type="button" className="btn btn-outline-secondary  mb-2" onClick={()=>closeModal()}>Store</button>
                                        </Link>
                                        <Link to="/cart">
                                           <button type="button" className="btn btn-outline-primary ml-2 mb-2" onClick={()=>{closeModal()}}>Go to Cart</button>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,0.3);
  display:flex;
  align-items:center;
  justify-content:center;
  #modal{
      background:white;
  }
`;