import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import '../index.css'


export const ContactForm = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vuhf9h8', 'template_hch7o5o', e.target, 'miCVXroIcLDMQFyvZ')
            .then((result) => {
                Swal.fire({
                    title: 'Message sent!',
                    text: 'Thank you for your message',
                    icon: 'success',
                    allowOutsideClick: false,
                    confirmButtonColor: '#006400'

                })
            }, (error) => {
                Swal.fire({
                    title: 'Oopss...',
                    text: 'Something went wrong',
                    icon: 'error',
                    cancelButtonColor: '#8b0000'
                })
            });
        e.target.reset()
    };

    return (
        <div className='container'>
            <form
                onSubmit={sendEmail}
            >
                <div className='="row pt-5 mx-auto'>
                    <div className='col-10 form-group mx-auto'>
                        <input type="text" className='form-control' placeholder='Name' name='name' />
                    </div>
                    <div className='col-10 form-group pt-2 mx-auto'>
                        <input type="email" className='form-control' placeholder='Email Address' name='email' />
                    </div>
                    <div className='col-10 form-group pt-2 mx-auto'>
                        <input type="text" className='form-control' placeholder='Subject' name='subject' />
                    </div>
                    <div className='col-10 form-group pt-2 mx-auto'>
                        <textarea type="text" className='form-control' id='' cols='30' rows="8" placeholder='Your Message' name='message' />
                    </div>
                    <div className='col-10 pt-3 mx-auto mb-4' >
                        <input type="submit" className='btn btn-success' placeholder='Send Message' />
                    </div>
                </div>
            </form>
        </div>
    );
};
