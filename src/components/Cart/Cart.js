import React, {Component} from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../context";

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length){
                            return(
                                <React.Fragment>
                                    <Title name="your" title="cart"/>
                                    <CartColumns/>
                                </React.Fragment>
                            )
                        }
                        return (
                            <EmptyCart/>
                        )
                    }}
                </ProductConsumer>
            </section>
        );
    }
}