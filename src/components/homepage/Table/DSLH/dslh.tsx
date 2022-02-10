import React, { Component } from "react";
import "../table.css";
import caret_down from "../img/caret_down.png";
import icon_button from "../img/icon button.png";
import { Link } from "react-router-dom";


export default class DSLH extends Component {
  
    render() {
      return (
      <div className="table-content">
          <div className="top-table">
                <div className="search-selection">
                    <ul className="search-list">
                        <li className="search-class">
                            <span>Hệ đào tạo</span>
                            <div className="select-box">
                                <span className="select-text">Theo tín chỉ</span>
                                <img src={caret_down} className="dropdown_icon"/>
                                <div className="select-nav"> 
                                    <ul className="">
                                        <li className="select-nav-text"><a className="select-nav-block" href="">Theo tín chỉ</a></li>
                                        <li className="select-nav-text"><a className="select-nav-block" href="">Theo tháng</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><span>Niên khóa</span>
                        <div className="select-box">
                                <span className="select-text">Chọn niên khóa</span>
                                <img src={caret_down} className="dropdown_icon"/>
                                <div className="select-nav"> 
                                    <ul className="">
                                        <li className="select-nav-text"><a className="select-nav-block" href="">2020-2021</a></li>
                                        <li className="select-nav-text"><a className="select-nav-block" href="">2019-2020</a></li>
                                        <li className="select-nav-text"><a className="select-nav-block" href="">2018-2019</a></li>
                                    </ul>
                                </div>
                        </div>
                        </li>
                        <li><span>Khoa</span>
                        <div className="select-box">
                                <span className="select-text">Chọn khoa</span>
                                <img src={caret_down} className="dropdown_icon"/>
                                <div className="select-nav"> 
                                    <ul className="">
                                        <li className="select-nav-text"><a className="select-nav-block" href="">Quản trị kinh doanh</a></li>
                                        <li className="select-nav-text"><a className="select-nav-block" href="">Kế toán - kiểm toán</a></li>
                                        <li className="select-nav-text"><a className="select-nav-block" href="">Tài chính ngân hàng</a></li>
                                        <li className="select-nav-text"><a className="select-nav-block" href="">Kinh tế đối ngoại</a></li>
                                        <li className="select-nav-text"><a className="select-nav-block" href="">Hệ thống thông tin</a></li>
                                        <li className="select-nav-text"><a className="select-nav-block" href="">Tất cả</a></li>
                                    </ul>
                                </div>
                        </div>
                        </li>
                        <li><span>Ngành</span>
                        <div className="select-box">
                                <span className="select-text">Chọn ngành</span>
                                <img src={caret_down} className="dropdown_icon"/>
                                <div className="select-nav"> 
                                    <ul className="">
                                        <li className="select-nav-text"><a className="select-nav-block" href="">Kiểm toán</a></li>
                                        <li className="select-nav-text"><a className="select-nav-block" href="">Kế toán</a></li>
                                        <li className="select-nav-text"><a className="select-nav-block" href="">Tất cả</a></li>
                                    </ul>
                                </div>
                        </div>
                        </li>
                    </ul>
                </div>
                <div className="search-text">
                <input type='text' className="heading_search_input" placeholder="Nhập tên hoặc mã lớp học" />
                </div>
          </div>
          <div className="content-table">
          <div className="content_list_class__heading">
                        <p className="content_list_class__heading_item">STT</p>
                        <p className="content_list_class__heading_item">Mã lớp</p>
                        <p className="content_list_class__heading_item">Tên lớp</p>
                        <p className="content_list_class__heading_item">Số lượng biểu phí</p>
                        <p className="content_list_class__heading_item">Ngày cập nhật</p>
                    </div>
                    <div className="content_list_class">
                   
                    <div className="content_list_class__content">
                        <p className="content_list_class__content_item__id_class">1</p>
                        <p className="content_list_class__content_item__code_class">19 123 03A</p>
                        <p className="content_list_class__content_item__name_class">KT_19A</p>
                        <p className="content_list_class__content_item__quanity_class">1</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <Link to={"/detail"}><img src={icon_button} className="content_list_class__content_item__icon_class"/></Link>

                    </div>
                    <div className="content_list_class__content bg_light_grey">
                        <p className="content_list_class__content_item__id_class">2</p>
                        <p className="content_list_class__content_item__code_class">19 123 03B</p>
                        <p className="content_list_class__content_item__name_class">KT_19B</p>
                        <p className="content_list_class__content_item__quanity_class">2</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    <div className="content_list_class__content">
                        <p className="content_list_class__content_item__id_class">3</p>
                        <p className="content_list_class__content_item__code_class">19 123 03A</p>
                        <p className="content_list_class__content_item__name_class">KT_19A</p>
                        <p className="content_list_class__content_item__quanity_class">1</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    <div className="content_list_class__content bg_light_grey">
                        <p className="content_list_class__content_item__id_class">4</p>
                        <p className="content_list_class__content_item__code_class">19 123 03B</p>
                        <p className="content_list_class__content_item__name_class">KT_19B</p>
                        <p className="content_list_class__content_item__quanity_class">2</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    <div className="content_list_class__content">
                        <p className="content_list_class__content_item__id_class">5</p>
                        <p className="content_list_class__content_item__code_class">19 123 03A</p>
                        <p className="content_list_class__content_item__name_class">KT_19A</p>
                        <p className="content_list_class__content_item__quanity_class">1</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    <div className="content_list_class__content bg_light_grey">
                        <p className="content_list_class__content_item__id_class">6</p>
                        <p className="content_list_class__content_item__code_class">19 123 03B</p>
                        <p className="content_list_class__content_item__name_class">KT_19B</p>
                        <p className="content_list_class__content_item__quanity_class">2</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    <div className="content_list_class__content">
                        <p className="content_list_class__content_item__id_class">7</p>
                        <p className="content_list_class__content_item__code_class">19 123 03A</p>
                        <p className="content_list_class__content_item__name_class">KT_19A</p>
                        <p className="content_list_class__content_item__quanity_class">1</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    <div className="content_list_class__content bg_light_grey">
                        <p className="content_list_class__content_item__id_class">8</p>
                        <p className="content_list_class__content_item__code_class">19 123 03B</p>
                        <p className="content_list_class__content_item__name_class">KT_19B</p>
                        <p className="content_list_class__content_item__quanity_class">2</p>
                        <p className="content_list_class__content_item__update_class">01/07/2021</p>
                        <img src={icon_button} className="content_list_class__content_item__icon_class"/>

                    </div>
                    </div>
          </div>
          <div className="bottom-table">
          <div className="footer_list_class__description">
                            <p>Hiển thị
                                <span className="footer_list_class__view_page">8</span> 
                                hàng trong mỗi trang</p>
                            
                           
                        </div>
          </div>
      </div>
      )
    }
}