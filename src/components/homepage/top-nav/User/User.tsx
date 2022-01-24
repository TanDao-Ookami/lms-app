import React, {Component} from "react";
import user from "../img/user_circle.png"

export default class User extends Component{
    render(){
        return(
        <div className="user-acc">
            <img src={user} className="user-icon" />
            <p className="account-name">Duy Tấn</p>
            <a className="log-out">Đăng xuất</a>
          </div>
        )
    }
}