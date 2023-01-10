import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="relative">
            <footer className="absolute bottom-0 bg-transparent w-full p-5 flex justify-center ">
                <div>
                    <small className="text-gray-50">&copy; Copyright 2023, Axel VION</small>
                    <div className="flex justify-center mt-3">
                        <a target="_blank" href="https://www.linkedin.com/in/axel-vion71/" rel="noreferrer"><FontAwesomeIcon className="mr-3 text-xl text-gray-50 hover:text-secondary" icon={faLinkedin} /></a>
                        <a target="_blank" href="https://github.com/UnPotDeYaourt" rel="noreferrer"><FontAwesomeIcon className="text-xl text-gray-50 hover:text-secondary" icon={faGithub} /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
