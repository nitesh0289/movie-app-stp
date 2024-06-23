import React from "react";

import NavLink from "../partials/NavLink";

function Right() {
  return (
    <section>
      <NavLink name="Movies" handler={() => console.log("Movies clicked")} />
      <NavLink name="Series" handler={() => console.log("Series clicked")} />
      <NavLink name="Animations" handler={() => console.log("Animations clicked")} />
      <NavLink name="Login/Signup" handler={() => console.log("Login/Signup clicked")} />
    </section>
  );
}

export default Right;
