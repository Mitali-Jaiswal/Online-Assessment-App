import React from 'react';
import './Footer2.css'

export default function Footer2({title,p1,p2,p3,p4}) {
    return (
        <div className="footer2">
            <h6>{title}</h6>
            <p className="footer-para">{p1}</p>
            <p className="footer-para">{p2}</p>
            <p className="footer-para">{p3}</p>
            <p className="footer-para">{p4}</p>
        </div>
    )
}
