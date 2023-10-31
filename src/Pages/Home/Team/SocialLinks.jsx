/* Social Link on Card Action div */
import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";

const SocialLinks = () => {
  return (
    <div className="card-actions mt-5">
      <Link className="bg-blue-900 rounded-full p-2">
        <BiLogoFacebook className="text-white text-3xl" />
      </Link>
      <Link className="bg-blue-400 rounded-full p-2">
        <BiLogoTwitter className="text-white text-3xl" />
      </Link>
      <Link className="bg-blue-700 rounded-full p-2">
        <BiLogoLinkedin className="text-white text-3xl" />
      </Link>
      <Link className="bg-gradient-to-br from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 rounded-full p-2">
        <BiLogoInstagram className="text-white text-3xl" />
      </Link>
    </div>
  );
};

export default SocialLinks;
