import React from "react";
import Card from "./Card";

function SecondSe() {
  return (
    <section className="second-section my-[-3rem] mx-auto w-[75vw]">
      {/* content container */}
      <div className="content-container relative grid grid-cols-3 gap-[3.5rem]">
        {/* card */}
        <Card
          img="./images/second-section1.jpg"
          category="Community"
          title="HIL: Darren Carver-Balsiger."
          date="20 Feb 2022"
          author="JACK MOULTON"
        />
        <Card
          img="./images/second-section2.jpg"
          category="Interview"
          title="Seeing Faces."
          date="17 Feb 2022"
          author="ELLA KEMP"
        />
        <Card
          img="./images/second-section3.jpg"
          category="Interview"
          title="Fighting Spirit."
          date="14 Feb 2022"
          author="GEMMA GRACEWOOD"
        />
        <Card
          img="./images/second-section1.jpg"
          category="Community"
          title="HIL: Darren Carver-Balsiger."
          date="20 Feb 2022"
          author="JACK MOULTON"
        />
        <Card
          img="./images/second-section2.jpg"
          category="Interview"
          title="Seeing Faces."
          date="17 Feb 2022"
          author="ELLA KEMP"
        />
        <Card
          img="./images/second-section3.jpg"
          category="Interview"
          title="Fighting Spirit."
          date="14 Feb 2022"
          author="GEMMA GRACEWOOD"
        />

        <hr className="w-[75vw] m-2 " />
        <span className="absolute bottom-3 right-0 text-[#9AB] text-xs cursor-pointer hover:text-[#445566]">
          older Articles
        </span>
      </div>
    </section>
  );
}

export default SecondSe;
