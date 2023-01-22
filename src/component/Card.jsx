import React from "react";

const Card = (props) => {
  return (
    <>
     
     <div id="services" className="containe">
          <div className="card mb-3">
            <img
              className="card-img-top"
              src={props.img}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">{props.name}</p>
              <a
                href="#"
                className="btn btn-outline-dark btn-sm"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
    </>
  );
};

export default Card;
