import './index.scss'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
   const Form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    
      emailjs.sendForm('service_qe7lj2y', 'template_fl5ueov', Form.current, 'vAXTFl3GXos6Hs6uI')
      .then(
        (result) => {
          alert('Message successfully sent! Thank you for your interest in contacting me!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }


  
 return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
      <h1>
        Contact Me
      </h1>
          <p>
            I am interested in freelance oppurtunities and/or a career with a company that could use me as a valuable asset. If you have any inquiries or questions please contact me using the form below
          </p>
        <div className="contact-form">
          
            <form  ref={Form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        </div>
      
    </>
  )
}

export default Contact