import React from "react";
import Links from "./Links";

// function BioPassed ({bio}) {
//  if (bio === "") {
//    return null
//  } else {
//    return <p>{bio}</p>
//  }
// }

function About(props) {
console.log(props)

  function bioPassed () {
 if (props.bio === "") {
   return null
 } else {
   return <p>{props.bio}</p>
 }
}

  console.log(props)

  return (
    <div id="about">
      <h2>About Me</h2>
      {bioPassed()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      <Links
            github = {props.github}
            linkedin = {props.linkedin} /> 
    </div>
  );
}

export default About;

