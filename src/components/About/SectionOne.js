import React from "react";

function SeactionOne() {
  return (
    <div className="aboutpage">
      <div className=" text-center pt-5 pb-5">
        <div className="mt-5 pt-5 mb-5 pb-5">
          <div className="container title mt-5 pt-4 mb-5 pb-5">
            <h1> Kamu Ingin Mencari Jasa</h1>
            <div className="contianer d-flex justify-content-center">
              <p className="w-75">
                Disini Solusi anda dapat terselesaikan, kami menawarkan beberapa
                jasa yang tersedia di Upreal. Kami memberikan pelayanan yang
                ramah di kantong anda, buruan order yuk.
              </p>
            </div>
            <button type="button" class="btn btn-primary">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeactionOne;
