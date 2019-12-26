import React from "react";

function CardComponent({ title, description, image, time, imageClass,link }) {
  return (
    <div class="col-sm-6 ">
      <div
        className="card mb-3 shadow-sm p-3 mb-5 bg-white rounded"
        style={{ maxWidth: "540px" }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <a href={link} className="company-logo" target='blank'>
            <img
              src={image || "https://i.picsum.photos/id/1009/5000/7502.jpg"}
              className={`card-img mt-3  ${imageClass}`}
              alt="..."
            />
            </a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">{time}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
