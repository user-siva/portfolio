
const Layout = ({childern,className=""}) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
            {childern}
        </div>
    );
}

export default Layout;