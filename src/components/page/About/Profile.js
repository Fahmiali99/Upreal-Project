import React from "react";
import Founder from "../../../assets/images/about/user.png";
import { BsInstagram } from "react-icons/bs";

function Profile() {
  return (
    <div className=" ">
      <div className=" text-center py-14">
        <h6 className="text-light font-montserrat">DON'T THINK, JUST DO!</h6>
        <h1 className="background-animate bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-green-50 to-slate-100 ... font-montserratFat pt-6">
          FOUNDER
        </h1>
        <p className="text-light font-montserratFit mr-4 ml-4">
          Our greatest weakness lies in giving up. The most certain way to
          succeed is always to try just one more time.
        </p>
        <div className="w-full flex justify-center py-10">
          <div class=" w-5/6 sm:w-3/6 md:w-2/6 rounded-xl p-3 card-profile">
            <div className="py-3">
              <div class="card-body items-center text-center ">
                <figure class="">
                  <img
                    src={Founder}
                    width={100}
                    alt="Shoes"
                    className="rounded-full "
                  />
                </figure>
                <h4 class="font-montserrat text-light">Mekki Patria</h4>
                <a href="https://www.instagram.com/mekkipat/">
                  <BsInstagram className=" text-xl text-light" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
