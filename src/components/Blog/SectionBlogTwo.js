import React from "react";

function SectionBlogTwo() {
  return (
    <div className="blogpage-2 ">
      <div className="container text-center pt-5 pb-4">
        <h3>Kenapa Disini Adalah Solusimu</h3>
        <p>
          Berikut ini adalah manfaat yang akan kamu dapatkan jika kamu memakai
          jasa UPREAL
        </p>
        <div className="row">
          <div className="col-sm">
            <div className="container shadow-sm p-3 mb-2 bg-light rounded">
              <img src="/assets/img/blog/a.png" alt="" width="50%" />
              <h4>Biaya Terjangkau</h4>
              <p>
                Biaya pemesanan jasa yang kami berikan sangat ramah di kantong
                anda.
              </p>
            </div>
          </div>
          <div className="col-sm">
            <div className="container shadow-sm p-3 mb-2 bg-light rounded">
              <img src="/assets/img/blog/b.png" alt="" width="50%" />
              <h4>Fast Response</h4>
              <p>
                Pemesanan jasa disini lansung ditanganin sama owner sendiri
                tanpa ada orang kedua.
              </p>
            </div>
          </div>
          <div className="col-sm">
            <div className="container shadow-sm p-3 mb-2 bg-light rounded">
              <img src="/assets/img/blog/c.png" alt="" width="50%" />
              <h4>Sesuai Deadline</h4>
              <p>Dealine yang ditentukan tidak akan mengecewakan customer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionBlogTwo;
