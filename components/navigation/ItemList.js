import Link from "next/link";

function ItemList({setIsOpen}) {
    return (
        <ul className="font-roboto-mono flex flex-col md:flex-row text-gray-50">
            <li className="mr-4  hover:text-secondary hover:border-b hover:border-secondary">
                <Link onClick={setIsOpen} href="/">
                    <span className="text-secondary mr-1">01.</span>
                    Accueil
                </Link>
            </li>
            <li className="mr-4 hover:text-secondary hover:border-b hover:border-secondary mt-5 md:mt-0">
                <Link onClick={setIsOpen} href="/#about">
                    <span className="text-secondary mr-1">02.</span>
                    À propos
                </Link>
            </li>
            <li className="mr-4  hover:text-secondary hover:border-b hover:border-secondary mt-5 md:mt-0">
                <Link onClick={setIsOpen} href="/#projects">
                    <span className="text-secondary mr-1">03.</span>
                    Projets
                </Link>
            </li>
            <li className="mr-4  hover:text-secondary hover:border-b hover:border-secondary mt-5 md:mt-0">
                <Link onClick={setIsOpen} href="/#experiences">
                    <span className="text-secondary mr-1">04.</span>
                    Expériences
                </Link>
            </li>
            <li className="hover:text-secondary hover:border-b hover:border-secondary mt-5 md:mt-0">
                <Link onClick={setIsOpen} href="/#contact">
                    <span className="text-secondary mr-1">05.</span>
                    Contact
                </Link>
            </li>
        </ul>
    )
}

export default ItemList;
