import { Link } from "react-router-dom";
import logoWhite from "../../images/logo/icons8-hulk.svg";
import logoBlack from "../../images/logo/icons9-hulk.svg";

function Logo({ size = "w-full", type = "white" }) {
  return (
    <Link to="/" className="focus inline-block">
      <img
        src={`${type === "black" ? logoBlack : logoWhite}`}
        alt="hulkfitnes"
        className={`h-auto ${size}`}
      />
    </Link>
  );
}
export default Logo;
