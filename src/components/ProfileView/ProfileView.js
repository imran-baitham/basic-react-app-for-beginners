/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

function ProfileView({ profileData }) {
  return (
    <div className="flex justify-center text-center">
      <div>
        <img
          src={profileData.profilePic}
          alt={profileData.userName + " profile image"}
          className="rounded-full w-28 h-28 mx-auto ring-8 ring-gray-200"
        />
        <h1 className="pt-5 font-medium text-2xl tracking-wider leading-10">
          {profileData.userName}
        </h1>
        <p className="text-sm">{profileData.userBio}</p>
      </div>
    </div>
  );
}

export default ProfileView;
