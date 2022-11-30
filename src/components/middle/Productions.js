import "./Production.css"
import { useEffect, useState } from "react"
import { TfiStar } from  "react-icons/tfi";


function formatCash(str) {
    let ret = str.toString()
    return ret.split("").reverse().reduce((prev, next, index) => {
        return ((index % 3 === 0) ? "." : next ) + prev
    })
};

function checkFreeShip(type) {
    return (type !== "shipping_discount")
};


function checkRated(options, item) {
    if (options.indexOf("4-5 sao") !== -1)
    {
        const check = item.rated.star
        if (check !== null) return check > 4 && check <= 5
        else return false
    }
    else return true
}

function checkAddress(options, item) {
    const optionsAdd = ["Hà Nội", "Hồ Chí Minh", "Bình Thuận", "Đà Nắng", "An Giang"]
    for (let option of options) { 
        const checkOption = optionsAdd.indexOf(option)
        if (checkOption === -1) continue
        else
        {
            const check = item.shop.ware_house_region_name
            if (check !== null) return options.indexOf(check) !== -1 
            else return false
        }
    }
    return true 
}

function Productions(props) {
    const { options, textSearch } = props;
    // console.log(options)

    // console.log("Gia: ",formatCash(123456))
    const [dataProducts, setDataProducts] = useState([])
    const [dataSearched, setDataSearched] = useState([])


    function searchProducts(data) {
        let newData = data.filter((item) => {
            if (options.length === 0) return true;
            return (checkAddress(options, item) && checkRated(options, item));
            // return (checkAddress(options, item))
        })

        // console.log("newData", newData);
        return newData
    }
    
    function searchOnHeader(data) {
        let newData = data.filter((item) => {
            const fixText = textSearch.toLowerCase()
            const fixName = item.name.toLowerCase()
            return fixName.includes(fixText);
        })

        // console.log("newData", newData);
        return newData
    }

    useEffect(() => {
        const newData = searchOnHeader(dataProducts)
        setDataSearched(newData)
    }, [textSearch])
    
    useEffect(() => {
        const newData = searchProducts(dataProducts);
        setDataSearched(newData)
    }, [options])
    

    useEffect(() => {
        fetch("http://localhost:8000/productions")
            .then(res => res.json())
            .then(data => {
                setDataProducts(data);
                setDataSearched(data)
            })
    }, []) 

    
    return (
        <><div className="product-area">
            {dataSearched.map((item) => (
                (<div className="product-item">
                    <img className="item-img" src={item.image} alt="" />
                    <div className="item-freeShip">
                        {checkFreeShip?.(item.package_discount?.[0].type) ? null :
                            <img src={item.package_discount[0].icon } alt="" />}
                    </div>
                    <div className="item-name">
                        <span className="img-shop-plus">
                            {!item.shop.badge_urls.shop_plus ? null :
                                <img src={item.shop.badge_urls.shop_plus} alt="" />}
                            {item.name}
                        </span>
                    </div>
                    <div className="item-price-container">
                        <div className="item-price">{formatCash(item.sale_price_max)}đ</div>
                        <div className="item-discount">
                            {!item.sale_percent ? null : 
                                <div>
                                    <span className="item-discount-price">{formatCash(item.default_price_max)}đ</span>
                                    <span className="item-discount-percent">-{item.sale_percent}%</span>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="item-pay">
                        <img src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png" />
                        <span>Trả góp Kredivo</span>
                    </div>
                    <div className="item-sold-rate">
                        <span className="item-sold">{!item.sold ? null : 
                        "Đã bán" +" "+ item.sold}
                        </span>
                        {!item.rated.star ? <></> : 
                            <span><TfiStar className="item-rate-star"/> <span className="item-rated">{item.rated.star + "/5"}</span> {"("+ item.rated.total + ")"}
                            </span>}
                    </div>
                    <div className="item-add">
                        {!item.shop.ware_house_region_name ? null : 
                            <span>{ item.shop.ware_house_region_name}</span>
                        }
                    </div>
                </div>)
            ))}
        </div>
            <div className="more-product"> <button className="btn-more-product">Xem thêm</button>
            </div>
        </>
    )
}

export default Productions;
