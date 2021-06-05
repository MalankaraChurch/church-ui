import React from "react";
import "./layout.scss";
import Toolbar from "components/toolbar/toolbar";

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
