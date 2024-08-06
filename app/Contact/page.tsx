import Image from 'next/image';
import logotwitter from '../../public/logoTWT.png';
import logofb from '../../public/logoFB.png';
import logoig from '../../public/logoIG.png';
import logolkd from '../../public/logoLKD.png';
import bgImage from '../../public/bgMEJA.png';
import bgCEWE from '../../public/bgCEWE.png';
import bgGantungBaju from '../../public/bgGantungBaju.png'; 

const Contact1 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Get answers to all your questions.
            </h1>
            <p className="text-gray-600 mb-4">
                Problems trying to resolve the conflict between the two major realms of Classical physics:
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-6">
                CONTACT OUR COMPANY
            </button>
            <div className="flex space-x-4">
                <a href="#" aria-label="Twitter">
                    <Image src={logotwitter} alt="Twitter Logo" width={30} height={30} />
                </a>
                <a href="#" aria-label="Facebook">
                    <Image src={logofb} alt="Facebook Logo" width={30} height={30} />
                </a>
                <a href="#" aria-label="Instagram">
                    <Image src={logoig} alt="Instagram Logo" width={30} height={30} />
                </a>
                <a href="#" aria-label="LinkedIn">
                    <Image src={logolkd} alt="LinkedIn Logo" width={30} height={30} />
                </a>
            </div>
        </div>
    );
}

const Contact2 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImage.src})` }}>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Questions & Answers
            </h1>
            <p className="text-gray-600 mb-4">
                Problems trying to resolve the conflict between the two major realms of Classical physics:
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-6">
                CONTACT US
            </button>
        </div>
    );
}

const Contact3 = () => {
    return (
        <div className="flex flex-row items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `linear-gradient(89.85deg, #000000 0.13%, #000000 0.14%, rgba(0, 0, 0, 0) 99.56%), url(${bgCEWE.src})` }}>
            <div className="flex flex-col items-start text-left p-10 w-1/3">
                <h1 className="text-4xl font-bold text-white mb-4">
                    CONTACT US
                </h1>
                <p className="text-white mb-4">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    CONTACT US
                </button>
            </div>
            <div className="flex flex-wrap justify-around text-left text-white p-10 w-2/3">
                <div className="w-1/2 mb-8">
                    <h2 className="text-xl font-semibold">Paris</h2>
                    <p>1901 Thorn ridge Cir.</p>
                    <p>75000 Paris</p>
                    <p>Phone: +451 215 215</p>
                    <p>Fax: +451 215 215</p>
                </div>
                <div className="w-1/2 mb-8">
                    <h2 className="text-xl font-semibold">New York</h2>
                    <p>2715 Ash Dr. San Jose,</p>
                    <p>75000 Paris</p>
                    <p>Phone: +451 215 215</p>
                    <p>Fax: +451 215 215</p>
                </div>
                <div className="w-1/2">
                    <h2 className="text-xl font-semibold">Berlin</h2>
                    <p>4140 Parker Rd.</p>
                    <p>75000 Paris</p>
                    <p>Phone: +451 215 215</p>
                    <p>Fax: +451 215 215</p>
                </div>
                <div className="w-1/2">
                    <h2 className="text-xl font-semibold">London</h2>
                    <p>3517 W. Gray St. Utica,</p>
                    <p>75000 Paris</p>
                    <p>Phone: +451 215 215</p>
                    <p>Fax: +451 215 215</p>
                </div>
            </div>
        </div>
    );
}

const Contact4 = () => {
    return (
        <div className="flex flex-row items-center justify-center min-h-screen bg-[#2A7CC7]">
            <div className="flex flex-col items-start text-left p-10 w-1/2 text-white">
                <h1 className="text-2xl font-bold mb-4">
                    WORK WITH US
                </h1>
                <h2 className="text-3xl font-bold mb-4">
                    Now Let's grow Yours
                </h2>
                <p className="mb-4">
                    The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                </p>
                <button className="bg-white text-blue-500 px-4 py-2 rounded">
                    Button
                </button>
            </div>
            <div className="w-1/2">
                <Image src={bgGantungBaju} alt="Background Image" layout="responsive" width={700} height={475} />
            </div>
        </div>
    );
}

const ContactPage = () => {
    return (
        <div>
            <Contact1 />
            <Contact2 />
            <Contact3 />
            <Contact4 />
        </div>
    );
}

export default ContactPage;
