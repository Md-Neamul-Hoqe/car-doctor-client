import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Credentials = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formInfo, setFormInfo] = useState({});

  console.log(location);

  const { createUser, signIn } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;

    console.log(form);

    const name = form?.name?.value;
    const email = form?.email?.value;
    const password = form?.password?.value;

    console.log(name, password);

    event.target.reset();

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message.split(/[/,)]/)[1]);
        console.log(error.message.includes("weak-password"));
      });
    // email-already-in-use /* For email already in the firebase users list */
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form?.name?.value;
    const email = form?.email?.value;
    const password = form?.password?.value;

    console.log(name, password);

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        const userEmail = { email };

        axios
          .post("http://localhost:5000/jwt", userEmail, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // console.error(error.message.split(/[/,)]/)[1]);
        // console.log(error.message.includes("invalid-login-credentials"));
        // invalid-login-credentials /* For invalid email / password */
        error.message.includes("invalid-login-credentials") &&
          Swal.fire("Error", "Email Or Password Incorrect.", "error");
      });
  };

  useEffect(() => {
    const register = {
      heading: "Register An Account",
      Labels: ["Name", "Email", "Password"],
      Names: ["name", "email", "password"],
      placeholder: ["name", "email", "password"],
      types: ["text", "email", "password"],
      submit: "Register",
      switch: ["Already have an account ?", "/login", " Login"],
    };

    const login = {
      heading: "Login Now",
      Labels: ["Email", ["Password", "Forgot password?"]],
      Names: ["email", "password"],
      placeholder: ["email", "password"],
      types: ["email", "password"],
      submit: "Login",
      switch: ["New here?", "/register", " Register"],
    };

    if (location.pathname === "/register") return setFormInfo(register);

    return setFormInfo(login);
  }, [location]);

  return (
    <section className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-20 w-full px-40">
        <div className="flex-1">
          <img src={img} alt="Register" />
        </div>

        {Object.keys(formInfo).length && (
          <div className="card flex-1 w-full border">
            <h1 className="text-[40px] font-semibold text-center text-sub-heading pt-10">
              {formInfo?.heading}
            </h1>
            <form
              onSubmit={
                formInfo?.submit === "Register" ? handleRegister : handleLogin
              }
              className="card-body">
              {formInfo?.Labels.map((label, idx) => (
                <div key={idx} className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-xl text-sub-heading">
                      {Array.isArray(label) ? label[0] : label}
                    </span>
                  </label>
                  <input
                    type={formInfo?.types[idx]}
                    placeholder={formInfo?.placeholder[idx]}
                    name={formInfo.Names[idx]}
                    className="input input-bordered text-base leading-7"
                    required
                  />
                  {Array.isArray(label) && (
                    <label className="label">
                      <a
                        href="#"
                        className="label-text font-semibold text-xl text-sub-heading link link-hover">
                        {label[1]}
                      </a>
                    </label>
                  )}
                </div>
              ))}

              <div className="form-control mt-6">
                <button className="btn text-logo-red border-logo-red">
                  {formInfo?.submit}
                </button>
              </div>
              <div className="text-heading">
                {formInfo?.switch[0]}
                <Link className="text-logo-red" to={formInfo?.switch[1]}>
                  {formInfo?.switch[2]}
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Credentials;
