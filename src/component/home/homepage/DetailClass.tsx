import React, { Component } from "react";
import "./home.css";
import "../content/table/css/detail_class.css"
import Sidebar from "../sidebar/sidebar";
import Detail_Class from "../content/home-detail";
import Modal_detail from "../content/modal/modal_detail/modal_add_detail";



export default class Detail_class extends Component {


    render() {
        return (
            <div className="home_detail">
                <div className="home">
                <Sidebar />
                <Detail_Class/>
               
                </div>
               
            </div>
                
            
            
            
        )
    }
}