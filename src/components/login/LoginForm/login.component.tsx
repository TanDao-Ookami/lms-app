import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../login.css";
import logo from "../img/Frame.png";

export const LoginForm = () => {
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        
    }
    return (
    <div className="login">
    <img className="logo" src={logo} alt="logo"/>
        <form className="form" onSubmit={handleSubmit}>
            <h1>Đăng nhập</h1>

            <div className="form-group">
                <label>Tên đăng nhập</label>
                <input id="email" type='email' className="form-control"
                    onChange={handleSubmit}>
                </input>
            </div>

            <div className="form-group">
                <label>Mật khẩu</label>
                <input id="password" type='password' className="form-control"
                    onChange={handleSubmit}>
                </input>
            </div>
            <p className="forgot-pw">
                <Link className="forgot-pw" to={'/forgot'}>Quên mật khẩu?</Link>
            </p>
            <Link className="homepg" to={'/home'}><button className="btn-login">Đăng nhập</button></Link>
                
        </form>
    </div>
    )
}