import { useEffect, useRef, useState } from "react";
import "./App.css";
import Home from "./Home.js";
import { useForm } from "react-hook-form";

function App() {
  const userFirstName = useRef("");
  const userLastName = useRef("");
  const emailaddress = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const userEmail = localStorage.getItem("signIn");
  const localEmail = localStorage.getItem("emailaddress");
  const userPassword = localStorage.getItem("password");
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userEmail) {
      setShow(true);
    }

    if (localEmail) {
      setPage(true);
    }
  }, []);

  const Registeration = () => {
    if (
      userFirstName.current.value === userFirstName.current.value &&
      userLastName.current.value  === userLastName.current.value&&
      emailaddress.current.value === emailaddress.current.value &&
      password.current.value  === password.current.value &&
      confirmPassword.current.value === password.current.value
    ) {
      localStorage.setItem("FirstName", userFirstName.current.value);
      localStorage.setItem("LastName", userLastName.current.value);
      localStorage.setItem("emailaddress", emailaddress.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("confirmpassword", confirmPassword.current.value);
      localStorage.setItem("signIn", emailaddress.current.value);
      window.location.reload();
    }
   else {

    console.log(userFirstName,"userFirst");
   }
  };

  const handleLogin = () => {
    if (
      emailaddress.current.value === localEmail &&
      password.current.value === userPassword
    ) {
      localStorage.setItem("signIn", emailaddress.current.value);
      window.location.reload();
    } else {
      console.log(emailaddress.current.value);
      console.log(password.current.value);
    }
  };
  return (
    <div>
      {show ? (
        <Home />
      ) : page ? (
        <div className="container">
          <form className="Register-Form" onSubmit={handleSubmit(handleLogin)}>
            <input
              type="Text"
              className="input-value"
              placeholder="emailaddress"
              ref={emailaddress}
            />
            <input
              type="password"
              className="input-value"
              placeholder="Password"
              ref={password}
            />
            <button>Login </button>
          </form>
        </div>
      ) : (
        <div className="container">
          <form
            className="Register-Form"
            onSubmit={handleSubmit(Registeration)}
          >
            <input
              type="Text"
              className="input-value"
              placeholder="First Name"
              ref={userFirstName}
              {...register("userFirstName", { required: true })}
            />
            {errors.userFirstName && <span>Please Enter the First Name</span>}

            <input
              type="Text"
              className="input-value"
              placeholder="Last Name"
              ref={userLastName}
              {...register("userLastName", { required: true })}
            />
            {errors.userLastName && <span>Please Enter the Last Name</span>}

            <input
              type="Text"
              className="input-value"
              placeholder="emailaddress"
              ref={emailaddress}
              {...register("emailaddress", { required: true })}
            />
            {errors.emailaddress && <span>Please Enter the emailaddress</span>}

            <input
              type="password"
              className="input-value"
              placeholder="Password"
              ref={password}
              {...register("password", { required: true })}
            />
            {errors.password && <span>Please Enter the password</span>}

            <input
              type="password"
              className="input-value"
              placeholder="Confirm-Password"
              ref={confirmPassword}
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <span>Please Enter the confirm password</span>
            )}

            <button>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
