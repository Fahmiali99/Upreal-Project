import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import tips from "../../../../utils/tips.json";

const Body = () => {
  const [search, setSearch] = useState(tips);

  function filterData(e) {
    const filterBlog = tips.filter((search) => {
      return search.judul
        .toLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
    setSearch(filterBlog);
  }

  return (
    <div>
      <div className="text-center py-16 ">
        <h1 className="text-light font-montserratFat">Blog Design</h1>
        <p className="text-light  font-montserratFit">
          Beberapa referensi dan manfaat menggunakan tools design bersama
          Upreal.
        </p>
        <div className="ml-3 mr-3">
          <input
            type="input"
            placeholder="Find something ..."
            className="input w-full max-w-xs bg-light font-montserrat outline-hidden"
            onChange={filterData}
          />
        </div>
      </div>
      <div className="container mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {search.map((item) => {
            const data = item.category;
            return (
              <div
                key={item.slug}
                className=" w-full bg-base-100 shadow-xl bg-light rounded-xl"
              >
                <Link
                  to={"/blog/" + item.slug}
                  className=" text-decoration-none text-dark"
                >
                  <figure className=" ">
                    <img
                      src={require("../../../../assets/images/blog/" +
                        item.thumbnail)}
                      className="w-full rounded-t-lg"
                      alt={item.judul}
                    />
                  </figure>
                  <div className="card-body px-3 pb-3">
                    <h2 className="card-title">{item.judul}</h2>
                    <div className="badge bg-transparent border-none text-secondary  items-center"></div>
                    <p>{item.tanggal}</p>

                    <div className="flex justify-end">
                      {data.map((tips) => (
                        <div
                          className="border badge-outline border-none rounded-lg ml-1 mr-1 pl-2 pr-2 color"
                          style={{ background: `${tips.color}` }}
                        >
                          {tips.title}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
