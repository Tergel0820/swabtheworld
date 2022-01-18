import React from "react";
import { Animation, CircleButton } from "..";
import "../../styles/footer.scss";
import "../../styles/container6.scss";
import "../../styles/global.scss";

const Footer = () => {
  return (
    <div className="footer bg-primary w-100">
      <div className="w-100 pt-5 d-flex">
        <div className="footer-empty-div"></div>
        <div className="w-75">
          <div className="d-flex justify-content-between">
            <div className="footer-links">PATIENTS & SURVIVORS</div>
            <div className="footer-login-con d-flex">
              <div className="footer-login">LOG IN</div>
              <div className="footer-or">OR</div>
              <div className="footer-login">CREATE A PROFILE</div>
              <div className="footer-fr">FR</div>
            </div>
          </div>
          <div className="footer-links">DONOR STORIES</div>
          <div className="footer-links">ABOUT US</div>
          <div className="footer-links">BLOG</div>
          <div className="footer-links">CONFERENCES</div>
          <div className="d-flex justify-content-between">
            <div className="footer-links">2020 ANNUAL REPORT</div>
            <div className="footer-links-1-con d-flex justify-content-between footer-faq-con">
              <div className="footer-links footer-links-1">FAQ</div>
              <div className="footer-links footer-links-1">Media</div>
              <div className="footer-links footer-links-1">Sponsors</div>
              <div className="footer-links footer-links-1">Contact us</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-animation">
        <Animation
          title="CURE SOMEONE. YOU'VE GOT IT IN YOU."
          color="#5fecc8"
          speed="5"
        />
      </div>
      <div className="subscribetoour-con">
        <div className="sotinyyet">DON'T MISS A THING</div>
        <div className="findouthow subscribetoour">
          SUBSCRIBE TO OUR QUARTERLY NEWSLETTER
        </div>
        <input
          className="subscribetoour-input"
          type="text"
          placeholder="Your email"
        />
      </div>
      <div className="d-flex center w-100 pt-5 pb-5">
        <div className="long-button-con d-flex">
          <div className="long-button w-50 d-flex justify-content-center">
            <div className="long-button-background bg-secondary"></div>
            <div className="long-button-title">SUPPORT OUR MISSION</div>
          </div>
          <div className="long-button w-50 d-flex justify-content-center">
            <div className="long-button-background bg-secondary"></div>
            <div className="long-button-title">BECOME A DONOR</div>
          </div>
        </div>
      </div>
      <div className="d-flex center w-100 pt-5">
        <div className="circle-button-con d-flex justify-content-between pb-5">
          <CircleButton icon="https://swabtheworld.com/assets/images/sprite.svg#icon-twitter" />
          <CircleButton icon="https://swabtheworld.com/assets/images/sprite.svg#icon-facebook" />
          <CircleButton icon="https://swabtheworld.com/assets/images/sprite.svg#icon-instagram" />
          <CircleButton icon="https://swabtheworld.com/assets/images/sprite.svg#icon-youtube" />
        </div>
      </div>
      <div className="w-100 center pt-5 pb-5">
        <div className="footer-footer d-flex justify-content-between">
          <div>
            <div className="footer-footer-title d-flex justify-content-between">
              <div>© 2019 SWAB THE WORLD FOUNDATION. ALL RIGHTS RESERVED.</div>
              <div className="footer-underline">TERMS OF USE</div>
              <div className="footer-underline">PRIVACY POLICY</div>
            </div>
            <div>
              REGISTRATION NUMBER, CANADA REVENUE AGENCY: 73966 4084 RR0001
            </div>
          </div>
          <div>
            <div className="footer-underline">
              DESIGN & FRONT-END DEVELOPMENT BY LOCOMOTIVE
            </div>
            <div className="d-flex">
              <div>AND</div>
              <div className="footer-underline mx-1">
                BACK-END DEVELOPMENT BY KFFEIN
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };