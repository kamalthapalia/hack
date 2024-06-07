const Footer = () => {
    return (
        <footer className=" bg-gray-200 text-sm font-semibold py-6 mt-12">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex flex-col space-y-2">
                    <span>&copy; {new Date().getFullYear()} Your Company</span>
                    <span>All rights reserved.</span>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400">Terms of Service</a>
                    <a href="#" className="hover:text-gray-400">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
