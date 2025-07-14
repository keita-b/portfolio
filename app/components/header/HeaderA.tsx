import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-black text-white shadow-md flex justify-end border-b">
      <nav className="flex space-x-8">
        <Link
          href="/"
          className="hover:text-gray-200 hover:underline transition duration-200 font-medium"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="hover:text-gray-200 hover:underline transition duration-200 font-medium"
        >
          About
        </Link>

        <Link
          href="/works"
          className="hover:text-gray-200 hover:underline transition duration-200 font-medium"
        >
          Works
        </Link>
      </nav>
    </header>
  );
}
