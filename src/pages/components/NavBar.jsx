import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "./icons";
import { motion } from "framer-motion";


const CustomLink = ({href,title,className=""}) => {
    const router = useRouter()
    return (

        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block w-0 left-0 -bottom-0.5 bg-dark absolute 
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
            
            <nav className="flex justify-center items-center flex-wrap">
            <motion.a href='/' target={"_blank"}
            className="w-6 mr-3"
            whileHover={{y:-1}}
            whileTap={{scale:0.9}}
            >
                <TwitterIcon />
            </motion.a>
            <motion.a href='/' target={"_blank"}
            className="w-6 mx-3"
            whileHover={{y:-1}}
            whileTap={{scale:0.9}}
            >
                <GithubIcon />
            </motion.a>
            <motion.a href='/' target={"_blank"}
            className="w-6 mx-3"
            whileHover={{y:-1}}
            whileTap={{scale:0.9}}
            >
                <LinkedInIcon />
            </motion.a>
            <motion.a href='/' target={"_blank"}
            className="w-6 mx-3"
            whileHover={{y:-1}}
            whileTap={{scale:0.9}}
            >
                <PinterestIcon />
            </motion.a>
            <motion.a href='/' target={"_blank"}
            className="w-6 ml-3"
            whileHover={{y:-1}}
            whileTap={{scale:0.9}}
            >
                <DribbbleIcon />
            </motion.a>
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
            </div>
        </header>
    );
}

export default NavBar;