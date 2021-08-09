import React from "react";
import Google from "../imgs/google.svg";
import Insta from "../imgs/Insta.svg";

function Footer() {
  return (
    <div className="container border shadow p-3 bg-light rounded" id="CONTACT">
      <h5 className=" m-3 text-primary text-center"> Contact me -</h5>
      <footer className="text-center text-white">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating m-2"
              href="https://www.linkedin.com/in/devansh-tomar-506728154/"
              target="_blank"
              rel="noreferrer"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin fa-3x"></i>
            </a>

            <a
              className="btn btn-link btn-floating text-dark m-2"
              href="https://github.com/dktomar9456"
              target="_blank"
              rel="noreferrer"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github fa-3x"></i>
            </a>

            <a
              className="btn btn-link btn-floating m-2"
              href="mailto:devansh.19je0284@fme.iitism.ac.in"
              target="_blank"
              rel="noreferrer"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <img src={Google} style={{ width: 58 + "px" }} alt="logo1" />
            </a>
            <a
              className="btn btn-link btn-floating m-2 "
              href="https://www.facebook.com/devansh.tomar.908/"
              target="_blank"
              rel="noreferrer"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook fa-3x"></i>
            </a>

            <a
              className="btn btn-link btn-floating m-2"
              href="https://twitter.com/Devansh03108229"
              target="_blank"
              rel="noreferrer"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter fa-3x"></i>
            </a>

            <a
              className="btn btn-link btn-floating m-2"
              href="https://www.instagram.com/devansh8031/?hl=en"
              target="_blank"
              rel="noreferrer"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <img src={Insta} style={{ width: 50 + "px" }} alt="logo" />
            </a>
          </section>
        </div>
      </footer>
      <div
        className="text-center text-dark p-3 sticky-bottom"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        Developed by :
        <span className="text-primary fw-bold">{"  "} Devansh Tomar </span>
      </div>
    </div>
  );
}
export default Footer;
