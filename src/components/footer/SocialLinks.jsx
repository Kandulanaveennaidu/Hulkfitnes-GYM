import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa6";

const linkStyles = `focus rounded-full bg-gray-50 p-4 text-gray-400 hover:bg-red hover:text-white`;

function SocialLinks() {
  return (
    <ul className="flex gap-2">
      <Link
        to="https://www.facebook.com/srinivasyadav.rajaboina"
        className={linkStyles}
      >
        <FaFacebookF />
      </Link>
      <Link className={linkStyles}>
        <FaXTwitter to="twiter" />
      </Link>
      <Link className={linkStyles}>
        <FaPinterestP />
      </Link>
      <Link to="youtube" className={linkStyles}>
        <FaYoutube />
      </Link>
    </ul>
  );
}

export default SocialLinks;
