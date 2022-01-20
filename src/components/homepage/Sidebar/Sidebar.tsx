import React, { Component } from "react";
import logo from "../img/Logo.png";
import money from "../img/money.png"
import basicMoney from "../img/basic-money.png"
import forder from "../img/folder check.png"



export default class Sidebar extends Component {
  
    render() {
    //   function myFunction() {
    //     document.getElementById("active-icon").style.background = "rgba(255, 249, 244, 0.5)";
    //     }
        return (
    <div className="navbar">
      <div className="navbar-content">
        <img className="logo-nav" src={logo} alt="logo"/>
        <ul className="navbar-icons">
                <li id="active-icon" /*onClick={myFunction}*/ className="icon-sidebar"><a className="click-icon" href="#"><img src={money} alt="money"/></a></li>
                <li id="active-icon" /*onClick={myFunction}*/ className="icon-sidebar"><a className="click-icon" href="#"><img src={basicMoney} alt="basicMoney"/></a></li>
                <li id="active-icon" /*onClick={myFunction}*/ className="icon-sidebar"><a className="click-icon" href="#"><img src={forder} alt="forder"/></a></li>
        </ul>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          <li className="navbar-menu-title navbar-menu-title--active">
            <span className="menu-title-content">
            <img className="icon-img" src={money} alt="money"/>
              Quản lý học phí
              <ul className="menu-title-list">
                <li className="menu-title-item menu-title-item--active ">
                  Danh sách lớp học
                </li>
                <li className="menu-title-item">Danh sách biểu phí</li>
                <li className="menu-title-item">Danh sách khoản thu</li>
                <li className="menu-title-item">Hình thức thu</li>
                <li className="menu-title-item">Danh sách chế độ miễn giảm</li>
                <li className="menu-title-item">Thu học phí</li>
              </ul>
            </span>
          </li>
          <li className="navbar-menu-title">
            <span className="menu-title-content">Quản lý lương</span>
          </li>
          <li className="navbar-menu-title">
            <span className="menu-title-content">Đề xuất và phê duyệt</span>
          </li>
        </ul>
      </div>
    </div>
        )
    }
}