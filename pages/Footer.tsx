const Footer = () => {
    return (
        <footer className="py-4 text-black shadow-md">
            <div className="container flex items-center justify-center px-4 mx-auto">
                <p className="text-sm"> &copy; {new Date().getFullYear()} Developed by Netanel Nagar</p>
            </div>
        </footer>
    )
}


export default Footer;