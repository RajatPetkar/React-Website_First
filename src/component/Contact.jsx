import React, { useState } from "react";

const Contact = () => {
  const [data,setData] = useState({
    name : '',
    email : '',
    message : ''
    });
  const event = (e)=>{
    let value = e.target.value;
    let name = e.target.name;
    let email= e.target.value;
    let message = e.target.value;
    setData((pre)=>{
      return{
        ...pre,
        [name] : value,
        [email] : value,
        [message] : value
    }
    })
  }
  const clickEvent=(e)=>{
    e.preventDefault();
    setData({
      name : '',
      email : '',
      message : ''
    });
  }
  
  return (
    <>
      <section id='contact' className="d-flex align-item-center">
      <div className="container-fluid nav_bg" >
        <div className="row">
          <div className="col-6 mx-auto my-auto " align= 'center' >
            
          <form class="form-vertical "  >
          <fieldset >
            <legend class="text-center pt-5 mb-5">Contact us</legend>
    
            
            <div class="form-group" >
      
              <div class="col-md-9" >
                <input id="name" value={data.name} onChange={event} name="name" type="text" placeholder="Your name" class="form-control mb-4"/>
              </div>
            </div>
    
            
            <div class="form-group">

              <div class="col-md-9">
                <input id="email" value={data.email} onChange={event}  name="email" type="email" placeholder="Your email" class="form-control  mb-4"/>
              </div>
            </div>
    
          
            <div class="form-group">

              <div class="col-md-9">
                <textarea class="form-control" onChange={event}  value={data.message} id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
              </div>
            </div>
    
          
            <div class="form-group">
              <div class="col-md-12 text-right mt-5">
                <button type="submit" onClick={clickEvent} class="btn btn-primary btn-lg">Submit</button>
              </div>
            </div>
          </fieldset>
          </form>
        </div>
      </div>
	</div>

      </section>
    </>
  );
};

export default Contact;
