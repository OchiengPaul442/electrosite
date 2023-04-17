import React from "react";

// css
// import "../static/css/bootstrap-icons.css";
import "../static/css/main.css";

// components
import { Header, Nav, Footer } from "../components";

const Screen = (props) => {
  return (
    <body className="section_1">
      {/* Header section */}
      <Header />
      {/* Nav section */}
      <Nav />
      {/* Main Content section */}
      <main>{props.children}</main>
      {/* Footer section */}
      <Footer />
    </body>
  );
};

export default Screen;
