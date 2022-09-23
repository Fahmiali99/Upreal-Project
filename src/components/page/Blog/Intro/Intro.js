import React from "react";

function Intro() {
  return (
    <div className="text-center py-16">
      <h1 className="text-light font-montserratFat">Blog Design</h1>
      <p className="text-light  font-montserratFit">
        Beberapa referensi dan manfaat menggunakan tools design bersama Upreal.
      </p>

      <input
        type="text"
        placeholder="Type here"
        className="input w-full max-w-lg bg-light"
      />
    </div>
  );
}

export default Intro;
