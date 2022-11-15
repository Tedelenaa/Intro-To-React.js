import React from "react";
import CustomAPIHook from "./CustomAPIHook";

let url = "https://jsonplaceholder.typicode.com/users";

const FetchUsers = () => {
  const [apiData] = CustomAPIHook(url);
  //   console.log(apiData);
  return (
    <div className="container">
      <div className="row">
        {apiData.map((user) => {
          return (
            <div className="col-md-4 gy-4" key={user.id}>
              <UserCard {...user} />
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
};

const UserCard = (user) => {
  const { name, username, email, address, geo } = user;
  return (
    <div classname="card" style={{ width: "18rem", border: "2px solid blue" }}>
      <div classname="card-body">
        <h5 classname="card-title">{name}</h5>
        <h6 classname="card-title">{username}</h6>
        <p classname="card-text">{email}</p>
        <p classname="card-text">
          <span>{address.street}</span>
          <span>, {address.suite}</span>
          <span>, {address.city}</span>
          <br />
          <span>{address.zipcode}</span>
          <br />
          <span>{address.geo.lat}</span>
          <br />
          <span>{address.geo.lng}</span>
        </p>
      </div>
    </div>
  );
};

export default FetchUsers;
