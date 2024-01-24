import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../images/logo/logoss.jpg";
import logoBlack from "../../images/logo/logoss.jpg";

function Logo({ size = "w-12", type = "white", borderRadius = "rounded-md" }) {
  return (
    <Link to="/" className="focus inline-block">
      <img
        src={type === "black" ? logoBlack : logoWhite}
        alt="hulkfitness"
        className={`object-contain ${size} mx-auto ${borderRadius}`}
      />
    </Link>
  );
}

export default Logo;
