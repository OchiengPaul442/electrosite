import React from "react";

// constants
import { Logo } from "../../constants";

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-12 mb-4">
            <img src={Logo} class="logo img-fluid" alt="" />
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-4">
            <h5 class="site-footer-title mb-3">Quick Links</h5>

            <ul class="footer-menu">
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link">
                  Our Story
                </a>
              </li>

              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link">
                  Newsroom
                </a>
              </li>

              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link">
                  Causes
                </a>
              </li>

              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link">
                  Become a volunteer
                </a>
              </li>

              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link">
                  Partner with us
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mx-auto">
            <h5 class="site-footer-title mb-3">Contact Infomation</h5>

            <p class="text-white d-flex mb-2">
              <i class="bi-telephone me-2"></i>

              <a href="tel: +256 778 290 000" class="site-footer-link">
                +256 778 290 000
              </a>
            </p>

            <p class="text-white d-flex">
              <i class="bi-envelope me-2"></i>

              <a href="mailto:info@yourgmail.com" class="site-footer-link">
                donate@electrocharity.com
              </a>
            </p>

            <p class="text-white d-flex mt-3">
              <i class="bi-geo-alt me-2"></i>
              ELECTRO 23rd STREET KAMPALA, UGANDA
            </p>

            <a href="#" class="custom-btn btn mt-3">
              Get Direction
            </a>
          </div>
        </div>
      </div>

      <div class="site-footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-7 col-12">
              <p class="copyright-text mb-0">
                Copyright © 2023 <a href="#">ELECTRO</a> Charity.{" "}
              </p>
            </div>

            <div class="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
              <ul class="social-icon">
                <li class="social-icon-item">
                  <a href="#" class="social-icon-link bi-twitter"></a>
                </li>

                <li class="social-icon-item">
                  <a href="#" class="social-icon-link bi-facebook"></a>
                </li>

                <li class="social-icon-item">
                  <a href="#" class="social-icon-link bi-instagram"></a>
                </li>

                <li class="social-icon-item">
                  <a href="#" class="social-icon-link bi-linkedin"></a>
                </li>

                <li class="social-icon-item">
                  <a
                    href="https://youtube.com/templatemo"
                    class="social-icon-link bi-youtube"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
