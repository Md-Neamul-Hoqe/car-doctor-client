import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();

  const handleCheckout = (e) => {
    e.preventDefault();

    const form = e.target;
    const fName = form.fName.value;
    const lName = form.lName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const booking = {
      customer: {
        name: fName + " " + lName,
        email,
        phone,
        message,
        date: new Date(),
      },
      product: service,
    };

    axios
      .post("http://localhost:5000/checkout", booking, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res?.data.insertedId);
        if (res?.data.insertedId)
          Swal.fire("success", "One product added to your cart", "success");
      });
      
    // fetch("http://localhost:5000/checkout", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(booking),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.insertedId);
    //     if (data.insertedId)
    //       Swal.fire("success", "One product added to your cart", "success");
    //   });
  };

  return (
    <div>
      <Banner bannerInfo={{ heading: "Check Out", breadcrumb: "Checkout" }} />

      <section>
        <div className="card w-full border mb-24">
          <form
            onSubmit={handleCheckout}
            className="card-body flex-col gap-6 bg-form-bg p-24">
            <div className="flex justify-between gap-6">
              <div className="form-control flex-1">
                <label className="label sr-only">
                  <span className="label-text font-semibold text-xl text-sub-heading">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="fName"
                  defaultValue="Muhammad"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control flex-1">
                <label className="label sr-only">
                  <span className="label-text font-semibold text-xl text-sub-heading">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lName"
                  defaultValue="Neamul"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex justify-between gap-6">
              <div className="form-control flex-1">
                <label className="label sr-only">
                  <span className="label-text font-semibold text-xl text-sub-heading">
                    Your Phone
                  </span>
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  name="phone"
                  defaultValue="01725958889"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control flex-1">
                <label className="label sr-only">
                  <span className="label-text font-semibold text-xl text-sub-heading">
                    Your Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <textarea
              className="textarea textarea-bordered"
              name="message"
              defaultValue="I booked this product."
              placeholder="Your Message"></textarea>
            <div className="form-control mt-6">
              <button className="btn btn-lg leading-8 btn-block text-white font-semibold text-[30px] bg-logo-red border-logo-red">
                Order Confirm
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
