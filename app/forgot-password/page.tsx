import Image from 'next/image';
import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-4xl flex bg-white shadow-md rounded-lg overflow-hidden">
        <div className="w-1/2 p-8">
          <Link href="/login" className="text-sm text-gray-500 mb-4 inline-block">
            &larr; Back to login
          </Link>
          <h2 className="text-3xl font-bold mb-2">Forgot your password?</h2>
          <p className="text-gray-600 mb-6">
            Don’t worry, happens to all of us. Enter your email below to recover your password.
          </p>
          <form className="mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="john.doe@gmail.com"
              />
            </div>
            <button
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </form>
          <div className="flex items-center justify-between mt-4">
            <hr className="w-full border-gray-300" />
            <span className="mx-4 text-gray-500">Or login with</span>
            <hr className="w-full border-gray-300" />
          </div>
          <div className="flex items-center justify-between mt-4">
            <button className="flex items-center justify-center border border-gray-300 rounded py-2 px-4 w-full mr-2">
              <Image src="/GoogleIC.png" alt="Google icon" width={20} height={20} className="mr-2" />
              Google
            </button>
            <button className="flex items-center justify-center border border-gray-300 rounded py-2 px-4 w-full ml-2">
              <Image src="/AppleIC.png" alt="Apple icon" width={20} height={20} className="mr-2" />
              Apple
            </button>
          </div>
        </div>
        <div className="w-1/2 relative bg-gray-100">
          <Image
            src="/ICgembok.png"
            alt="Lock icon"
            layout="fill"
            objectFit="contain"
            className="p-8"
          />
        </div>
      </div>
    </div>
  );
}
