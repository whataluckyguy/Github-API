import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3 mb-4 ">
      <div className="">
        <img
          src={user.avatar_url}
          height="140"
          width="140"
          className="rounded-circle "
        />
      </div>
      <CardBody>
        <div className="text-primary">{user.name}</div>
        <div className="text-primary">{user.location}</div>
        <div className="text-primary">{user.bio}</div>
        <div className="text-info">
          Available for hire: {user.hireable ? "Yes" : "Nope"}
        </div>
        <div className="text-info">Followers: {user.followers}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
