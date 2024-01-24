import { Link } from "react-router-dom";

function Copyright() {
  return (
    <div className="font-medium text-gray-300">
      <p className=" ">
        Privacy Policy | &copy; <span>{new Date().getFullYear()}</span>{" "}
        Hulkfitnes
      </p>
      <p>
        Designed by{" "}
        <Link
          to="https://www.instagram.com/hulkfitnesstudiosiddipet/?utm_source=qr&r=nametag"
          target="_blank"
          className="focus text-red"
        >
          Srinivas yadav
        </Link>
      </p>
    </div>
  );
}

export default Copyright;
