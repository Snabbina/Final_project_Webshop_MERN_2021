import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import TitleTags from "../layouts/TitleTags";
import Loader from "../layouts/Loader";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.users);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TitleTags title={"My Profile page"} />

          <h3 className="mt-5 ml-5">
            Welcome {user.name}, you look great today!
          </h3>

          <div className="row justify-content-around mt-5 user-info">
            <div className="col-12 col-md-3">
              <figure className="avatar avatar-profile">
                <img
                  className="rounded-circle img-fluid"
                  src="/images/avatar1.jpg"
                  alt={user.name}
                />
              </figure>
              <Link
                to="/me/update"
                id="edit_profile"
                className="btn btn-primary btn-block my-5"
              >
                Edit Profile
              </Link>
            </div>

            <div className="col-12 col-md-5">
              <h4>Full Name</h4>
              <p>{user.name}</p>

              <h4>Email Address</h4>
              <p>{user.email}</p>

              <h4>Shipping Address</h4>
              <p>My Street 123</p>
              <p>In my town 123 45</p>
              <p>The City</p>

              {user.role !== "admin" && (
                <Link to="/orders/me" className="btn btn-danger btn-block mt-5">
                  My Orders
                </Link>
              )}

              <Link
                to="/password/update"
                className="btn btn-primary btn-block mt-3"
              >
                Change Password
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
