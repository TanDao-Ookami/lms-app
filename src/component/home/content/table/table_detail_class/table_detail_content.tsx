import React from "react";
import { Link } from "react-router-dom";
import icon_button from "../../img/icon button.png";
import {useState} from "react";
import Modal_tariff_detail from "../../modal/modal_tariff_detail/modal_tariff_detail";

const Tariff_content = (value:any) => {
    const [isOpen_tariff_detail, setIsOpen_tariff_detail] = useState(false);
    return(
        <div className="tariff_content_item">
            <div className="tariff_content_info">
                <p className="tariff_content_name">{value.tariff_name}</p>
                <p className="tariff_content_date">{value.tariff_date}</p>
                <p className="tariff_content_status">{value.tariff_status}</p>
                <p className="tariff_content_stop">Ngừng hoạt động</p>
            </div>
            <div className="link_tariff_detail ">
                <div className="tariff_detail" onClick={() => setIsOpen_tariff_detail(true)} > 
                      <img src={icon_button} className="tariff_link" />
                
                </div>
            </div>
            {isOpen_tariff_detail && <Modal_tariff_detail setIsOpen_tariff_detail={setIsOpen_tariff_detail} />}
        </div>
    )
}
export default Tariff_content;