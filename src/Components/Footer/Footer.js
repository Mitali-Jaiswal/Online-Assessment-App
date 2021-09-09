import './Footer.css';

import React from 'react'
import Footer2 from './Footer2';

export default function Footer() {
    return (
        <div className="footer">
            <div className="f-1">
                    
                <div className="f1-ele">
                    <p className="ishop">TestME</p>
                    <p className="desc">Lorem Ipsum is simply dummy text of the printing and <br></br>typesetting industry. Lorem Ipsum has been<br></br> the industry's standard dummy text ever.Since the<br></br> 1500s, when an unknown printer.</p>
                </div>

                <div className="f1-ele">
                    <p className="follow">Follow Us</p>
                    <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                </div>

                <div className="f1-ele">
                    <p className="follow">Contact Us</p>
                    <p className="desc">iShop: address @building 124<br/> Call us now: 0123-456-789 <br/> Email: support@whatever.com</p>
                </div>

               

            </div>
           

            <div className="f-2">
                
            <Footer2 title="Information" p1="About Us" p2="Information" p3="Private Policy" p4="Terms and Conditions" />
            <Footer2 title="Service" p1="About Us" p2="Information" p3="Private Policy" p4="Terms and Conditions" />
            <Footer2 title="Extra" p1="About Us" p2="Information" p3="Private Policy" p4="Terms and Conditions" />
            <Footer2 title="My Account" p1="About Us" p2="Information" p3="Private Policy" p4="Terms and Conditions" />
            <Footer2 title="Useful Links" p1="About Us" p2="Information" p3="Private Policy" p4="Terms and Conditions" />
            <Footer2 title="Other Offers" p1="About Us" p2="Information" p3="Private Policy" p4="Terms and Conditions" />

            </div>

        </div>
    )
}
