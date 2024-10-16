import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center px-10 py-4 bg-white shadow-md">
            <div className="flex items-center space-x-2">

                <span className="text-xl font-bold text-indigo-500">Klean</span>
            </div>
            <nav className="flex space-x-6 text-gray-700">
                <Link key={1} href={`/`} className="hover:text-indigo-500">
                    Home
                </Link>
                <Link key={2} href={`/services`} className="hover:text-indigo-500">
                    Services
                </Link>
                <Link key={3} href={`/details`} className="hover:text-indigo-500">
                    Details
                </Link>
                <Link key={4} href={`/features`} className="hover:text-indigo-500">
                    Features
                </Link>
                <Link key={5} href={`/projects`} className="hover:text-indigo-500">
                    Projects
                </Link>
                <Link key={6} href={`/team`} className="hover:text-indigo-500">
                    team
                </Link>
                <Link key={7} href={`/testimonial`} className="hover:text-indigo-500">
                    Testimonial
                </Link>
                <Link key={8} href={`/blog`} className="hover:text-indigo-500">
                    Blog
                </Link>
                <Link key={9} href={`/contact`} className="hover:text-indigo-500">
                    Contact
                </Link>
            </nav>
            <div className="flex space-x-4 justify-center items-center">
                <Link href="/login" className="text-indigo-500 hover:text-indigo-700">Log In</Link>
                <Link href="/signup" className="px-4 py-2 bg-indigo-100 text-indigo-500 rounded-full hover:bg-indigo-200">Sign Up</Link>
            </div>
        </header>
    );
}
