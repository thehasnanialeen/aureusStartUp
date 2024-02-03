import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Aureus Database</h2>
                    <p>A database designed to expand the current understanding of antibiotic resistant bacterial infections by tracking how outcomes correlate with prescriptions.</p>
                </div>
                <div className="footer-section contact">
                    <h2>Contact</h2>
                    <p><strong>Email:</strong> AureusDatabase@gmail.com</p>
                    <p><strong>Phone:</strong> +1 234 567 8901</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Aureus Database | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
