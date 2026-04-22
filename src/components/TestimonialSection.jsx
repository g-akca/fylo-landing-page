import profile1 from "/images/profile-1.jpg";
import profile2 from "/images/profile-2.jpg";
import profile3 from "/images/profile-3.jpg";
import quoteIcon from "/images/bg-quotes.png";
import TestimonialItem from "./TestimonialItem";

function TestimonialSection() {
  const testimonials = [
    {
      comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      avatarImg: profile1,
      name: "Satish Patel",
      position: "Founder & CEO, Huddle"
    },
    {
      comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      avatarImg: profile2,
      name: "Bruce McKenzie",
      position: "Founder & CEO, Huddle"
    },
    {
      comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      avatarImg: profile3,
      name: "Iva Boyd",
      position: "Founder & CEO, Huddle"
    }
  ];

  return (
    <div className="relative self-center pt-4.75 tablet:pt-12 flex flex-col gap-6 tablet:gap-10 max-w-100 tablet:max-w-165 tablet:px-22">
      <img src={quoteIcon} alt="Quote icon" className="absolute top-0 tablet:top-2.5 left-1 tablet:left-19.5 w-6 tablet:w-14 tablet:-z-10" />

      {testimonials.map(item => (
        <TestimonialItem
          key={item.name}
          comment={item.comment}
          avatarImg={item.avatarImg}
          name={item.name}
          position={item.position}
        />
      ))}
    </div>
  )
}

export default TestimonialSection;