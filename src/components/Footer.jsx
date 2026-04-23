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
    <footer className="bg-navy-950 px-6 tablet:px-14 desktop:px-20 pt-65 tablet:pt-62 desktop:pt-43 pb-12 tablet:pb-16 desktop:pb-14">
      <img src={logoImg} alt="Fylo logo" className="h-7.75 mb-10 tablet:mb-14 desktop:mb-12" />

      <div className="tablet:grid tablet:grid-cols-[380px_172px] tablet:gap-14 tablet:justify-between tablet:justify-items-start desktop:flex desktop:gap-20">
        <div className="grid grid-cols-[24px_1fr] gap-4 mb-4 tablet:mb-0">
          <img src={locationIcon} alt="Location icon" />
          <p className="text-[16px] leading-base desktop:max-w-84.75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>

        <div className="flex flex-col gap-4 tablet:gap-6 mb-14 tablet:mb-0">
          <div className="grid grid-cols-[24px_1fr] gap-4">
            <img src={phoneIcon} alt="Phone icon" />
            <p>+1-543-123-4567</p>
          </div>

          <div className="grid grid-cols-[24px_1fr] gap-4 items-center">
            <img src={emailIcon} alt="Email icon" />
            <p>example@fylo.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-[16px] leading-base mb-12 tablet:mb-0 tablet:grid tablet:grid-cols-[70px_82px_54px] tablet:grid-rows-3 tablet:gap-x-20 desktop:grid-cols-[69px_81px] desktop:grid-rows-4">
          <a href="#" className="tablet:col-start-1 tablet:row-start-1 desktop:col-start-1 desktop:row-start-1">About Us</a>
          <a href="#" className="tablet:col-start-1 tablet:row-start-2 desktop:col-start-1 desktop:row-start-2">Jobs</a>
          <a href="#" className="tablet:col-start-1 tablet:row-start-3 desktop:col-start-1 desktop:row-start-3">Press</a>

          <a href="#" className="mb-6 tablet:mb-0 tablet:col-start-2 tablet:row-start-1 desktop:col-start-1 desktop:row-start-4">Blog</a>
          <a href="#" className="tablet:col-start-2 tablet:row-start-2 desktop:col-start-2 desktop:row-start-1">Contact Us</a>

          <a href="#" className="tablet:col-start-3 tablet:row-start-1 desktop:col-start-2 desktop:row-start-2">Terms</a>
          <a href="#" className="tablet:col-start-3 tablet:row-start-2 desktop:col-start-2 desktop:row-start-3">Privacy</a>
        </div>

        <div className="flex justify-center gap-2.5 tablet:gap-4">
          <SocialMediaIcon icon={faFacebookF} />
          <SocialMediaIcon icon={faTwitter} />
          <SocialMediaIcon icon={faInstagram} />
        </div>
      </div>
    </footer>
  )
}

export default Footer;