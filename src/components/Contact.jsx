import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Contact = () => {
    const navigate = useNavigate();
    const form = useRef();

    const [formData, setFormData] = useState({
      from_name: '',
      from_email: '',
      message: ''
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.from_email || !formData.message) {
          swal('Error', 'Please fill in all fields.', 'error');
          return;
        }

        emailjs.sendForm(
          'service_5kw7756', 
          'template_75b0b1n', 
          form.current, 
          '-_IFkWgoWlYfwcVla'
        ).then(
          () => {
            swal('SUCCESS!', "I'll get back to you ASAP :)");
          },
          (error) => {
            swal('FAILED TO SEND', "Please try again later :(");
          },
        );
    };

    return (
      <div className="lg:px-40 lg:py-12 sm:px-10">

        <div className='flex flex-row justify-between pb-2'>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h1>
          <button 
            onClick={() => navigate(-1)} // Navigate back
            className="mb-4 px-4 py-2 border-gray-300 text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            Back
          </button>
        </div>

        <div className='Gcard grid grid-cols-1 lg:grid-cols-2 gap-4 py-10'>
          <form 
            className='ctForm flex flex-col w-full col-span-1 lg:col-span-2 rounded-lg p-6 shadow-lg bg-white' 
            ref={form}  
            onSubmit={sendEmail}
          >

            <h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
              Get in Touch
            </h2>
            <p className='text-lg text-gray-600 mb-6 text-center'>
              Feel free to reach out by filling out the form below
            </p>

            <input 
              className='py-2 mb-3 txt bg-gray-200 rounded-lg px-3' 
              type='text' 
              name='from_name' 
              value={formData.from_name} 
              onChange={handleChange} 
              placeholder='Your Name'
            />
            <input 
              className='py-2 mb-3 email bg-gray-200 rounded-lg px-3' 
              type='email'  
              name='from_email' 
              value={formData.from_email} 
              onChange={handleChange} 
              placeholder='Your Email'
            />
            <textarea 
              className='py-2 mb-3 msg bg-gray-200 rounded-lg px-3' 
              name='message' 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder='Your Message'
            />
            
            <button 
              className='py-2 bg-violet-100 text-gray-700 rounded-lg px-3 hover:bg-red-200' 
              type='submit' 
              value="Send"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    )
}

export default Contact;