import React, { useState } from "react";

function Register() {
  const [forms, setForms] = useState({
    fname: "",
    email: "",
    uname: "",
    psw: "",
    cpsw: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!forms.fname.trim()) {
      newErrors.fname = "Full Name is required";
    }
    if (!forms.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(forms.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!forms.uname.trim()) {
      newErrors.uname = "Username is required";
    }
    if (!forms.psw) {
      newErrors.psw = "Password is required";
    } else if (forms.psw.length < 6) {
      newErrors.psw = "Password must be at least 6 characters";
    }
    if (!forms.cpsw) {
      newErrors.cpsw = "Confirm your password";
    } else if (forms.psw !== forms.cpsw) {
      newErrors.cpsw = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form Submitted Successfully ✅");
      handleClear();
    }
  };

  const handleClear = () => {
    setForms({ fname: "", email: "", uname: "", psw: "", cpsw: "" });
    setErrors({});
  };

  return (
    <div className="login-page">
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left side - Registration Form */}
          <div className="col-md-6">
            <div className="login-card">
              <h3 className="text-center mb-4">Register</h3>
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.fname ? "is-invalid" : ""}`}
                    id="fullname"
                    name="fname"
                    placeholder="Enter your full name"
                    value={forms.fname}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errors.fname && (
                    <div className="invalid-feedback">{errors.fname}</div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={forms.email}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Username */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.uname ? "is-invalid" : ""}`}
                    id="username"
                    name="uname"
                    placeholder="Choose a username"
                    value={forms.uname}
                    onChange={handleChange}
                  />
                  {errors.uname && (
                    <div className="invalid-feedback">{errors.uname}</div>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.psw ? "is-invalid" : ""}`}
                    id="password"
                    name="psw"
                    placeholder="Create a password"
                    value={forms.psw}
                    onChange={handleChange}
                  />
                  {errors.psw && (
                    <div className="invalid-feedback">{errors.psw}</div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.cpsw ? "is-invalid" : ""}`}
                    id="confirmPassword"
                    name="cpsw"
                    placeholder="Re-enter your password"
                    value={forms.cpsw}
                    onChange={handleChange}
                  />
                  {errors.cpsw && (
                    <div className="invalid-feedback">{errors.cpsw}</div>
                  )}
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-info w-50 me-2">
                    Register
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary w-50"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right side - Image/Video */}
          <div className="col-md-6 text-center">
            <img
              src="imgs/19.jpg"
              className="img-fluid img-thumbnail shadow"
              alt="register"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
