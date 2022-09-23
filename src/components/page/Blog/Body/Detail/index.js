import React from "react";
import { useParams } from "react-router-dom";
import tips from "../../../../../utils/tips.json";

function Artikel() {
  const params = useParams();
  const tipsSelected = tips.find((item) => {
    return item.slug === params.slug;
  });
  return (
    <div>
      <section className="padding-y-xxl position-relative z-index-1 pt-3 pb-5">
        <div className="container max-width-adaptive-sm position-relative z-index-2">
          <div className="text-component margin-bottom-sm pt-5 ">
            <h1 className="text-light">{tipsSelected.judul}</h1>
            <p className="text-light">Upreal / {tipsSelected.tanggal}</p>
          </div>
        </div>

        <div className="container pt-3">
          <img
            src={require("../../../../../assets/images/blog/" +
              tipsSelected.thumbnail)}
            className="img-fluid w-100 rounded"
            alt={tipsSelected.thumbnail}
          />
        </div>

        <div className="container pt-4 ">
          <p className="text-light">Hallo guys.</p>

          <p className="text-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
            harum quasi deserunt earum sapiente laboriosam provident similique
            nulla doloribus ratione fuga corporis repellendus nobis aliquid?
            Praesentium numquam quasi, doloribus veritatis vel harum magnam
            quaerat, impedit aut a odit? Corporis magni assumenda eveniet, earum
            libero aspernatur, illum provident quam, asperiores minima enim
            facere totam debitis. Incidunt similique nobis eaque alias obcaecati
            dignissimos provident consectetur ad exercitationem, eveniet vel
            nemo perferendis architecto, beatae suscipit accusamus, voluptates
            qui! Impedit, nobis aperiam? Sit, molestiae doloribus. Fugit
            aliquam, magnam ipsa sapiente repellat modi accusamus quia beatae
            doloremque magni ipsum aut dolorem suscipit possimus explicabo
            temporibus?
          </p>

          <p className="text-light">
            Rem architecto totam iusto ratione! Corrupti cupiditate similique,
            perspiciatis et error quasi molestias id, ab facere eligendi qui
            dignissimos dolores nisi voluptate voluptatum eaque excepturi odit
            incidunt reiciendis rerum laborum nobis. Alias, repudiandae. Tempora
            voluptatibus asperiores molestias, nulla corrupti ipsa molestiae
            laboriosam!
          </p>

          <p className="text-light">
            Nisi doloremque dicta sequi inventore ut cupiditate dolores
            consequatur dolor provident hic nihil assumenda aspernatur vero
            voluptatum tempore, numquam consectetur obcaecati ipsam commodi cum
            vitae quos sed. Ipsum accusamus vitae nobis molestiae deserunt
            blanditiis explicabo iste debitis culpa eveniet, cumque sit
            perferendis hic quisquam sequi? Quidem, enim. Laborum repellendus
            perferendis officia at minus, inventore tenetur maiores deleniti
            excepturi, debitis ea officiis tempora explicabo quibusdam, vitae
            optio! Harum ipsum quas corporis, autem voluptatem et voluptatum
            animi aperiam similique necessitatibus inventore iusto omnis magni
            asperiores culpa architecto aspernatur, nostrum recusandae nobis
            veritatis velit. Autem recusandae, a in animi repellendus, debitis,
            ex quasi illo voluptatum hic eligendi velit iste veniam numquam
            necessitatibus veritatis alias quam exercitationem. Nesciunt
            reprehenderit dicta earum, dolore ea dolores placeat.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Artikel;
