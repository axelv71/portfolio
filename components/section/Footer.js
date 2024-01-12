import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="relative">
            <footer className="absolute bottom-0 bg-transparent w-full p-5 flex justify-center ">
                <div>
                    <small className="text-gray-50">&copy; Copyright 2024, Axel VION</small>
                    <div className="flex justify-center mt-3">
                        <a target="_blank" href="https://www.linkedin.com/in/axel-vion71/"
                           rel="noreferrer"><FontAwesomeIcon className="mr-3 text-xl text-gray-50 hover:text-secondary"
                                                             icon={faLinkedin}/></a>
                        <a target="_blank" href="https://github.com/axelv71" rel="noreferrer"><FontAwesomeIcon
                            className="text-xl text-gray-50 hover:text-secondary mr-3" icon={faGithub}/></a>
                        <a target="_blank" href="https://twitter.com/axel_v71" rel="noreferrer"><FontAwesomeIcon
                            className="text-xl text-gray-50 hover:text-secondary" icon={faTwitter}/></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
