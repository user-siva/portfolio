import Link from "next/link";
import Layout from "./Layout";

function Footer() {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
            <Layout className="py-8 flex items-center justify-between ">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center">
                Build with <span className="text-primary text-2xl px-1">&#9825;</span> 
                by&nbsp;<Link href="/">Siva</Link>
                </div>
                <Link href="/">Say hello</Link>
            </Layout>
        </footer>
    );
}

export default Footer;