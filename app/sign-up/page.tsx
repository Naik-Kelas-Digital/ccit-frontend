import Image from 'next/image';

export default function SignUp() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-6">Get Started Now</h2>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center mb-4">
            <input id="terms" type="checkbox" className="mr-2 leading-tight" />
            <label htmlFor="terms" className="text-sm">
              I agree to the terms & policy
            </label>
          </div>
          <button
            className="bg-green-600 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            Signup
          </button>
        </form>
        <div className="flex items-center justify-between w-full max-w-sm mt-4">
          <hr className="w-full border-gray-300" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <div className="flex items-center justify-between w-full max-w-sm mt-4">
          <button className="flex items-center justify-center border border-gray-300 rounded py-2 px-4 w-full mr-2">
            <Image src="/GoogleIC.png" alt="Google icon" width={20} height={20} className="mr-2" />
            Sign in with Google
          </button>
          <button className="flex items-center justify-center border border-gray-300 rounded py-2 px-4 w-full ml-2">
            <Image src="/AppleIC.png" alt="Apple icon" width={20} height={20} className="mr-2" />
            Sign in with Apple
          </button>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Have an account? <a href="login" className="text-blue-500">Sign In</a>
          </p>
        </div>
      </div>
      <div className="w-1/2 relative">
        <Image
          src="/FotoDaun.png"
          alt="Leaf image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
