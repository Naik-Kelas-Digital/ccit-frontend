import Image from 'next/image';
import Link from 'next/link';

export default function VerifyCodePage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-4xl flex bg-white shadow-md rounded-lg overflow-hidden">
        <div className="w-1/2 p-8">
          <Link href="/login" className="text-sm text-gray-500 mb-4 inline-block">
            &larr; Back to Login
          </Link>
          <h2 className="text-3xl font-bold mb-2">Verify code</h2>
          <p className="text-gray-600 mb-6">
            An authentication code has been sent to your email.
          </p>
          <form className="mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
                Enter Code
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="code"
                type="text"
                placeholder="7789BM6X"
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Didn’t receive a code?{' '}
              <a href="#" className="text-red-500 hover:underline">
                Resend
              </a>
            </p>
            <button
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Verify
            </button>
          </form>
        </div>
        <div className="w-1/2 relative bg-gray-100">
          <Image
            src="/ICverifikasi.png"
            alt="Verification Icon"
            layout="fill"
            objectFit="contain"
            className="p-8"
          />
        </div>
      </div>
    </div>
  );
}
