import React from "react";
import Hero from "./sections/hero";
import Recenets from "./sections/recents";
import NewReleases from "./sections/new-releases";
import Trending from "./sections/trending";
import Recommended from "./sections/recommended";

function Home() {
  return (
    <section>
      <Hero />
      <Recenets />
      <Trending />
      <NewReleases />
      <Recommended />
    </section>
  );
}

export default Home;
