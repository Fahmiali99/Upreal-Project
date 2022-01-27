import React from "react";
import CustomArrows from "./CustomArrows";
import LazyLoad from "./LazyLoad";
// import MultipleItems from "./MultipleItems";

function SectionBlogThree() {
  return (
    <div className="pageabout-3 bg-light">
      <div class="padding-y-xxl position-relative z-index-1">
        <div class="container max-width-adaptive-sm position-relative z-index-2">
          <div class="text-component margin-bottom-sm  pt-5 text-center">
            <h1>
              <b> Gallery Kegiatan </b>
            </h1>
            <p>
              Anda bisa mencari berita relevan kegiatan yang berkaitan dengan
              himpunan pilih kategori sesuai pilihan anda
            </p>
          </div>

          <div class="container pt-3">
            <CustomArrows />
            <LazyLoad />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionBlogThree;
