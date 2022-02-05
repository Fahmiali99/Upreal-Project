import React from "react";

const Service = () => {
  return (
    <div>
      <div className="container">
        <h2 className="text-center">Jasa yang tersedia</h2>
        <p className="text-center">
          Anda dapat memilih jasa yang tersedia di UPREAL
        </p>
        <div class="tz-gallery">
          <div className="container mb-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="lightbox card h-100 card-kegiatan">
                  <div className="container text-center p-3 color-content">
                    <img src="/assets/img/home/fa1.png" alt="" width="50%" />
                  </div>
                  <div className="container text-center mt-3">
                    <h4>Logo Design</h4>
                    <button type="button" class="btn btn-success mt-3 mb-4">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="lightbox card h-100 card-kegiatan">
                  <div className="container text-center p-3 color-content">
                    <img src="/assets/img/home/fa2.png" alt="" width="50%" />
                  </div>
                  <div className="container text-center mt-3">
                    <h4>Flyer design</h4>
                    <button type="button" class="btn btn-success mt-3 mb-4">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="lightbox card h-100 card-kegiatan">
                  <div className="container text-center p-3 color-content">
                    <img src="/assets/img/home/fa3.png" alt="" width="50%" />
                  </div>
                  <div className="container text-center mt-3">
                    <h4>Poster design</h4>
                    <button type="button" class="btn btn-success mt-3 mb-4">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="lightbox card h-100 card-kegiatan">
                  <div className="container text-center p-3 color-content">
                    <img src="/assets/img/home/fa4.png" alt="" width="50%" />
                  </div>
                  <div className="container text-center mt-3">
                    <h4>Instagram feed design</h4>
                    <button type="button" class="btn btn-success mt-3 mb-4">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="lightbox card h-100 card-kegiatan">
                  <div className="container text-center p-3 color-content">
                    <img src="/assets/img/home/fa5.png" alt="" width="50%" />
                  </div>
                  <div className="container text-center mt-3">
                    <h4>Video editor</h4>
                    <button type="button" class="btn btn-success mt-3 mb-4">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="lightbox card h-100 card-kegiatan">
                  <div className="container text-center p-3 color-content">
                    <img src="/assets/img/home/fa6.png" alt="" width="50%" />
                  </div>
                  <div className="container text-center mt-3">
                    <h4>Many more</h4>
                    <button type="button" class="btn btn-success mt-3 mb-4">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
