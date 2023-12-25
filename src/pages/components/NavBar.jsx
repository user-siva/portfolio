import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";

const CustomLink = ({href,title,className=""}) => {
    const router = useRouter()
    return (

        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block left-0 -bottom-0.5 w-full bg-dark absolute 
            group-hover:w-full translate-[width] ease duration-300 ${router.asPath===href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
}

function NavBar() {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <CustomLink title="Home" href='/' className="mr-4"/>
                <CustomLink title="About" href='/about' className="mx-4"/>
                <CustomLink title="Projects" href='/projects' className="mx-4"/>
                <CustomLink title="Articles" href='/articles' className="ml-4"/>
            </nav>
            
            <nav>
            <Link href='/' target={"_blank"}>S</Link>
            <Link href='/' target={"_blank"}>S</Link>
            <Link href='/' target={"_blank"}>S</Link>
            <Link href='/' target={"_blank"}>S</Link>
            <Link href='/' target={"_blank"}>S</Link>
            <Link href='/' target={"_blank"}>S</Link>
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
            </div>
        </header>
    );
}

export default NavBar;