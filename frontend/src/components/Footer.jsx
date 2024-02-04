import React from 'react';
import 'tailwindcss/tailwind.css';

const Footer = () => {
    return (
        <footer className="flex justify-around py-5 bg-gray-400">
            <div>
                <h3 className="text-4xl font-bold pb-5">Contact Us</h3>
                <p className="text-xl text-gray-600 pb-5">Send us a message</p>
                <form className="space-y-2">
                    <input type="text" placeholder="Full name" className="w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500" /><br />
                    <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500" /><br />
                    <textarea placeholder="Your Message" className="w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea><br />
                    <button type="submit" className="bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700">Submit</button>
                </form>
            </div>

            <div>
                <h1 className="text-4xl font-bold pb-5">Sitemap</h1>
                <p className="text-xl text-gray-600 pb-5">All our pages</p>
                <ul className="list-disc list-inside">
                    {['Home', 'About Us', 'Dashboard', 'Projects', 'Contact Us'].map(page => (
                        <li key={page} className="text-gray-800">{page}</li>
                    ))}
                </ul> 
            </div>
            
            <div className="text-center pt-20">
              <div className="text-4xl font-extrabold text-indigo-600">Logo</div>
              <p className="text-gray-800">Phone Number: (91) 50 2000</p>
              <p className="text-gray-800">Email Address: email@address.com</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-gray-600"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-gray-600"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-gray-600"><i className="fab fa-linkedin-in"></i></a>
              </div>
           </div>

        </footer >
    );
}

export default Footer;
