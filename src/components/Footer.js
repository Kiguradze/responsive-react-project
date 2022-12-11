import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li className="insta-logo">
          <a href="https:/www.instagram.com">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li className="facebook-logo">
          <a href="https:/www.facebook.com">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="twitter-logo">
          <a href="https:/www.twitter.com">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="github-logo">
          <a href="https:/www.github.com">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
