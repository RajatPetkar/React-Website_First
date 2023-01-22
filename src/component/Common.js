import React from 'react'
import './css.css'
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
    <section id={props.id} className="d-flex align-item-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  {props.title} <strong>{props.name}</strong>
                </h1>
                <h4 className="my-3">
                  {props.sub}
                </h4>
                <div className="mt-3">
                  <NavLink to={props.link} className="btn btn-success">
                    {props.btn}
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img src={props.img} className="img-fluid animated" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   </>
  )
}

export default Common