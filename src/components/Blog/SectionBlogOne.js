import React from "react";

function SectionBlogOne() {
  return (
    <div className="blogpage">
      <div className="banner-blog-parent ">
        <div class="py-5 z-index-1">
          <div className="w-100 d-flex justify-content-center">
            <div className="col-md-9">
              <div className="w-100 d-flex justify-content-center pt-5 mt-5 pb-5 mb-5">
                <div className="text-center">
                  <h1> Dirodi Entertaining </h1> <h1> "Blog" </h1>
                  <p>
                    dirodi entertaining blog dirodi
                    <span>
                      <br />
                      entertaing birodi blog
                    </span>
                  </p>
                  <div class="search-container">
                    <div className="search ">
                      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                        <form
                          action="/action_page.php"
                          className="d-flex align-items-center"
                        >
                          <input
                            type="text"
                            placeholder="Search.."
                            name="search"
                            class="search2 p-2 mr-5"
                          />

                          <button
                            type="button"
                            class="btn  mx-md-2 button-search mb-5 mt-5"
                          >
                            <i class="fa fa-search pr-3 pl-3 text-white"> </i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionBlogOne;
