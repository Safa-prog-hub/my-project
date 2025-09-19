import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({ uname: "", psw: "" });
  const [errors, setErrors] = useState({});

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // validation function
  const validate = () => {
    let newErrors = {};
    if (!form.uname.trim()) {
      newErrors.uname = "Username is required";
    }
    if (!form.psw.trim()) {
      newErrors.psw = "Password is required";
    } else if (form.psw.length < 6) {
      newErrors.psw = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Login Successful 🚀");
    }
  };

  return (
    <div className="login-page">
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left side - Login Form */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="login-card p-4 shadow rounded">
              <h3 className="text-center mb-4">Login</h3>
              <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="mb-3">
                  <label htmlFor="uname" className="form-label">
                    Enter Username
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.uname ? "is-invalid" : ""
                    }`}
                    id="uname"
                    name="uname"
                    value={form.uname}
                    placeholder="Enter username here"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {errors.uname && (
                    <div className="invalid-feedback">{errors.uname}</div>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="psw" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="psw"
                    name="psw"
                    className={`form-control ${
                      errors.psw ? "is-invalid" : ""
                    }`}
                    value={form.psw}
                    placeholder="Enter your password"
                    onChange={handleChange}
                  />
                  {errors.psw && (
                    <div className="invalid-feedback">{errors.psw}</div>
                  )}
                </div>

                <button type="submit" className="btn btn-info w-100">
                  Login
                </button>
              </form>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="col-12 col-md-6 text-center">
            <img
              src="imgs/18.jpg"
              className="img-fluid img-thumbnail shadow"
              alt="Login visual"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
