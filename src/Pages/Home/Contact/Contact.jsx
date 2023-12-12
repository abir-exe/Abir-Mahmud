/* eslint-disable react/no-unescaped-entities */
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <div className="text-center mb-5">
        <h2 className="text-4xl font-semibold border-b-2 inline px-5 py-1">
          Contact Me
        </h2>
      </div>
      <div className="hero">
        <div className="hero-content flex items-center  lg:flex-row-reverse">
          <div className="w-1/2 text-center lg:text-left">
              {/* <div className="divider"></div> */}
            <h1 className="text-3xl font-bold">Get in touch</h1>
            <p className="py-6 text-justify font-semibold">
              Thank you for exploring my portfolio! If you have a project in
              mind, want to discuss collaboration opportunities, or simply have
              a question, I'd love to hear from you. Feel free to reach out via
              the contact form below, or connect with me through the following
              channels: <br />
              
            </p>
            <div>
            <Link
                to="https://www.linkedin.com/in/web-abirmahmud/"
                className="text-xl  hover:text-lg hover:text-black"
              >
                <div className="flex items-center gap-2">
                  <FaLinkedin></FaLinkedin> <p>Linkedin</p>
                </div>
              </Link>
              <Link
                to="https://www.facebook.com/abir.mahmudXD"
                className="text-xl  hover:text-lg hover:text-black"
              >
                <div className="flex items-center gap-2">
                  <FaFacebook></FaFacebook> <p>Facebook</p>
                </div>
              </Link>
              <Link
                to="https://www.twitter.com/abirmahmud_"
                className="text-xl  hover:text-lg hover:text-black"
              >
                <div className="flex items-center gap-2">
                  <FaTwitter></FaTwitter> <p>Twitter</p>
                </div>
              </Link>
              <Link
                to="https://github.com/abir-exe"
                className="text-xl  hover:text-lg hover:text-black"
              >
                <div className="flex items-center gap-2">
                  <FaGithub></FaGithub> <p>Github</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="card shrink-0 w-1/2">
            <form className="card-body">
          <h1 className="mt-5 text-2xl font-bold">Message Me</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Mail"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                name="subject"
                  type="text"
                  placeholder="subject"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input
                name="message"
                  type="text"
                  placeholder="Your Message"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline w-1/2 mx-auto">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
