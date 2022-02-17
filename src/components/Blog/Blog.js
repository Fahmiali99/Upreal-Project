import React from "react";
import SectionBlogOne from "./SectionBlogOne";
import SectionBlogThree from "./SectionBlogThree";
import SectionBlogTwo from "./SectionBlogTwo";

function Blog() {
  return (
    <div className="pt-5">
      <SectionBlogOne />
      <SectionBlogTwo />
      <SectionBlogThree />
    </div>
  );
}

export default Blog;
