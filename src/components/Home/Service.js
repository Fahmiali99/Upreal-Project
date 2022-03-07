import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div id="layanan">
      <div className=" service-background ">
        <h2 className="text-center pt-5">Jasa yang tersedia</h2>
        <p className="text-center pb-5">
          Anda dapat memilih jasa yang tersedia di UPREAL
        </p>
        <div class="tz-gallery pb-5">
          <div className="w-100 d-flex justify-content-center">
            <div className="col-md-10">
              <div className="row row-cols-1 row-cols-md-3 g-4 pb-4">
                <div className="col ">
                  <div className="lightbox card h-100 card-kegiatan rad-home-parent">
                    <div className="container text-center p-3 color-content rad-home">
                      <img src="/assets/img/home/fa1.png" alt="" width="50%" />
                    </div>
                    <div className="d-flex align-items-center h-100 p-4">
                      <div className="container text-center ">
                        <h4 className="pb-2">Logo Design</h4>
                        <Link className="" to="/Logo">
                          <button type="button" class="btn btn-success ">
                            Order Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="lightbox card h-100 card-kegiatan rad-home-parent">
                    <div className="container text-center p-3 color-content rad-home">
                      <img src="/assets/img/home/fa2.png" alt="" width="50%" />
                    </div>
                    <div className="d-flex align-items-center h-100 p-4">
                      <div className="container text-center">
                        <h4 className="pb-2">Flyer design</h4>
                        <Link className="" to="/Flyer">
                          <button type="button" class="btn btn-success ">
                            Order Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="lightbox card h-100 card-kegiatan rad-home-parent">
                    <div className="container text-center p-3 color-content rad-home">
                      <img src="/assets/img/home/fa3.png" alt="" width="50%" />
                    </div>
                    <div className="d-flex align-items-center h-100 p-4">
                      <div className="container text-center ">
                        <h4 className="pb-2">Poster design</h4>
                        <Link className="" to="/Poster">
                          <button type="button" class="btn btn-success ">
                            Order Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="lightbox card h-100 card-kegiatan rad-home-parent">
                    <div className="container text-center p-3 color-content rad-home">
                      <img src="/assets/img/home/fa4.png" alt="" width="50%" />
                    </div>
                    <div className="d-flex align-items-center h-100 p-4">
                      <div className="container text-center ">
                        <h4 className="pb-2">Instagram feed design</h4>
                        <Link className="" to="/Instagram">
                          <button type="button" class="btn btn-success ">
                            Order Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="lightbox card h-100 card-kegiatan rad-home-parent">
                    <div className="container text-center p-3 color-content rad-home">
                      <img src="/assets/img/home/fa5.png" alt="" width="50%" />
                    </div>
                    <div className="d-flex align-items-center h-100 p-4">
                      <div className="container text-center ">
                        <h4 className="pb-2">Video editor</h4>
                        <Link className="" to="/Video">
                          <button type="button" class="btn btn-success ">
                            Order Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="lightbox card h-100 card-kegiatan rad-home-parent">
                    <div className="container text-center p-3 color-content rad-home">
                      <img src="/assets/img/home/fa6.png" alt="" width="50%" />
                    </div>
                    <div className="d-flex align-items-center h-100 p-4">
                      <div className="container text-center ">
                        <h4 className="pb-2">Many more</h4>
                        <Link className="" to="/More">
                          <button type="button" class="btn btn-success ">
                            Order Now
                          </button>
                        </Link>
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
};

export default Service;
