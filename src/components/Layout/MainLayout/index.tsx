import React, { FC } from "react";

const MainLayout: FC = ({ children }) => {
  return <main className="flex">{children}</main>;
};

export default MainLayout;
