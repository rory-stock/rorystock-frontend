type MobileMenuProps = {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setOpen }: MobileMenuProps) {
    return (
        <div
            className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out 
                        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
            <div className="flex justify-end p-4">
                <button
                    className="focus:outline-none"
                    onClick={() => setOpen(false)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center h-full">
                <a
                    href="/"
                    className="text-2xl font-bold text-gray-800 hover:text-primary"
                    onClick={() => setOpen(false)}
                >
                    Home
                </a>
                <a
                    href="/personal"
                    className="text-2xl font-bold text-gray-800 hover:text-primary"
                    onClick={() => setOpen(false)}
                >
                    Personal
                </a>
                <a
                    href="/projects"
                    className="text-2xl font-bold text-gray-800 hover:text-primary"
                    onClick={() => setOpen(false)}
                >
                    Projects
                </a>
                <a
                    href="/contact"
                    className="text-2xl font-bold text-gray-800 hover:text-primary"
                    onClick={() => setOpen(false)}
                >
                    Contact
                </a>
            </div>
        </div>
    );
};