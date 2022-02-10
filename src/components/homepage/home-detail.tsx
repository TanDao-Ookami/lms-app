import React, {Component} from "react";
import User from "./top-nav/User/User";
import Table_detail_class from "./Table/CTLH/CTLH-detail-class";
import TitleBack from "./top-nav/Title/Title-back";
import TitleTarget from "./top-nav/Title/Title-target";
import FaChevronRight from "../homepage/top-nav/img/chevron_big_right.png";
import "./homepg.css";
export default class Detail_Class extends Component{
    render(){
        return(
            <div className="home-content">
                <User
                />
                <div className="content-address">
                <TitleBack title_back_name = "Quản lý học phí"/>
                <img src={FaChevronRight} className="title_home-icon" />
               <TitleBack title_back_name = "Danh sách lớp học"/>
               <img src={FaChevronRight} className="title_home-icon" />
                <TitleTarget title_target_name = "Chi tiết lớp học"/>
                </div>
               
                <Table_detail_class/>
            </div>
        )
    }
}