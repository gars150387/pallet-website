import React from 'react';
import emailjs from '@emailjs/browser';


export const ContactForm = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6pkt6sa', 'template_1m1i12l', e.target, 'PKcM49LlGR3xnScBR1Eid')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                throw (error)
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
