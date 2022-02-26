import React from "react";

function SectionFour() {
  return (
    <div className="banner-map">
      <div className="sub-banner-map position-absolute"></div>
      <div className="w-100 d-flex justify-content-center parent-tax ">
        <div className="col-md-9 ">
          <div class="pb-5 pt-4 mt-4">
            <div className="pb-3">
              <h1 className="text-center">Lokasi kami saat ini</h1>
            </div>
            <div class="row">
              <div class="col-sm">
                <div className="responsive-map d-flex justify-content-center mt-3">
                  <iframe
                    className="rounded"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63188.879439919234!2d113.70701207306392!3d-8.171999945543913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695d6ab36ba7f%3A0xedcc47c2999d52f2!2sKec.%20Sumbersari%2C%20Kabupaten%20Jember%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1644839326072!5m2!1sid!2sid"
                    width="400"
                    height="600"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div class="col-sm mx-md-4">
                <div className="pt-3 ">
                  <p>
                    Lorem ipsum, atau ringkasnya lipsum, adalah teks standar
                    yang ditempatkan untuk mendemostrasikan elemen grafis atau
                    presentasi visual seperti font, tipografi, dan tata letak.
                    <br />
                    <br />
                    Lorem ipsum, atau ringkasnya lipsum, adalah teks standar
                    yang ditempatkan untuk mendemostrasikan elemen grafis atau
                  </p>
                  <a href="https://goo.gl/maps/Cqef2oAHH6v4xUCf8">
                    <button type="button" class="btn btn-primary">
                      Open Maps
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
