import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const ContactPage = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-8 mb-8 md:mb-0">
            <h1 className="text-3xl font-bold mb-4">Contact here!</h1>
            <div className="flex items-center mb-4">
              <Phone size={20} color="black" />
              <span className="ml-2">+0349903731</span>
            </div>
            <div className="flex items-center mb-4">
              <Mail size={20} color="black" />
              <span className="ml-2">nnthang@email.com</span>
            </div>
            <div className="flex items-center mb-4">
              <MapPin size={20} color="black" />
              <span className="ml-2">70_NguyenHue_TTHue</span>
            </div>
            <Separator />
            
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  placeholder="Enter your first and last name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  placeholder="Your feedback"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#11ba82] text-white font-medium rounded-lg px-4 py-2 hover:bg-[#3f9b7d] transition-colors duration-300"
              >
                Submit
              </button>
            </form>
           
          </div>
          <div className="md:w-1/2 h-full mt-24">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4312127674056!2d108.25095931535692!3d16.051098688886186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421839857e4df7%3A0x8a6a3ef93890a38a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1685109749986!5m2!1svi!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
