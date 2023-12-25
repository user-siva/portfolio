import Link from "next/link";
import Logo from "./Logo";

function NavBar() {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/articles'>Articles</Link>
            </nav>
            <Logo />
            <nav>
            <Link href='/' target={"_blank"}>S</Link>
            <Link href='/' target={"_blank"}>S</Link>
            <Link href='/' target={"_blank"}>S</Link>
            <Link href='/' target={"_blank"}>S</Link>
            <Link href='/' target={"_blank"}>S</Link>
            <Link href='/' target={"_blank"}>S</Link>
            </nav>
        </header>
    );
}

export default NavBar;