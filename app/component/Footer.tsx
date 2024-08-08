import Image from "next/image";
import facebook from "../../public/images/facebook.png";
import instagram from "../../public/images/instagram.png";
import twitter from "../../public/images/twitter.png";

export default function Footer() {
  return (
    <footer className="w-full min-h-[50vh] pt-15 bg-white text-black">
      <div className="container mx-20 p-20">
        <div className="footer-box grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="box flex flex-col gap-2">
            <h2 className="text-xl font-bold">Get In Touch</h2>
            <p className="text-sm leading-loose mt-2">
              the quick fox jumps over the <br />
              lazy dog
            </p>
            <div className="footer-icon flex gap-5 mt-2">
              <Image src={facebook} alt="facebook" />
              <Image src={instagram} alt="instagram" />
              <Image src={twitter} alt="twitter" />
            </div>
          </div>
          <div className="box flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Company Info</h3>
            <a
              href="#"
              className="text-sm no-underline hover:text-[#23A6F0] transition-colors duration-300 ease-in-out"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-sm no-underline hover:text-[#23A6F0] transition-colors duration-300 ease-in-out"
            >
              Carrier
            </a>
            <a
              href="#"
              className="text-sm no-underline hover:text-[#23A6F0] transition-colors duration-300 ease-in-out"
            >
              We are hiring
            </a>
            <a
              href="#"
              className="text-sm no-underline hover:text-[#23A6F0] transition-colors duration-300 ease-in-out"
            >
              Blog
            </a>
          </div>
          <div className="box flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Features</h3>
            <a
              href="#"
              className="text-sm no-underline hover:text-[#23A6F0] transition-colors duration-300 ease-in-out"
            >
              Business Marketing
            </a>
            <a
              href="#"
              className="text-sm no-underline hover:text-[#23A6F0] transition-colors duration-300 ease-in-out"
            >
              User Analytic
            </a>
            <a
              href="#"
              className="text-sm no-underline hover:text-[#23A6F0] transition-colors duration-300 ease-in-out"
            >
              Live Chat
            </a>
            <a
              href="#"
              className="text-sm no-underline hover:text-[#23A6F0] transition-colors duration-300 ease-in-out"
            >
              Unlimited Support
            </a>
          </div>
          <div className="box flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Resources</h3>
            <a
              href="#"
              className="text-sm no-underline hover:text-[#23A6F0] transition-colors duration-300 ease-in-out"
            >
              IOS & Android
            </a>
            <a
              href="#"
              className="text-sm no-underline hover:text-[#23A6F0] transition-colors duration-300 ease-in-out"
            >
              Watch a Demo
            </a>
            <a
              href="#"
              className="text-sm no-underline hover:text-[#23A6F0] transition-colors duration-300 ease-in-out"
            >
              Customers
            </a>
            <a
              href="#"
              className="text-sm no-underline hover:text-[#23A6F0] transition-colors duration-300 ease-in-out"
            >
              API
            </a>
          </div>
        </div>
      </div>
      <div className="copyright text-center py-2 bg-white mt-5 mb-5">
        <p className="text-sm font-bold">
          Made With Love By Figmaland All Right Reserved
        </p>
      </div>
    </footer>
  );
}
