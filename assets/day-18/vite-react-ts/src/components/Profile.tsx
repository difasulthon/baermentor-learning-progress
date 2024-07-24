import React from "react";

type Props = {
  name: string;
  jobTitle: string;
  jobDesc: string;
};

function Profile({ name, jobTitle, jobDesc }: Props) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{jobTitle}</h2>
      <p>{jobDesc}</p>
    </div>
  );
}

export default Profile;
