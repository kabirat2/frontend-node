// import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const EditProfile = () => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");



  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
         
  //       const response = await axios.get("http://localhost:4000/Api/User/editProfile" , userDetails);
  //       if (response.data.status === "success") {
  //         console.log(response.data) 
  //         const { fullName, email } = response.data.user;
  //         setFullName(fullName);
  //         setEmail(email);
  //         // Assuming password is not returned from the server for security reasons
  //         // If you need to populate password, you should have a separate endpoint for fetching user data
  //       } else {
  //         console.log("Failed to fetch user profile");
  //       }
  //     } catch (error) {
  //      console.log("Error fetching user profile:", error);
  //     }
  //   };

  //   fetchUserProfile()
  // }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const userDetails = {
      FullName,
      Email,
      Password,
    };
    const getToken = localStorage.getItem("token")
    console.log(getToken);
 try {
    const response = await axios.post("http://localhost:4000/Api/User/editProfile", userDetails ,{
      headers:{
        "Authorization": `bearer${getToken}`
      }
    })
    console.log(response.data)  
    if (response.data.status === "success") {
      
        alert(response.data.message)
    }
  
 } catch (error) {
   console.log("Error Making post request") 
   alert("error creating account, try again later")
 }
  };

  return (
    <div className="">
      <h1 className="text-primary fs-2 text-center">Edit Profile</h1>
      <div className="col-10 col-md-8 col-lg-6 mx-auto">
        <form
          action=""
          onSubmit={handleSubmit}
          className=" mx-auto shadow p-4 ml-5"
          style={{ width: "500px" }}
        >
          <input
            onChange={(ev) => setFullName(ev.target.value)}
            type="text"
            placeholder="Enter Full Name"
            className="form-control my-2 w-full"
          />
          <input
            onChange={(ev) => setEmail(ev.target.value)}
            type="email"
            placeholder="Enter Email"
            className="form-control my-2"
          />
          <input
            onChange={(ev) => setPassword(ev.target.value)}
            type="password"
            placeholder="Enter Password"
            className="form-control my-2"
          />
          <button  type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
