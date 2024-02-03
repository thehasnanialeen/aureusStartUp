import React, { useState } from 'react';
import './QuotePage.css';

function QuotePage() {
    const [formData, setFormData] = useState({
        organization: '',
        name: '',
        email: '',
        phoneNumber: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, for example, sending data to a server
        console.log(formData);
    };

    return (
        <div className = "container">
            <div className = "salesPitch">
                <div>
                <h1>Unlock the Future of Healthcare</h1>
            <p></p>
            <p>Bridge the Gap with Our Cutting-Edge Database Subscriptions. Discover the Missing Link between Laboratory Efficacy and Real-World Antibiotic Performance. Empower Your Research and Decision-Making with Unparalleled Insights.</p>
           
                </div>
             </div>
            
            <form className="quote-form" onSubmit={handleSubmit}>
                <h2>Get a free quote</h2>
                <p>We are happy to help you. Please fill out the form below and one of our experts will contact you shortly.</p>
                <div>
                    <label>Organization:</label>
                    <input type="text" name="organization" value={formData.organization} onChange={handleChange} />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </div>
                <div>
                    <label>Additional Information:</label>
                    <input type="text" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange}/>
                </div>
                <div className = "button-container">
                <button type="submit">Get in touch</button>
                </div>
                
            </form>
        </div>
    );
}

export default QuotePage;
