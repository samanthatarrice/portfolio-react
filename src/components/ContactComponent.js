import React, { useRef, useState } from 'react';
import emailjs, { init } from "@emailjs/browser";
import { Modal, Button } from 'react-bootstrap'

function Contact() {

  init("CrN6FvUqChFO_VUIX");
  const form = useRef();

  const [showContactModal, setShowContactModal] = useState(false);

  const handleCloseContactModal = () => setShowContactModal(false);

  const handleContactFormSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_hj2mewb", "template_p37x3o2", form.current, "CrN6FvUqChFO_VUIX").then(
      (result) => {
        setShowContactModal(true);
        console.log(result.text);
        e.target.reset()
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
  <React.Fragment>
    <section id="contact" className="pb-5">
      <h2 className="text-center my-4">Contact</h2>
      <div className="container">
        <div className="row d-flex align-items-center my-5">
          <div className="col-12 col-md-6 text-center">
            <img src="images/contact.png" alt="Clipart of various contact method symbols" className="w-75 mb-md-0 mb-5" />
          </div>
          <div className="col-10 col-md-5 mx-auto form-row">
            <form onSubmit={handleContactFormSubmit} ref={form} className="mx-auto">
              <div className="mb-3 form-group">
                <label htmlFor="contactName" className="form-label">Name:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="contactName"
                  name="contactName"
              />
              </div>
              <div className="mb-3 form-group">
                <label htmlFor="contactEmail" className="form-label">Email:</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="contactEmail" 
                  name="contactEmail"
              />
              </div>
              <div className="mb-3 form-gorup">
                <label htmlFor="contactMessage" className="form-label">Message:</label>
                <textarea 
                  id="contactMessage" 
                  className="form-control" 
                  rows="10"
                  name="contactMessage"
                />
              </div>
              <button className="btn contact-btn d-block m-auto mt-4" type="submit">Contact Me!</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Modal show={showContactModal} onHide={handleCloseContactModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thanks for contacing me!</Modal.Title>
        </Modal.Header>
        <Modal.Body>I look forward to recieving your message. You can expect a message back from me soon.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseContactModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </React.Fragment>
  );
}

export default Contact;

//Form Setup from: https://dev.to/abdulwaqar844/how-to-send-emails-from-a-react-application-without-a-backendserver-29j8