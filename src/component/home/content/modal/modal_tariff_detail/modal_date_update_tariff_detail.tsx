import React from "react";
function Date_update_tariff (value:any){
    return(
        <div className="date_update_tariff">
            <p className="date_update">Ngày cập nhật:</p>
            <p className="tariff_date">{value.tariff_date}</p>
        </div>
    )
}
export default Date_update_tariff;