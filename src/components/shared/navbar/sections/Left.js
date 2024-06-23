import React from "react";

import NavLink from "../partials/NavLink";

function Left() {
  return (
    <section>
      <NavLink name="Home" handler={() => console.log("home clicked")} />
      <NavLink name="Genre" handler={() => console.log("Genre clicked")} />
      <NavLink name="Country" handler={() => console.log("Country clicked")} />
    </section>
  );
}

export default Left;
