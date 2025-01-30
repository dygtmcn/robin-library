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
                    <a href="#">Home</a>
                    <a href="#">Track Your Readings</a>
                    <a href="#">Challenges</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">Facebook</a>
                </div>
                <div className="footer-section newsletter">
                    <h4>Subscribe to Our Newsletter</h4>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Little Robin Library. All rights reserved.</p>
                <a href="#" style={{ color: "#F7F7F0", textDecoration: "none" }}>Privacy Policy</a> |
                <a href="#" style={{ color: "#F7F7F0", textDecoration: "none" }}>Terms & Conditions</a>
            </div>
        </footer>
    );
}