import emailjs from "emailjs-com";
import React from "react";

export default function Video() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_logo", "logo", e.target, "user_5bDEXDZfZdPTj9D4CSF7V")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="pt-5">
      <div>
        <div className="head-report">
          <div className="title-report">
            <div className="text-center bg-light p-3">
              <h1>Video Design</h1>
              <p>Anda dapat pesan logo sesuai ke inginan anda</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 pb-5 ">
            <div className="col-9 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
                autofocus
              />
            </div>
            <div className="col-9 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                required
              />
            </div>
            <div className="col-9 form-group pt-2 mx-auto">
              <input
                type="nummber"
                className="form-control"
                placeholder="Whatsapp / Telp"
                name="nummber"
                required
              />
            </div>
            <div className="col-9 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>
            <div className="col-9 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
                required
              ></textarea>
            </div>
            <div className="col-9 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-outline-primary"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
