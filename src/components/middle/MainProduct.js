import Filters from "./Filters"
import Productions from "./Productions"
import "./MainProduct.css"
import { useState } from "react"


function MainProduct(props) {
    const {textSearch} = props;
    const [optionsFilter, setOptionsFilter] = useState([]);

    
    return (
        <div id="mainProduct">
            <div className='filter-header'>
                <div className='filter'>
                    <a href="" className='link-filter'>Sendo.vn</a><span> / Kết quả tìm kiếm</span>
                    <p className='filter-title'
                    ><span className='filter-title-span'>Mua sam Sendo</span> Tìm thấy hơn 10.000 sản phẩm
                    </p>
                </div>
            </div>
            <div className="product">
                <div className="grid-colum-2">
                    <Filters optionsFilter={optionsFilter} setOptionsFilter={setOptionsFilter}  />
                </div>
                <div className="grid-colum-10">
                    <div className="product-groupBy">
                        <label for="product-group">Sắp xếp theo:</label>
                            <select className="product-group" id="product-group">
                                <option value ="Đề cử">Đề cử</option>
                                <option value ="Bán chạy">Bán chạy</option>
                                <option value ="Giá thấp">Giá thấp</option>
                                <option value ="Giá cao">Giá cao</option>
                                <option value ="Lượt yêu thích">Lượt yêu thích</option>
                            </select>
                    </div>
                    <Productions options={optionsFilter} textSearch={textSearch} />
                </div>
            </div>
        </div>
    )
}

export default MainProduct;