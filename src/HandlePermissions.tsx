import { useRecoilValue } from "recoil";
import { AccessTypeAtom } from "./AppState";
import { useLocation } from "react-router-dom";
import { PERMISSIONS } from "./constants";
import Unauthorized from "./Unauthorised";

type OwnProps = {
  children: React.ReactElement;
};

const HandlePermissions: React.FC<OwnProps> = ({ children }) => {
  const currentUserAccessType = useRecoilValue(AccessTypeAtom);
  const location = useLocation();
  console.log(PERMISSIONS, currentUserAccessType);
  console.log(
    PERMISSIONS[currentUserAccessType]?.find((page) =>
      location.pathname.includes(page),
    ),
  );

  return PERMISSIONS[currentUserAccessType]?.find((page) =>
    location.pathname.includes(page),
  ) ? (
    children
  ) : (
    <Unauthorized />
  );
};

export default HandlePermissions;
