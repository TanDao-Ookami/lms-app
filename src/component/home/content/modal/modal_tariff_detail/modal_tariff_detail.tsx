import React from "react";
import "../modal_tariff_detail.css"
import cancel from "../img/fi_x-cancel.png"
import Form_tariff_detail from "./modal_form_tariff_detail";
import Date_update_tariff from "./modal_date_update_tariff_detail";
import Table_tariff_detail from "./modal_table_tariff_detail";


const Modal_tariff_detail =  ({ setIsOpen_tariff_detail } : {setIsOpen_tariff_detail : any}) =>{
    return(
        <div className="modal_tariff">
            <div className="modal_overlay_tariff">

            </div>
            <div className="modal_body_tariff">
                <div className="body_tariff_control">
                        <img src={cancel} onClick={() => setIsOpen_tariff_detail(false)}></img>
                </div>
                <div className="body_tariff_content">
                    <div className="tariff_content_heading">
                        <h1 className="tariff_content_heading_item">Chi tiết biểu phí</h1>
                    </div>
                    <Form_tariff_detail
                        title_tariff_detail = "Thu học phí"
                        tariff_detail_value_1 = "1. Hồ sơ ghi danh"
                        tariff_detail_value_2 = "2. Phí ghi danh"
                        tariff_detail_id = "10_BHYT"
                        tariff_detail_year = "2020 - 2023"
                    />
                    <Date_update_tariff
                        tariff_date = "02/07/2021"
                    />
                    <Table_tariff_detail/>
                </div>
                
                
                
            </div>
        </div>
    )
}
export default Modal_tariff_detail;