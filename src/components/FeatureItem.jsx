function FeatureItem({ img, title, description }) {
  return (
    <div className="flex flex-col gap-6 items-center">
      <img src={img} alt={title} className="w-6 aspect-square" />

      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-raleway text-[20px] leading-[120%] font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default FeatureItem;