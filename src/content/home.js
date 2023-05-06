import React from "react";

const Homesection = () => {
  return (
    <div className="homesection">
      <div className="profileimage-grp">
        <span>
          {" "}
          <img src={require("../assets/img/profile.png")} alt="" />
        </span>
        <h1>Jaggumanthri Pradeep Kumar</h1>
      </div>
    </div>
  );
};

export default Homesection;
