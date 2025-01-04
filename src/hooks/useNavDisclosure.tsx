import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useNavDisclosure = (segment: string | string[]) => {
  const location = useLocation();
  const navigate = useNavigate();

  const open = useMemo(() => {
    if (typeof segment === "string") {
      return location.pathname.includes(segment);
    } else {
      return segment.some((phrase) => location.pathname.includes(phrase));
    }
  }, [location.pathname]);

  const goBack = () => navigate(-1);

  return { open, goBack };
};

export default useNavDisclosure;
