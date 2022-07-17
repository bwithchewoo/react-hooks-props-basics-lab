import React from "react";
import Links from "./Links";

function About(props) {

  const showThisOrThat = (condition) => {
    if (condition)
      return <p>{props.bio}</p>
    else
      return ''
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {showThisOrThat("bio" in props && props.bio.length > 0)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
