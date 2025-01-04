import React from "react";
import Navigation from "@components/AppNavigation";

type OwnProps = {
  children: React.ReactElement;
};

const Layout: React.FC<OwnProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="p-8">{children}</div>
    </div>
  );
};

export default Layout;
