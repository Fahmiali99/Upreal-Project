/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Founder from "../../../assets/images/about/user.png";
import { BsInstagram } from "react-icons/bs";

function Profile() {
  return (
    <div className=" ">
      <div className=" text-center py-14">
        <h className="text-md text-light font-montserrat">
          DON'T THINK, JUST DO!
        </h>
        <h1 className=" md:text-5xl pb-2 background-animate bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-green-50 to-slate-100 ... font-montserratFat pt-6">
          FOUNDER
        </h1>
        <p className="text-light font-montserratFit mr-4 ml-4">
          Our greatest weakness lies in giving up. The most certain way to
          succeed is always to try just one more time.
        </p>
        <div className="w-full flex justify-center py-10">
          <div className=" w-5/6 sm:w-3/6 md:w-2/6 rounded-xl p-3 card-profile">
            <div className="py-3">
              <div className="card-body items-center text-center ">
                <figure className="">
                  <img
                    src={Founder}
                    width={100}
                    alt="Shoes"
                    className="rounded-full "
                  />
                </figure>
                <h4 className="font-montserrat text-light">Mekki Patria</h4>
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
