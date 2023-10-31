import calender from "../../../assets/icons/calender.svg";
import call from "../../../assets/icons/call.svg";
import location from "../../../assets/icons/location.svg";

const Stat = () => {
  return (
    <div className="stats bg-heading shadow w-full py-20 px-16 mb-24">
      <div className="stat flex flex-row gap-4">
        <div className="stat-figure text-primary">
          <img src={calender} className="text-3xl text-logo-red" />
        </div>
        <div className="flex flex-col">
          <div className="stat-title text-base text-white">
            We are open Sunday-Thursday
          </div>
          <div className="stat-value text-white text-2xl">
            7:00 am - 9:00 pm
          </div>
        </div>
      </div>

      <div className="stat flex flex-row gap-4">
        <div className="stat-figure text-primary">
          <img src={call} className="text-3xl text-logo-red" />
        </div>
        <div className="flex flex-col">
          <div className="stat-title text-base text-white">
            Have a question?
          </div>
          <div className="stat-value text-white text-2xl">+2546 251 2658</div>
        </div>
      </div>

      <div className="stat flex flex-row gap-4">
        <div className="stat-figure text-primary">
          <img src={location} className="text-3xl text-logo-red" />
        </div>
        <div className="flex flex-col">
          <div className="stat-title text-base text-white">
            Need a repair? our address
          </div>
          <div className="stat-value text-2xl text-white">
            Liza Street, New York
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
