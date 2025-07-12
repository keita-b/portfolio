import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-md flex justify-end">
      <nav className="flex space-x-8">
        <Link
          href="/"
          className="text-gray-700 hover:text-black hover:underline transition duration-200 font-medium"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-700 hover:text-black hover:underline transition duration-200 font-medium"
        >
          About
        </Link>
        <Link
          href="/works"
          className="text-gray-700 hover:text-black hover:underline transition duration-200 font-medium"
        >
          Works
        </Link>
      </nav>
    </header>
  );
}
