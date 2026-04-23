function TestimonialItem({ comment, avatarImg, name, position }) {
  return (
    <div className="bg-navy-800 rounded-sm p-6 tablet:p-10 desktop:px-6 desktop:py-8 flex flex-col gap-4 tablet:gap-6 items-start">
      <p className="text-[10px] tablet:text-base leading-[180%] tablet:leading-base tracking-[0.3px] tablet:tracking-0">{comment}</p>

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