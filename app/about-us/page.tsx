import React from 'react';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-white overflow-hidden">
      {/* About Us Section */}
      <div className="relative flex items-center justify-between min-h-screen bg-white overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2">
          <Image
            src="/hero.jpg"
            alt="Hero"
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            className="z-10"
          />
        </div>
        <div className="relative z-20 flex flex-col items-start justify-center w-1/2 p-8 space-y-6 pl-20">
          <h2 className="text-sm font-semibold text-gray-500">ABOUT COMPANY</h2>
          <h1 className="text-5xl font-bold">ABOUT US</h1>
          <p className="text-lg text-gray-700">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            Get Quote Now
          </button>
        </div>
      </div>

      {/* Problem Section */}
      <div className="relative flex flex-col md:flex-row items-center bg-white w-full p-20">
        <div className="flex-1 text-left p-4">
          <h5 className="text-red-500 text-sm md:text-base" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.2px' }}>
            Problems trying
          </h5>
          <h4 className="text-gray-900 text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '700', lineHeight: '32px', letterSpacing: '0.1px' }}>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h4>
        </div>
        <div className="flex-1 mt-6 md:mt-0 p-4">
          <h5 className="text-gray-500 text-sm md:text-base" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.2px' }}>
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </h5>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto flex flex-wrap justify-center">
          <div className="w-1/4 text-center">
            <h2 className="text-4xl font-bold text-gray-900">15K</h2>
            <p className="text-gray-500">Happy Customers</p>
          </div>
          <div className="w-1/4 text-center">
            <h2 className="text-4xl font-bold text-gray-900">150K</h2>
            <p className="text-gray-500">Monthly Visitors</p>
          </div>
          <div className="w-1/4 text-center">
            <h2 className="text-4xl font-bold text-gray-900">15</h2>
            <p className="text-gray-500">Countries Worldwide</p>
          </div>
          <div className="w-1/4 text-center">
            <h2 className="text-4xl font-bold text-gray-900">100+</h2>
            <p className="text-gray-500">Top Partners</p>
          </div>
        </div>
      </div>

      {/* Media Section */}
      <div className="bg-white py-16 flex justify-center">
        <div className="relative w-full max-w-4xl">
          <Image
            src="/media.png"
            alt="Media"
            layout="responsive"
            width={1280}
            height={720}
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/ButtonPlay.png"
                alt="Play Button"
                width={64}
                height={64}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="bg-white py-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat', fontSize: '40px', fontWeight: '700', lineHeight: '50px', letterSpacing: '0.2px', color: '#252B42' }}>
            Meet Our Team
          </h2>
          <p className="text-gray-500" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.2px', textAlign: 'center', color: '#737373' }}>
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <Image
              src="/teamMember1.png"
              alt="Team Member 1"
              width={200}
              height={200}
              
            />
            <h3 className="mt-4 text-lg font-bold">Username</h3>
            <p className="text-gray-500">Profession</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/twitterIcon.png" alt="Twitter" width={24} height={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/fbIcon.png" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/igIcon.png" alt="Instagram" width={24} height={24} />
              </a>
            </div>
          </div>
          <div className="text-center">
            <Image
              src="/teamMember2.png"
              alt="Team Member 2"
              width={200}
              height={200}
              
            />
            <h3 className="mt-4 text-lg font-bold">Username</h3>
            <p className="text-gray-500">Profession</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/twitterIcon.png" alt="Twitter" width={24} height={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/fbIcon.png" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/igIcon.png" alt="Instagram" width={24} height={24} />
              </a>
            </div>
          </div>
          <div className="text-center">
            <Image
              src="/teamMember3.png"
              alt="Team Member 3"
              width={200}
              height={200}
              
            />
            <h3 className="mt-4 text-lg font-bold">Username</h3>
            <p className="text-gray-500">Profession</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/twitterIcon.png" alt="Twitter" width={24} height={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/fbIcon.png" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/igIcon.png" alt="Instagram" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Big Companies Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat', fontSize: '40px', fontWeight: '700', lineHeight: '50px', letterSpacing: '0.2px', color: '#252B42' }}>
            Big Companies Are Here
          </h2>
          <p className="text-gray-500 mb-8" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.2px', textAlign: 'center', color: '#737373' }}>
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <div className="flex justify-center space-x-8">
            <Image src="/brand1.png" alt="Brand 1" width={64} height={64} />
            <Image src="/brand2.png" alt="Brand 2" width={64} height={64} />
            <Image src="/brand3.png" alt="Brand 3" width={64} height={64} />
            <Image src="/brand4.png" alt="Brand 4" width={64} height={64} />
            <Image src="/brand5.png" alt="Brand 5" width={64} height={64} />
            <Image src="/brand6.png" alt="Brand 6" width={64} height={64} />
          </div>
        </div>
      </div>

      {/* Work With Us Section */}
      <div className="bg-[#2A7CC7] py-19 flex items-center justify-between">
        <div className="max-w-md pl-20">
          <h5 className="text-left text-white text-lg font-bold" style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '700', lineHeight: '24px', letterSpacing: '0.1px' }}>
            WORK WITH US
          </h5>
          <h2 className="text-left text-white text-5xl font-bold mt-2" style={{ fontFamily: 'Montserrat', fontSize: '40px', fontWeight: '700', lineHeight: '50px', letterSpacing: '0.2px' }}>
            Now Let’s grow Yours
          </h2>
          <p className="text-left text-white mt-4" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.2px' }}>
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th.
          </p>
          <button className="mt-6 px-6 py-3 text-[#2A7CC7] bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Button
          </button>
        </div>
        <div className="w-1/2">
          <Image
            src="/ketuaTeam.png"
            alt="Leader"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
