import React from "react";
import Card from "./Card";

function FourthSection() {
  return (
    <section className="fourth-section">
      {/* divider  */}
      <hr className="w-[75vw] mx-auto mt-24 " />
      <div className="flex justify-between w-[75vw] m-auto">
        <p className="text-[#9AB]">
          <span className="font-bold text-[#445566]">Spotlight</span> Favorites
          from the Letterboxd archive.
        </p>
        <span className="text-[#9AB] text-xs cursor-pointer hover:text-[#445566]">
          More{" "}
        </span>
      </div>

      {/* content container */}
      <div className="content-container w-[65vw] mt-12 mx-auto grid grid-cols-2 gap-[3.5rem]">
        <Card
          img="./images/fourth-section1.jpg"
          category="Big picture"
          title="Careful how you go."
          date="11 March 2021"
          author="ELLA KEMP"
        />
        <Card
          img="./images/fourth-section2.jpg"
          category="Big picture"
          title="Driven to Love."
          date="13 March 2021"
          author="MITCHELL BEAUPRE"
        />
        <Card
          img="./images/fourth-section3.jpg"
          category="Cinemascope"
          title="Eva After."
          date="10 March 2021"
          author="KAMBOLE CAMPBELL"
        />
        <Card
          img="./images/fourth-section4.jpg"
          category="Deep impact"
          title="Rewatching: The Truman Show."
          date="11 March 2022"
          author=" DOMINIC CORRY"
        />
      </div>
    </section>
  );
}

export default FourthSection;
