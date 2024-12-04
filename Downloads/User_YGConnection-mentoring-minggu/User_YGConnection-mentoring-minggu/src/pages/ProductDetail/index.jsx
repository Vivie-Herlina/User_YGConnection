
import React from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import "../../style/ProductDetail.css"; 

const ProductDetail = () => {
    const decreaseQuantity = () => {
        const quantityInput = document.getElementById("quantityInput");
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    };

    const increaseQuantity = () => {
        const quantityInput = document.getElementById("quantityInput");
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    };

    const addToCart = () => {
        alert("Item added to cart!");
    };

    return (
        <>
            <NavbarWithAuth/> {/* Add Navbar here */}

            
            <Dropdown /> {/* Add Dropdown here */}

            <div className="product-container">
                <div className="product-image">
                    <img src="/images/img/member_bp.png" alt="BLINK Membership Card" />
                </div>
                <main>
                    <div className="product-details">
                        <h4>Blackpink</h4>
                        <h3>BLACKPINK GLOBAL OFFICIAL FANCLUB BLINK<br/>MEMBERSHIP</h3>
                        <p className="price">Rp350.000</p>
                        <p className="status">For Pre-Order</p>
                        <p className="shipping-date">Scheduled Shipping Start Date Nov 21 2024 - Nov 28 2024</p>

                        <div className="points">
                            <span>350 points</span>
                            <div className="quantity">
                                <button onClick={decreaseQuantity}>-</button>
                                <input type="text" id="quantityInput" value="1" readOnly />
                                <button onClick={increaseQuantity}>+</button>
                            </div>
                        </div>

                        <p className="total" id="total">Total (1 Item) Rp350.000</p>
                        <div className="buttons">
                            <button className="add-to-cart" onClick={addToCart}>Add To Cart</button>
                            <button className="buy-now">Buy Now</button>
                        </div>
                    </div>
                </main>
            </div>

            <section className="information">
                <h3>Information</h3>
                <table>
                    <tr><td>Product Name</td><td>BLINK MEMBERSHIP</td></tr>
                    <tr><td>Producer or supplier</td><td>YG ENTERTAINMENT Inc.</td></tr>
                    <tr><td>Terms and recommended usage period</td><td>You must use the identical account for YGConnect and YGConnect Shop to receive Membership benefits.</td></tr>
                    <tr><td>Product delivery method</td><td>Membership</td></tr>
                    <tr><td>Minimum system requirements or required software</td><td>Not Applicable</td></tr>
                    <tr><td>Effects of subscription withdrawal, or contract cancellation or termination</td><td>If you cancel/refund the payment for your Membership, you will no longer be able to take advantage of Membership benefits.</td></tr>
                    <tr><td>Telephone number for consumer consultation</td><td>Customer Center: (+62)21-3452-1312</td></tr>
                </table>
            </section>

            <Footer /> {/* Add Footer here */}
        </>
    );
};

export default ProductDetail;