import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppSwitch from "@components/AppSwitch";
import { useRecoilState } from "recoil";
import { AccessTypeAtom } from "@/AppState";

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const [_, setUserAccessType] = useRecoilState(AccessTypeAtom);

  const handleCheckChange = (val: boolean) => {
    navigate(val ? "/user" : "/admin");
    setUserAccessType(val ? "USER" : "ADMIN");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6 justify-between text-white">
        <li>Home</li>
        <div className="flex gap-6">
          <li className="flex gap-2">
            Admin
            <AppSwitch onChange={handleCheckChange} />
            User
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
