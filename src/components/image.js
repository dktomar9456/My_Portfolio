import React from "react";
import Img from "../imgs/myImg.jpg";
function Image() {
  return (
    <div className="container border shadow p-3 bg-light rounded mt-4">
      <div className="row">
        <img
          src={Img}
          className="mx-auto mb-3"
          style={{ width: 200 + "px" }}
          alt=""
        />
      </div>
      <div className="row ">
        <h2 className="text-center">Devansh Tomar</h2>
        <h4 className="text-secondary text-center">
          B.Tech Petroleum Engineering (2019-2023)
        </h4>
      </div>
    </div>
  );
}
export default Image;
