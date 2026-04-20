import productiveImg from "/images/illustration-stay-productive.png";
import arrowIcon from "/images/icon-arrow.svg";

function ProductiveSection() {
  return (
    <div className="flex flex-col gap-12 items-center">
      <img src={productiveImg} alt="Productive image" />

      <div className="flex flex-col gap-4 items-start">
        <h3 className="font-bold font-raleway text-[16px] leading-[120%]">Stay productive, wherever you are</h3>

        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        
        <button type="button" className="text-blue-300 border-b border-blue-300 flex gap-2 items-center">
          <span>See how Fylo works</span>
          <img src={arrowIcon} alt="Right arrow icon" />
        </button>
      </div>
    </div>
  )
}

export default ProductiveSection;