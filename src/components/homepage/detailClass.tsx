import React, { Component } from "react";
import "./Table/CTLH/detail-class.css";
import Sidebar from "./Sidebar/Sidebar";
import Detail_class from "./home-detail";


export default class Detail extends Component {


    render() {
        return (
            <div className="home">
                <Sidebar />
                <Detail_class />
            </div>
        )
    }
}