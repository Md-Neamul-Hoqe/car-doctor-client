import axios from "axios";
import Banner from "../Shared/Banner/Banner";

const AddProduct = () => {
  const handleCheckout = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const facility = form.facility.value;
    const service_id = form.service_id.value;
    const description = form.description.value;
    const ratings = form.ratings.value;
    const img = form.img.value;

    const car = {
      title,
      price,
      ratings,
      img,
      service_id,
      description,
      facility: facility.split(/[}{]/),
    };

    console.log(title, price, facility, service_id, description);

    axios
      .post("http://localhost:5000/services", car)
      .then((res) => console.log(res.data));

    // fetch("http://localhost:5000/services", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(car),
    // })
    //   .then((res) => res.json())
    //   .then(console.log);
  };

  return (
    <div>
      <Banner
        bannerInfo={{ heading: "Add Product", breadcrumb: "Add product" }}
      />

      <section>
        <div className="card w-full border mb-24">
          <form
            onSubmit={handleCheckout}
            className="card-body flex-col gap-6 bg-form-bg p-24">
            <div className="flex justify-between gap-6">
              <div className="form-control flex-1">
                <label className="label sr-only">
                  <span className="label-text font-semibold text-xl text-sub-heading">
                    Service Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Service Name"
                  name="title"
                  defaultValue="Ranch Afghan"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control flex-1">
                <label className="label sr-only">
                  <span className="label-text font-semibold text-xl text-sub-heading">
                    Service Price
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="$200"
                  name="price"
                  defaultValue="200"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex justify-between gap-6">
              <div className="form-control flex-1">
                <label className="label sr-only">
                  <span className="label-text font-semibold text-xl text-sub-heading">
                    Facility
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Facility"
                  name="facility"
                  defaultValue="Instant Car Services. | Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. || 24/7 Quality Service | Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control flex-1">
                <label className="label sr-only">
                  <span className="label-text font-semibold text-xl text-sub-heading">
                    Ratings
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Service Type"
                  name="type"
                  defaultValue="Free of shipping"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex justify-between gap-6">
              <div className="form-control flex-1">
                <label className="label sr-only">
                  <span className="label-text font-semibold text-xl text-sub-heading">
                    Service Id
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Service Id"
                  name="service_id"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control flex-1">
                <label className="label sr-only">
                  <span className="label-text font-semibold text-xl text-sub-heading">
                    Ratings
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Ratings 0 to 5"
                  name="ratings"
                  defaultValue="3"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex justify-between gap-6">
              <div className="form-control flex-1">
                <label className="label sr-only">
                  <span className="label-text font-semibold text-xl text-sub-heading">
                    Photo
                  </span>
                </label>
                <input
                  type="url"
                  placeholder="Service Photo URL"
                  name="img"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control flex-1">
                <textarea
                  className="textarea textarea-bordered"
                  name="description"
                  defaultValue="Unique service. The description of this service here."
                  placeholder="Your Message"></textarea>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-lg leading-8 btn-block text-white font-semibold text-[30px] bg-logo-red border-logo-red">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
