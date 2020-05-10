import React, {Component} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5">
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button
                            className="cart-btn"
                            disabled={!!inCart}
                            onClick={() => console.log("Hello")}
                        >
                            {inCart ? (
                                <p className="text-capitalize mb-0">in cart</p>
                            ) :
                            <FontAwesomeIcon icon={faCartPlus}/>}
                        </button>
                    </div>
                    {/*Card Footer*/}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>{price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

const ProductWrapper = styled.div`
    
`;