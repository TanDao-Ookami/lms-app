import React from "react";
// import firebase from "firebase";
function FormInput (value:any){
    return(
        <div className="form-input">
            <label htmlFor="" className="user-lb">{value.nameTitle}</label>
            <input id="email" type='email' className="form-control" />
        </div>
    )
}
export default FormInput;