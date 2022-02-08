import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact" class="pb-5">
          <h2 class="text-center my-4">Contact</h2>
          <div class="container">
            <div class="row d-flex align-items-center my-5">
              <div class="col-12 col-md-6 text-center">
                <img src="/images/contact.png" alt="Clipart of various contact method symbols" class="w-75 mb-md-0 mb-5" />
              </div>
              <div class="col-10 col-md-5 mx-auto">
                <form action="" class="mx-auto">
                  <div class="mb-3">
                    <label for="contactName" class="form-label">Name:</label>
                    <input type="text" class="form-control" id="contactName" />
                  </div>
                  <div class="mb-3">
                    <label for="contactEmail" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="contactEmail" />
                  </div>
                  <div class="mb-3">
                    <label for="contactMessage" class="form-label">Message:</label>
                    <textarea id="contactMessage" class="form-control" rows="10"></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;