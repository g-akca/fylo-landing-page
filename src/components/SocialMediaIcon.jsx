import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialMediaIcon({ icon }) {
  return (
    <a href="#" className="h-6.75 tablet:h-7.5 aspect-square border-navy-50 hover:border-blue-300 border rounded-full flex justify-center items-center transition-all cursor-pointer">
      <FontAwesomeIcon icon={icon} className="text-[12px] hover:text-blue-300" />
    </a>
  )
}

export default SocialMediaIcon;