import React from "react";

export default function SectionBlogThree() {
  return (
    <div className="pageabout-3">
      <div class="container">
        <h2>Filter Anything</h2>
        <p>
          Type something in the input field to search for a specific text inside
          the div element with id="myDIV":
        </p>

        <input
          class="form-control"
          id="myInput"
          type="text"
          placeholder="Search.."
        />
        <div id="myDIV">
          <p>I am a paragraph.</p>
          <div>I am a div element inside div.</div>
          <button class="btn">I am a button</button>
          <button class="btn btn-info">Another button</button>
          <p>Another paragraph.</p>
        </div>
      </div>
    </div>
  );
}

document.ready(function () {
  "#myInput".on("keyup", function () {
    var value = this.val().toLowerCase();
    "#myDIV *".filter(function () {
      this.toggle(this.text().toLowerCase().indexOf(value) > -1);
    });
  });
});
