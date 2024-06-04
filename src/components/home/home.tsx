import { Fragment } from "react";

import { Hero } from "./hero";
import { Features } from "./features";
import { Quote } from "./quote";

export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Quote />
    </Fragment>
  );
};
