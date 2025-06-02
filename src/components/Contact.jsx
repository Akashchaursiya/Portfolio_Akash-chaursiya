import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_97esvmc', 'template_j9m9fv2', formData, 'CPITvH5AdfwKYg6C9')
            .then((response) => {
                alert(`Thank you for reaching out, ${formData.name}!`);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (error) => {
                alert('There was an error sending your message. Please try again.');
                console.error('EmailJS Error:', error);
            });
    };
    

    // public key - CPITvH5AdfwKYg6C9

    return (
        <div className="max-w-lg mx-auto p-8 my-10 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl text-black font-bold text-center mb-6">Contact Me</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:<span className=' text-red-500'>*</span></label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:<span className=' text-red-500'>*</span></label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block text-black  w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:<span className=' text-red-500'>*</span></label>
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block text-black w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-orange-700 text-white rounded-md hover:bg-orange-600">
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;
