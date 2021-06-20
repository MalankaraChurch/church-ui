import React from "react";
import "./Layout.scss";
import Toolbar from "components/Toolbar/Toolbar";

type LayoutProps = {
  children: any;
};

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <Toolbar />
      <main className="layout__content">{props.children}</main>
    </>
  );
};

export default Layout;
