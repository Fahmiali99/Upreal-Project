import React from "react";

const Home = () => {
  return (
    <div className="homepage ">
      <div class="container d-flex align-items-center tinggi">
        <div class="row h-100 d-flex align-items-center">
          <div class="col-sm-6">
            <div class="card-body">
              <h1 class="card-title">Selamat datang di UPREAL</h1>
              <p class="card-text">
                Upreal menyediakan banyak jasa yang dapat di pilih sesuai yang
                di butuhkan konsumen. Jika anda ingin meneruskan bisa klik I'm
                Order.
              </p>
              <a href="#" class="btn btn-primary">
                I'm Order
              </a>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card-body d-flex justify-content-center">
              <img src="/assets/img/home/baner.svg" alt="" width="70%" />
            </div>
          </div>
        </div>
      </div>

      <div class="container d-flex align-items-center mb-5">
        <div class="row h-100 d-flex align-items-center">
          <div class="col-sm-6">
            <div class="card-body d-flex justify-content-center">
              <img src="/assets/img/home/baner.svg" alt="" width="70%" />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card-body">
              <h1 class="card-title">About Us</h1>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                adipisci aliquam dolorem necessitatibus consequuntur numquam rem
                totam nesciunt! Illum suscipit corrupti accusamus, ea asperiores
                cupiditate nihil vero dicta distinctio voluptatum.
              </p>
              <a href="#" class="btn btn-primary">
                I'm Order
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 class="text-center">Jasa yang tersedia</h2>
        <p class="text-center">
          Anda dapat memilih jasa yang tersedia di UPREAL
        </p>

        <div class="container w-100 d-flex justify-content-center mb-4 mt-4">
          <div class="row">
            <div class="col-sm">
              <div className="mt-2 mb-2">
                <div className=" shadow-content">
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
            </div>
            <div class="col-sm">
              <div className="mt-2 mb-2">
                <div className="shadow-content">
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
            </div>
            <div class="col-sm">
              <div className="mt-2 mb-2">
                <div className="shadow-content">
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
            </div>
          </div>
        </div>
        <div class="container w-100 d-flex justify-content-center mb-4 ">
          <div class="row ">
            <div class="col-sm">
              <div className="mb-2 mt-2">
                <div className="shadow-content">
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
            </div>
            <div class="col-sm">
              <div className="mt-2 mb-2">
                <div className="shadow-content">
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
            </div>
            <div class="col-sm">
              <div className="mt-2 mb-2">
                <div className="shadow-content">
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

export default Home;
