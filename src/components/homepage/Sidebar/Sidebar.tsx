import React, { Component } from "react";
import logo from "../img/Logo.png";
import money from "../img/money.png";
import basicMoney from "../img/basic-money.png";
import forder from "../img/folder check.png";
import "../homepg.css";
import money_o from "../img/money-o.png";
import money_basic_o from "../img/money-basic-o.png";
import forder_o from "../img/forder-o.png";

export default class Sidebar extends Component {
  
    render() {
      return (
      <div className="body">   
        <div className="navbar">
          <div className="navbar-content">
            <img className="logo-nav" src={logo} alt="logo"/>
            <ul className="navbar-icons">
                <li id="active-icon" className="icon-sidebar"><a className="click-icon" href="#"><img src={money} alt="money"/></a></li>
                <li id="active-icon" className="icon-sidebar"><a className="click-icon" href="#"><img src={basicMoney} alt="basicMoney"/></a></li>
                <li id="active-icon" className="icon-sidebar"><a className="click-icon" href="#"><img src={forder} alt="forder"/></a></li>
            </ul>
          </div>
          <div className="navbar-menu">
            <ul className="navbar-menu-list">
              <li className="navbar-menu-title-navbar-menu-title--active">
                <span className="menu-title-content">
                  <a className="title-content-active" href="">
                <img className="icon-img" src={money_o} alt="money"/>
                  Quản lý học phí</a>
                  <ul className="menu-title-list">
                    <li className="menu-title-item--active">
                      <a href="">Danh sách lớp học</a>
                    </li>
                    <li className="menu-title-item"><a href="">Danh sách biểu phí</a></li>
                    <li className="menu-title-item"><a href="">Danh sách khoản thu</a></li>
                    <li className="menu-title-item"><a href="">Hình thức thu</a></li>
                    <li className="menu-title-item"><a href="">Danh sách chế độ miễn giảm</a></li>
                    <li className="menu-title-item"><a href="">Thu học phí</a></li>
                  </ul>
                </span>
              </li>
              <li className="navbar-menu-title">
                <span className="menu-title-content">
                  <a className="title-content" href="">
                <img className="icon-img" src={money_basic_o} alt="money"/>
                Quản lý lương</a>
                <ul className="menu-title-list">
                    <li className="menu-title-item">
                      <a href="">Danh sách giáo viên</a>
                    </li>
                    <li className="menu-title-item"><a href="">Danh sách bảng chấm công</a></li>
                    <li className="menu-title-item"><a href="">Danh sách bảng lương</a></li>
                    <li className="menu-title-item"><a href="">Danh sách biểu phí</a></li>
                    <li className="menu-title-item"><a href="">Danh sách khoản chi</a></li>
                    <li className="menu-title-item"><a href="">Thiết lập ngạch, hạng</a></li>
                    <li className="menu-title-item"><a href="">Công thức tính lương</a></li>
                  </ul>
                </span>
              </li>
              <li className="navbar-menu-title">
                <span className="menu-title-content">
                <a className="title-content" href="">
                <img className="icon-img" src={forder_o} alt="forder-check"/>
                Đề xuất và phê duyệt</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div> 
      )
    }
}