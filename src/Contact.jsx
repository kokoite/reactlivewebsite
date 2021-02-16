import React, { useState } from 'react'
const obj = {
    width: "120px",
    padding:"10px 30px",
    
}
const Contact = ()=>{
    const [detail,setDetail] = useState({
        name:"",
        email:"",
        phone:"",
        message:"",
    })
    const getDetail = (event)=>{
    const {name,value} = event.target;
    console.log(value);
    setDetail((prev)=>{
        return(
            {
                ...prev,
                [name]:value,
            }
        )
    })    
    }
    const showDetali =()=>{
        alert(` Name is ${detail.name} Email is ${detail.email} Phone Number is ${detail.phone} Message is ${detail.message}`)
        setDetail(()=>{
            return{
                name:"",
                email:"",
                phone:"",
                message:"",
            }
        })
    }
    return(
        <>
        <div className = "container-fluid text-center my-3">
            <h1>
                Contact Form
            </h1>
        </div>
        <div className = "container-fluid">
        <div className =  "row">
        <div className = "col-6 col-md-8 mx-auto">
        <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" name = "name"  placeholder="Enter your name" onChange ={getDetail} value  = {detail.name}/>
        </div>
        <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" value = {detail.email} id="exampleFormControlInput2" name = "email" onChange = {getDetail} placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="exampleFormControlInput3" value = {detail.phone} name = "phone" onChange = {getDetail} placeholder="987654321"/>
        </div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Suggestion for us</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" name = "message" value = {detail.message} onChange = {getDetail} rows= {6} cols =  ""></textarea>
</div>
<div className = "text-center" >
    <button className= "btn btn-outline-secondary " style = {obj} type = "submit" onClick  = {showDetali}>Submit</button>
</div>

        </div>
        </div>
        </div>
       
        </>
    )
}
export default Contact;
