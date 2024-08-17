import Image from 'next/image';
import Link from 'next/link';

export default function SetNewPasswordPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-4xl flex bg-white shadow-md rounded-lg overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-1/2 p-8">
          <Link href="/login" className="text-sm text-gray-500 mb-4 inline-block">
            &larr; Back to Login
          </Link>
          <h2 className="text-3xl font-bold mb-2">Set a password</h2>
          <p className="text-gray-600 mb-6">
            Your previous password has been reset. Please set a new password for your account.
          </p>
          <form className="mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-password">
                Create Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="new-password"
                type="password"
                placeholder="Enter new password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                Re-enter Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="password"
                placeholder="Re-enter new password"
              />
            </div>
            <button
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Set password
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
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
