import React from "react";
import "./Layout.scss";
import Toolbar from "components/toolbar/Toolbar";

type LayoutProps = {
  children: any;
};

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <Toolbar />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
