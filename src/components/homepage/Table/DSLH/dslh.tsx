import React, { Component } from "react";
import "../table.css";




export default class DSLH extends Component {
  
    render() {
      return (
      <div className="table-content">
          <div className="top-table">
                <div className="search-selection">
                    <ul className="search-list">
                        <li className="search-class">
                            <p>Hệ đào tạo</p>
                            {/* <select className="select-box" id="select-box">
                                <option value="Theo tín chỉ">Theo tín chỉ</option>
                                <option value="Theo tháng">Theo tháng</option>
                            </select> */}
                        </li>
                        <li><p>Niên khóa</p></li>
                        <li><p>Khoa</p></li>
                        <li><p>Ngành</p></li>
                    </ul>
                </div>
                <div className="search-text"></div>
          </div>
          <div className="content-table">
                
          </div>
          <div className="bottom-table">

          </div>
      </div>
      )
    }
}