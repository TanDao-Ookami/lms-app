import React, {Component} from "react";
import ChevronRight from "../img/chevron_big_right.png"

export default class Title_home extends Component{
    render(){
        return(
             <div className="title-address">
                <p className="address-previous">Quản lý học phí</p>
                <img src={ChevronRight} className="title_home-icon" />
                <h1 className="address-present">Danh sách lớp học</h1>
            </div> 
        )
    }
}