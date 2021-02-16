import React from 'react'
// import web from '../src/image/img-2.svg'
const obj = {
  borderRadius:"50px",
  height:"250px"
  

}
const CardComponent = (props)=>{
    return(
        <>
  <div className = "col-md-4 col-10 mx-auto">
  <div class="card bg-light-gray" >
  <div className  = "row d-flex justify-content-center align-items-center">
  <img className="card-img-top w-75 text-center"  style = {obj} src = {props.imgSrc} alt="Card image cap"/>
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <div className ="container-fluid d-flex justify-content-center">
    <a href="#" className="btn btn-primary justify-content-center">{props.btnTitle}</a>
  </div>
  </div>
    </div>

    </div>
        </>
    )
}
export default CardComponent;