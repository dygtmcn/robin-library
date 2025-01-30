import "../styles/Footer.css";
import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Discover a world of books and join a community of readers. Track your readings or take on fun challenges with us!</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    
                </div>
                <div className="footer-section newsletter">
                    <h4>Subscribe to Our Newsletter</h4>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Little Robin Library. All rights reserved.</p>
        
            </div>
        </footer>
    );
}