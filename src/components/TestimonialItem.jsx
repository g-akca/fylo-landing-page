function TestimonialItem({ comment, avatarImg, name, position }) {
  return (
    <div className="bg-navy-800 p-6 flex flex-col gap-4 items-start">
      <p className="text-[10px] leading-[180%] tracking-[0.5px]">{comment}</p>

      <div className="flex items-center gap-2">
        <img src={avatarImg} alt={name} className="w-6 aspect-square rounded-full" />
        
        <div>
          <p className="font-bold text-[10px] leading-base tracking-[0.5px]">{name}</p>
          <p className="text-[7px] leading-base tracking-[0.5px]">{position}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialItem;