import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import '../index.css'


export const ContactForm = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tqq2iw2', 'template_l0cnn0y', e.target, 'user_7hiY7EgOGmmB04VGtCfcX')
            .then((result) => {
                Swal.fire({
                    title: 'Email Sent!',
                    text: 'Your email was sent',
                    icon: 'success',
                    allowOutsideClick: false,
                    allowEscapeKey: true,
                    confirmButtonColor: 'green'
                })
            }, (error) => {
                    Swal.fire({
                        title: 'Oopss!',
                        text: 'Something went wrong..',
                        icon: 'error',
                        allowOutsideClick: false,
                        allowEscapeKey: true,
                        cancelButtonColor: 'red'
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
