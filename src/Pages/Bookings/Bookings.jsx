import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Banner from "../Shared/Banner/Banner";
// import { AiFillCloseCircle } from "react-icons/ai";
import { LiaUndoSolid } from "react-icons/lia";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [selected, setSelected] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // console.log(user?.email);
    try {
      axiosSecure
        .get(`/checkout?email=${user?.email}`)
        .then((res) => setBookings(res.data));
      // fetch(`http://localhost:5000/checkout?email=${user?.email}`)
      //   .then((res) => res.json())
      //   .then(setBookings);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }, [user]);

  const handleDeleteCollection = (selected) => {
    if (!selected.length)
      return Swal.fire(
        "Sorry!",
        "We con't delete any thing. Please select what you want to delete",
        "warning"
      );

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete("/drop-cart", selected).then((res) => {
          console.log(res);

          if (res.data.deletedCount) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");

            /* remove deleted booking form cart list in UI */
            setBookings(
              bookings.filter((booking) => !selected.includes(booking._id))
            );

            /* set empty to selected list */
            setSelected([]);
          } else {
            Swal.fire("Error!", "Something Wrong.", "warning");
          }
        });

        // fetch("http://localhost:5000/drop-cart", {
        //   method: "DELETE",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(selected),
        //   credentials: "include",
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);

        //     if (data.deletedCount) {
        //       Swal.fire("Deleted!", "Your file has been deleted.", "success");

        //       /* remove deleted booking form cart list in UI */
        //       setBookings(
        //         bookings.filter((booking) => !selected.includes(booking._id))
        //       );

        //       /* set empty to selected list */
        //       setSelected([]);
        //     } else {
        //       Swal.fire("Error!", "Something Wrong.", "warning");
        //     }
        //   });
      }
    });
  };

  const handleSelection = (id) => {
    if (bookings.length === 0) return;

    if (id === "all") {
      if (bookings.length === selected.length) {
        /* unchecked all */

        setSelected([]);
      } else {
        /* checked all */

        const allId = bookings.map((bookings) => bookings._id);

        setSelected(allId);
      }
    } else if (selected.includes(id)) {
      /* Uncheck the id */

      setSelected(selected.filter((select) => select !== id));
    } else {
      /* Check the id */

      setSelected([...selected, id]);
    }
  };

  const handleBookingConfirm = (id) => {
    /* Get the product */
    const theBooking = bookings.filter((booking) => booking._id === id);
    // if (theBooking?.status === "confirm")
    // console.log(id, theBooking);

    const status =
      theBooking[0]?.status !== "confirm"
        ? { status: "confirm" }
        : { status: "pending" };

    // console.log(status);

    axios.patch(`http://localhost:5000/checkout/${id}`, status).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        const remaining = bookings.filter((booking) => booking._id !== id);

        // theBooking.status = "confirm";
        // console.log(theBooking[0]?.status !== "confirm");
        theBooking[0]?.status !== "confirm"
          ? (theBooking[0].status = "confirm")
          : (theBooking[0].status = "pending");

        // console.log([...theBooking, ...remaining]);
        setBookings([theBooking[0], ...remaining]);
      }
      // console.log(data);
    });
  };

  return (
    <>
      <Banner
        bannerInfo={{ heading: "Cart Details", breadcrumb: "Cart details" }}
      />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    onChange={() => handleSelection("all")}
                    name="selectAll"
                    type="checkbox"
                    className="checkbox"
                    checked={
                      selected.length !== 0 &&
                      selected.length === bookings.length
                        ? true
                        : false
                    }
                  />
                </label>
              </th>
              <th>Service Info</th>
              <th>Price</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <th>
                  <label>
                    <input
                      onChange={() => handleSelection(booking._id)}
                      name="select"
                      type="checkbox"
                      className="checkbox"
                      checked={selected.includes(booking._id) ? true : false}
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={booking?.product?.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booking?.product?.title}</div>
                      <div className="text-sm opacity-50">
                        Service Id: {booking?.product?.service_id}
                      </div>
                      <div className="text-sm opacity-50">
                        Service Id: {booking?.product?.service_id}
                      </div>
                    </div>
                  </div>
                </td>
                <td>Price: ${booking.product?.price}</td>
                <td>{booking?.customer?.date}</td>
                <th>
                  {booking?.status === "confirm" ? (
                    <button
                      onClick={() => handleBookingConfirm(booking._id)}
                      className="btn bg-success text-white">
                      Approved
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBookingConfirm(booking._id)}
                      className="btn bg-logo-red text-white">
                      Pending
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
        <div className="flex justify-around text-heading text-xl pt-12 mb-24">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <LiaUndoSolid />
              Continue Shopping
            </Link>
          </div>
          <div>
            <button
              onClick={() => handleDeleteCollection(selected)}
              className="flex items-center justify-center gap-2">
              <RiDeleteBin5Line />
              Clear Shopping Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
