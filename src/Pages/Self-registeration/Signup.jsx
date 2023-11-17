import React, { useState } from "react";
import axios from "axios";
import { Slide, Fade } from "react-awesome-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
import logo from "../../Assets/Images/Vishesh_logo (1).png";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    className: "",
    college: "",
    phoneNumber: "",
    email: "",
    otp: "",
    location: "",
  });
  const success = () => {
    toast.success("Otp sent to your email", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const error = () => {
    toast.error("Enter the email field", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const success_mob = () => {
    toast.success("Otp sent to your Phone Number", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const error_mob = () => {
    toast.error("Enter the Phone number", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const [errors, setErrors] = useState({});
  const [showOtpInputs, setShowOtpInputs] = useState(false);
  const [showOtpInputs_mob, setShowOtpInputs_mob] = useState(false);

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^[+]91\d{10}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOtpChange = (index, value) => {
    // Update the OTP value at the specified index
    const newOtp = formData.otp.split("");
    newOtp[index] = value;
    setFormData({
      ...formData,
      otp: newOtp.join(""),
    });
  };
  const handleOtpChange_mob = (index, value) => {
    // Update the OTP value at the specified index
    const newOtp = formData.otp.split("");
    newOtp[index] = value;
    setFormData({
      ...formData,
      otp: newOtp.join(""),
    });
  };

  const validateForm = (data) => {
    const errors = {};

    if (!isValidEmail(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!isValidNumber(data.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }
    if (!isValidFirstName(data.firstName)) {
      errors.firstName = "Enter Valid  First Name";
    }
    if (!isValidLastName(data.lastName)) {
      errors.lastName = "Enter Valid  Last Name";
    }
    if (!isValidclassName(data.className)) {
      errors.className = "Enter Valid  Class Name";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    if (emailRegex.test(email)) {
      return true;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      return false;
    }
  };

  const isValidFirstName = (firstName) => {
    if (firstName.length !== 0) {
      return true;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Enter First Name",
      }));
      return false;
    }
  };
  const isValidclassName = (className) => {
    if (className.length !== 0) {
      return true;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Enter Class Name",
      }));
      return false;
    }
  };
  const isValidLastName = (lastName) => {
    if (lastName.length !== 0) {
      return true;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Enter Last Name",
      }));
      return false;
    }
  };
  const isValidNumber = (phoneNumber) => {
    if (phoneRegex.test(phoneNumber)) {
      return true;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Invalid phone number",
      }));
      return false;
    }
  };

  const mobilevalidationotp = () => {
    if (formData.phoneNumber === "") {
      error_mob();
    } else {
      success_mob();
      setShowOtpInputs_mob(true);
      axios
        .post(
          "http://localhost:8085/v1/student/sendOtpPhoneNumber",
          formData.phoneNumber
        )
        .then((response) => response.json())
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  const handleGenerateOTP = () => {
    if (formData.email === "") {
      error();
    } else {
      success();
      setShowOtpInputs(true);
      axios
        .post("http://localhost:8085/v1/student/send-otp", formData.email)
        .then((response) => response.json())
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  const handleValidateOTP = () => {
    console.log("OTP validating.....");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:8080/v1/student/register", formData)
        .then((response) => response.json())
        .catch((error) => {
          console.error("Error: Form data not submited", error);
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="signup-container">
      <Slide duration={1500}>
        <span style={{marginTop:'5vh'}}><img src={logo} width={"80px"} height={"80px"} style={{borderRadius:'50px'}}/><span style={{color:'black', fontSize:'25px', position:'relative', bottom:'23px'}}>Vishesh Country cache</span></span>
        <h1 className="heading-color">Self-registration</h1>
      </Slide>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <Fade duration={3000}>
            <label>
              First Name<span className="color-astric">*</span>
            </label>
          </Fade>
          <input
            type="text"
            name="firstName"
            placeholder="   First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />{" "}
          {errors.firstName && (
            <span className="error-message">{errors.firstName}</span>
          )}
        </div>
        <div className="form-group">
          <Fade duration={3000}>
            <label>
              Last Name <span className="color-astric">*</span>
            </label>
          </Fade>
          <input
            type="text"
            name="lastName"
            placeholder="   Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />{" "}
          {errors.lastName && (
            <span className="error-message">{errors.lastName}</span>
          )}
        </div>
        <div className="form-group">
          <Fade duration={3000}>
            <label>
              Class<span className="color-astric">*</span>
            </label>
          </Fade>
          <input
            type="text"
            name="className"
            placeholder="  Class Name"
            value={formData.className}
            onChange={handleChange}
            required
          />
          {errors.className && (
            <span className="error-message">{errors.className}</span>
          )}
        </div>
        <div className="form-group">
          <Fade duration={3000}>
            <label>Name of the college (Optional)</label>
          </Fade>
          <input
            type="text"
            name="college"
            placeholder="   Name of school/college name"
            value={formData.college}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <Fade duration={3000}>
            <label>
              Phone Number <span className="color-astric">*</span>
            </label>
          </Fade>
          <country />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="   ex: +919154231922"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && (
            <span className="error-message">{errors.phoneNumber}</span>
          )}
        </div>
        <div className="form-group-otp-fields">
          {showOtpInputs_mob ? (
            // Display OTP input fields and Validate OTP button
            <>
              {Array.from({ length: 6 }, (_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  placeholder="  0"
                  value={formData.otp[index] || ""}
                  onChange={(e) => handleOtpChange_mob(index, e.target.value)}
                />
              ))}
              <button
                type="button"
                className="validate-otp-button"
                onClick={handleValidateOTP}
              >
                Verify
              </button>
            </>
          ) : (
            <button
              type="button"
              className="generate-otp-button"
              onClick={mobilevalidationotp}
            >
              Verify Phone Number
            </button>
          )}
        </div>
        <div className="form-group">
          <Fade duration={3000}>
            <label>
              Email <span className="color-astric">*</span>
            </label>
          </Fade>
          <input
            type="text"
            name="email"
            placeholder="   ex: myname@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group-otp-fields">
          {showOtpInputs ? (
            // Display OTP input fields and Validate OTP button
            <>
              {Array.from({ length: 6 }, (_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  placeholder="0"
                  value={formData.otp[index] || ""}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                />
              ))}
              <button
                type="button"
                className="validate-otp-button"
                onClick={handleValidateOTP}
              >
                Verify
              </button>
            </>
          ) : (
            <button
              type="button"
              className="generate-otp-button"
              onClick={handleGenerateOTP}
            >
              Verify Email
            </button>
          )}
        </div>
        <div className="form-group">
          <Fade duration={3000}>
            <label>Location (Optional)</label>
          </Fade>
          <input
            type="text"
            name="location"
            placeholder="    Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            Sign Up
          </button>

          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default Signup;
