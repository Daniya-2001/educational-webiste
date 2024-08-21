import React from 'react';
import './Support.css';

const Support = () => {
    return (
        <div className="support-container">
            <h2>Support Us</h2>
            <p>Your support helps us to continue creating great content and improving our services. Here are a few ways you can help:</p>
            
            <div className="support-options">
                <div className="support-option">
                    <h3>Donate</h3>
                    <p>If you enjoy our content, consider making a donation to support our work.</p>
                    <button className="register-button">Donate Now</button>
                </div>
                <div className="support-option">
                    <h3>Share</h3>
                    <p>Help us reach more people by sharing our content on social media.</p>
                    <button className="register-button">Share Now</button>
                </div>
                <div className="support-option">
                    <h3>Subscribe</h3>
                    <p>Stay updated with our latest news and updates by subscribing to our newsletter.</p>
                    <button className="register-button">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Support;
