import React from "react";
import ProjectList from "./ProjectList";
import user from "../data/user";
function NavBar() {
  const links = ["home", "about", "projects"];
  let count = 0
  const linksComponent = links.map((string)=>{
    return <a key={count++} href={`#${string}`}>{string} </a>
  })
  return <nav>
    {linksComponent}
    </nav>;
      <ProjectList projects={user.projects}></ProjectList>
}

export default NavBar;
