function FeatureItem({ img, title, description }) {
  return (
    <div className="flex flex-col gap-6 tablet:gap-4 items-center">
      <img src={img} alt={title} className="tablet:h-26" />

      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-raleway text-[20px] leading-[120%] font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default FeatureItem;