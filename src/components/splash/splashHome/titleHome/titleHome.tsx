import "./titleHome.css";

import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

export default function TitleHome() {
  return (
    <div className="DHR__TitleHome-Title">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("<!-- Hiya, I'm Dhruv™️! -->").start();
        }}
      />
      <p>I don't make websites, I make web experiences</p>
    </div>
  );
}
