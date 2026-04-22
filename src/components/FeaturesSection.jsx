import FeatureItem from "./FeatureItem";

import accessIcon from "/images/icon-access-anywhere.svg";
import securityIcon from "/images/icon-security.svg";
import collaborationIcon from "/images/icon-collaboration.svg";
import anyFileIcon from "/images/icon-any-file.svg";

function FeaturesSection() {
  const features = [
    {
      img: accessIcon,
      title: "Access your files, anywhere",
      description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
    },
    {
      img: securityIcon,
      title: "Security you can trust",
      description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
    },
    {
      img: collaborationIcon,
      title: "Real-time collaboration",
      description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
    },
    {
      img: anyFileIcon,
      title: "Store any type of file",
      description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
  ];

  return (
    <div className="flex flex-col gap-20 tablet:grid tablet:grid-cols-2 tablet:gap-y-18">
      {features.map(item => (
        <FeatureItem
          key={item.title}
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default FeaturesSection;