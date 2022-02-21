import React from "react";

function Form_tariff_detail(value:any) {
    return(
        <div className="form_tariff_detail">
                        <div className="form_tariff_detail_heading">
                            <div className="form_tariff_detail_heading--item">
                                <p className="tariff_detail_heading--item_heading">{value.title_tariff_detail}</p>
                                <div className="tariff_detail_heading--item_detail">
                                    <p className="tariff_detail_value">{value.tariff_detail_value_1}</p>
                                    <p className="tariff_detail_value">{value.tariff_detail_value_2}</p>
                                </div>
                                
                            </div>
                            <div className="form_tariff_detail_heading--item">
                                    <p className="tariff_detail_id">
                                        <span>Mã biểu phí:</span>{value.tariff_detail_id}</p>
                                    <p className="tariff_detail_year">
                                        <span>Niên khóa:</span>{value.tariff_detail_year}</p>
                            </div> 
                        </div>
                    </div>
    )
}
export default Form_tariff_detail;