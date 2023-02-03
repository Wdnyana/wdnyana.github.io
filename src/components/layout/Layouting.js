import React from "react";
import NavbarComp from "./NavbarComp";
import FooterComp from "./FooterComp";

import "../../assets/scss/custom.scss";

export const Layouting = (props) => {
  return (
    <div className="layouting">
      <div>
        <NavbarComp />
      </div>
      <main className="container main-custom">{props.children}</main>
      <div>
        <FooterComp />
      </div>
    </div>
  );
};
