import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import SocialMediaIcon from "./SocialMediaIcon";

function Footer() {
  return (
    <footer className="bg-navy-950 px-6 py-12 flex flex-col gap-12">
      <div className="flex flex-col gap-14">
        <div>

        </div>

        <div>
          
        </div>
      </div>

      <div className="flex justify-center gap-2.5">
        <SocialMediaIcon icon={faFacebookF} />
        <SocialMediaIcon icon={faTwitter} />
        <SocialMediaIcon icon={faInstagram} />
      </div>
    </footer>
  )
}

export default Footer;