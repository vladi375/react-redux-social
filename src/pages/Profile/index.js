import React, { Component, useState, useEffect } from "react";

import { Card } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "../../actions/ProfileDataActions";

const Profile = (props) => {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile.profileData);

  useEffect(() => {
    dispatch(getProfileData(props));
  }, [dispatch]);
  // state = {
  //   profileData: null,
  // };

  // componentDidMount = async () => {
  //   const response = await axios.get(
  //     `http://localhost:3001/users/${this.props.match.params.index}`
  //   );
  //   this.setState({ profileData: response.data });
  // };

  return (
    <div className="page">
      <div className="page-users">
        <>
          <div>{profile?.name?.first}</div>
          <div>{profile?.name?.last}</div>
        </>
        {profile?.about}
      </div>
    </div>
  );
};

export { Profile };
