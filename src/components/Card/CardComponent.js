import React from "react";

function CardComponent({ title, description, image, time }) {
  return (
    <div class="col-sm-6 ">
      <div
        className="card mb-3 shadow p-3 mb-5 bg-white rounded"
        style={{ maxWidth: "540px" }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="https://i.picsum.photos/id/1009/5000/7502.jpg"
              className="card-img"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
