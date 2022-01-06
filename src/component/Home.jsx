import React from "react";
import Service from "./Home/Service";

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
      <Service />
    </div>
  );
};

export default Home;
