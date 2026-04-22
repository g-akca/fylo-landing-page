import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import logoImg from "/images/logo.svg";
import locationIcon from "/images/icon-location.svg";
import phoneIcon from "/images/icon-phone.svg";
import emailIcon from "/images/icon-email.svg";
import SocialMediaIcon from "./SocialMediaIcon";

function Footer() {
  return (
    <footer className="bg-navy-950 px-6 tablet:px-14 pt-65 tablet:pt-62 pb-12 tablet:pb-16">
      <img src={logoImg} alt="Fylo logo" className="h-7.75 mb-10 tablet:mb-14" />

      <div className="tablet:grid tablet:grid-cols-[380px_172px] tablet:gap-14 tablet:justify-between tablet:justify-items-start">
        <div className="grid grid-cols-[24px_1fr] gap-4 mb-4">
          <img src={locationIcon} alt="Location icon" />
          <p className="text-[16px] leading-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>

        <div className="flex flex-col gap-4 mb-14">
          <div className="grid grid-cols-[24px_1fr] gap-4">
            <img src={phoneIcon} alt="Phone icon" />
            <p>+1-543-123-4567</p>
          </div>

          <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
            <img src={emailIcon} alt="Email icon" />
            <p>example@fylo.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 text-[16px] leading-base mb-12">
          <ul className="flex flex-col gap-4">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>

          <ul className="flex flex-col gap-4">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>

        <div className="flex justify-center gap-2.5">
          <SocialMediaIcon icon={faFacebookF} />
          <SocialMediaIcon icon={faTwitter} />
          <SocialMediaIcon icon={faInstagram} />
        </div>
      </div>
    </footer>
  )
}

export default Footer;