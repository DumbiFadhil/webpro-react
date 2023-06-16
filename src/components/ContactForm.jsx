import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('ServiceID', 'TemplateID', form.current, 'PublicKey')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className='bg-slate-300 h-screen'>
      <div className="flex flex-col items-center justify-between">
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold">CONTACT US</h2>
          <div className="rounded-full mx-auto bg-slate-700 h-1 w-20 mt-1 mb-4"></div>
          <div className="mt-3 pb-3">
            Feel free to Contact Us by submitting the form below and we will get back to you as soon as possible
          </div>
          <form ref={form} className="needs-validation" onSubmit={sendEmail}>
            <div className="mb-3 flex items-center">
              <label htmlFor="inputName3" className="w-24">Name</label>
              <div className="flex-1">
                <input
                  type="text"
                  className="form-control w-full"
                  id="inputName3"
                  name="user_name"
                  required
                />
              </div>
            </div>
            <div className="mb-3 flex items-center">
              <label htmlFor="inputEmail3" className="w-24">Email</label>
              <div className="flex-1">
                <input
                  type="email"
                  className="form-control w-full"
                  id="inputEmail3"
                  name="user_email"
                  required
                />
              </div>
            </div>
            <div className="mb-3 flex items-center">
              <label htmlFor="message" className="w-24">Message</label>
              <div className="flex-1">
                <textarea
                  name="message"
                  id="message"
                  className="form-control w-full"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <button type="submit" className='rounded-lg hover:text-white font-medium bg-slate-700 text-slate-300 w-20 h-10'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
