import React, { Component } from "react";
import "./homepg.css";
import Sidebar from "./Sidebar/Sidebar";
import Table from "./Table/table";
import Content from "./top-nav/top-nav";


export default class Home extends Component {


    render() {
        return (
            <div className="home">
                <Sidebar />
                <Content />
                <Table />
            </div>
        )
    }
}