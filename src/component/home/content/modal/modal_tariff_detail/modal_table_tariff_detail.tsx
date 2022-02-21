import React from "react";
import { Update_tariff_detail } from "../../../data/data_tariff_detail";
function Table_tariff_detail (){
    return(
        <div className="table_tariff_detail">
            <div className="table_tariff_detail_content">
                <div className="table_tariff_detail_heading">
                    <p className="tariff_detail_heading_item">Thời gian</p>
                    <p className="tariff_detail_heading_item">Nội dung cập nhât</p>
                    <p className="tariff_detail_heading_item">Trạng thái</p>

                </div>
                <div className="table_tariff_detail_update">
                    <ul className="list_tariff_detail_update">
                        {Update_tariff_detail.map((tariff, index) => {
                            return(
                                <li className="list_tariff_detail_update_item">
                                    <span className="tariff_detail_update_item_time">{tariff.time_update}</span>
                                    <span className="tariff_detail_update_item_content">{tariff.content_update}</span>
                                    <span className="tariff_detail_update_item_status">{tariff.status_update}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div> 
            </div>
        </div>
    )
}
export default Table_tariff_detail;