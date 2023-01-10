import Link from "next/link";
import {useRouter} from "next/router";

function ItemList({setIsOpen}) {
    const router = useRouter();
    const navigate = (target) => {
        setIsOpen();
        if (router.pathname === "/") {
            document.getElementById(target).scrollIntoView({behavior: "smooth"});
        } else {
            router.push("/").then(() => {
                setTimeout(() => {
                    document.getElementById(target).scrollIntoView({behavior: "smooth"});
                }, 1000);
            });
        }
    }

    return (
        <ul className="font-roboto-mono flex flex-col md:flex-row text-gray-50">
            <li className="mr-4 hover:text-secondary hover:border-b hover:border-secondary">
                <button onClick={() => navigate('home')}>
                    <span className="text-secondary mr-1">01.</span>
                    Accueil
                </button>
            </li>
            <li className="mr-4 hover:text-secondary hover:border-b hover:border-secondary mt-5 md:mt-0">
                <button onClick={() => navigate('about')}>
                    <span className="text-secondary mr-1">02.</span>
                    À propos
                </button>
            </li>
            <li className="mr-4  hover:text-secondary hover:border-b hover:border-secondary mt-5 md:mt-0">
                <button onClick={() => navigate('experiences')}>
                    <span className="text-secondary mr-1">03.</span>
                    Expériences
                </button>
            </li>
            <li className="mr-4  hover:text-secondary hover:border-b hover:border-secondary mt-5 md:mt-0">
                <button onClick={() => navigate('projects')}>
                    <span className="text-secondary mr-1">04.</span>
                    Projets
                </button>
            </li>
            <li className="hover:text-secondary hover:border-b hover:border-secondary mt-5 md:mt-0">
                <button onClick={() => navigate('contact')}>
                    <span className="text-secondary mr-1">05.</span>
                    Contact
                </button>
            </li>
        </ul>
    )
}

export default ItemList;
