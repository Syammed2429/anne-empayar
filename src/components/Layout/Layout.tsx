import React, { FC } from "react";
import { About } from "../About/About";
import { Connect } from "../Connect/Connect";
import { Navbar } from "../Navbar/Navbar";

const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <About />
      <Connect />
    </>
  );
};

export { Layout };
