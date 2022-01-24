import React, {Component} from "react";
import Title from "./Title/Title";
import User from "./User/User";
import "../homepg.css";

export default class Content extends Component{
    render(){
        return(
            <div className="top-nav">
                <User />
                <Title />
            </div>
        )
    }
}