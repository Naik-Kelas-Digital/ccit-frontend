import Image from "next/image";
import redline from "../../public/images/redline.png";
import learnmore from "../../public/images/learnmore.png";
import circle from "../../public/images/circle.png";

export default function Features() {
  return (
    <div className="features w-full min-h-screen p-24 grid grid-cols-2">
      <div className="container p-10" id="one">
        <div>
          <Image src={redline} alt="red line" className="mb-14" />
        </div>
        <h1 className="text-6xl font-bold mb-12">
          Featured <br />
          Products
        </h1>
        <p className="text-sm font-normal mb-12">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: <br />
          Newtonian mechanics
        </p>
        <a
          href="#"
          className="font-bold text-[#23a6f0] no-underline transition-colors duration-300 ease-in-out hover:text-[#E74040] inline-flex items-center"
        >
          Learn More
          <Image src={learnmore} alt="arrow" className="ml-2 " />
        </a>
      </div>
      <div className="container" id="two mt-20 mb-20">
        <div className="container-features grid grid-cols-2 gap-12 p-10 mt-14 mr-5">
          <div className="article-feature flex items-center">
            <Image src={circle} alt="circle" className="mr-5 w-20" />
            <div className="w-38">
              <h6 className="text-sm font-bold mb-2">Easy to Use</h6>
              <small className="text-xs font-small mb-2">
                Things on a very small that you have any direct
              </small>
            </div>
          </div>
          <div className="article-feature flex items-center">
            <Image src={circle} alt="circle" className="mr-5 w-20" />
            <div className="w-38">
              <h6 className="text-sm font-bold mb-2">Easy to Use</h6>
              <small className="text-xs font-small mb-2">
                Things on a very small that you have any direct
              </small>
            </div>
          </div>
          <div className="article-feature flex items-center">
            <Image src={circle} alt="circle" className="mr-5 w-20" />
            <div className="w-38">
              <h6 className="text-sm font-bold mb-2">Easy to Use</h6>
              <small className="text-xs font-small mb-2">
                Things on a very small that you have any direct
              </small>
            </div>
          </div>
          <div className="article-feature flex items-center">
            <Image src={circle} alt="circle" className="mr-5 w-20" />
            <div className="w-38">
              <h6 className="text-sm font-bold mb-2">Easy to Use</h6>
              <small className="text-xs font-small mb-2">
                Things on a very small that you have any direct
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
