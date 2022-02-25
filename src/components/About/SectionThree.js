import React from "react";

function SectionThree() {
  return (
    <div className="aboutpage-3">
      <div className="w-100 d-flex justify-content-center pt-5 pb-5">
        <div className=" col-md-9">
          <div className="title-about text-center">
            <h2>Structur in Upreal</h2>
          </div>

          <div className="w-100 d-felx justify-content-center">
            <div className="row row-cols-1 row-cols-md-2 g-3 pb-4">
              <div className="col bg-light">
                <div className="d-flex ">
                  <div className="">
                    <img
                      src="assets/img/about/aboutIcons/plan.png"
                      alt=""
                      width="30%"
                    />
                  </div>
                  <div className="">
                    <h3>Zenity for IBPMS</h3>
                    <p>
                      Lorem ipsum, atau ringkasnya lipsum, adalah teks standar
                      yang ditempatkan untuk mendemostrasikan elemen grafis atau
                      presentasi
                    </p>
                  </div>
                </div>
              </div>
              <div className="col bg-warning">
                {" "}
                <h4>Hello 1</h4>{" "}
              </div>
              <div className="col bg-success">
                {" "}
                <h4>Hello 1</h4>{" "}
              </div>
              <div className="col bg-warning">
                {" "}
                <h4>Hello 1</h4>{" "}
              </div>
              <div className="col bg-success">
                {" "}
                <h4>Hello 1</h4>{" "}
              </div>
              <div className="col bg-warning">
                {" "}
                <h4>Hello 1</h4>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
