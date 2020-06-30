import React ,{Component} from 'react';

const CartColumns = () =>{
       return(
           <div className="container-fluid text-center d-none d-lg-block">
               <div className="card">
                    <div className="row">
                        <div className="col-10 mx-auto col-lg-2">
                            <p>Products</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p>Name of Products</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p>Price</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p>Quantity</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p>Remove</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p>Total</p>
                        </div>
                    </div>
               </div>
           </div>
       )
}

export default CartColumns;