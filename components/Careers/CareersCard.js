import React from "react";

export default function CareersCard(props) {
  return (
    <div style={{ fontFamily: "Montserrat" }} className="mt-20">
      <div className="bg-black md:w-full min-h-20 text-white p-5">
        {props.title}
        <span className="ml-3 text-secondary">{props.description}</span>
        <div className="text-right mt-3">
          <button className="bg-white p-3 text-black">Apply</button>
        </div>
      </div>
    </div>
  );
}
