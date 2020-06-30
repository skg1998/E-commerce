import React from 'react';

const EmptyCart = () =>{
       return(
           <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1>Your Cart is Currently Empty</h1>
                    </div>
                </div>
            </div>
       )
}

export default EmptyCart;