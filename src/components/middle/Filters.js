
import { useState, useEffect } from 'react';
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import "./Filters.css"


function handleColor(hex) {
    return `#${hex}`;
}

function formatPrice(pr) {
    if (pr > 10000 && pr < 1000000) return `${pr / 1000}K`
    else if (pr >= 1000000) return `${pr / 1000000}M`
    return pr
}

function handlePrice(gtprice, ltprice) {
    if (gtprice === -1) return `Dưới ${formatPrice(ltprice)}`
    else if (ltprice === -1) return `Trên ${formatPrice(gtprice)}`
    else if (ltprice !== -1 && gtprice !== -1) return `Từ ${formatPrice(gtprice)} - dưới ${formatPrice(ltprice)}`
}

function handleToggle(id) {
    const object = document.getElementById(`filter-object-${id}`)
    const btnDown = document.getElementsByClassName(`down-${id}`)[0]
    const btnUp = document.getElementsByClassName(`up-${id}`)[0]

    object.classList.toggle("short")
    btnDown.classList.toggle("noActive")
    btnUp.classList.toggle("noActive")
}


function Filters(props) {
    
    let { optionsFilter, setOptionsFilter } = props;

    // const [show, setShow] = useState(true)
    const [dataFilter, setDataFilter] = useState([])


    function handleCollectOption(optionsFilter, value) {
        // if (prev.every((x) => { return x !== value; }))
        if (!optionsFilter.includes(value))
        {
            setOptionsFilter([...optionsFilter, value])
        }
        else if (optionsFilter.length === 1) {
            setOptionsFilter([])
        }
        else {
            const index = optionsFilter.indexOf(value);
            optionsFilter = optionsFilter.filter((item) => {
                if (item === optionsFilter[index]) return false
                else return true
            })
            setOptionsFilter([...optionsFilter])
        }
    }



    useEffect(() => {
        fetch("http://localhost:8001/filtersObject")
            .then(res => res.json()) 
            .then(data => setDataFilter(data))
    }, [])
   
    
    
    return (
        <div>
            {
                dataFilter.map((filter, id) => {
                    if(!filter.attribute_name) return null;
                    return (
                        <div className={`filter-object`} id={`filter-object-${id}`}>
                            <div className='filter-header'>
                                <h4 className='filter-title'>{filter.attribute_name}</h4>
                                <button type='button' className='btn-toggle' onClick={()=>handleToggle(id)}>
                                    <TfiAngleUp className={ `up-${id}`} />
                                    <TfiAngleDown className={ `down-${id}  noActive`} />
                                </button>
                            </div>
                            {!(filter.attribute_value) ? null :
                                filter.attribute_value?.map((option, index) => {
                                    if (option.option_name)
                                    {
                                        return (  
                                            <div className='filter-option'>
                                                <input
                                                    id={`filter-option-${id}-${index}`}
                                                    type="checkbox"
                                                    onClick={() =>
                                                        handleCollectOption(optionsFilter, option.option_name)}
                                                />
                                                <label for={`filter-option-${id}-${index}`}>
                                                    {option.option_name}
                                                </label>
                                            </div>
                                        )
                                    }    
                                    else if (option.color_hexRgb)
                                        return (  
                                            <span>
                                                <button className='filter-option-color'
                                                    style={{
                                                        backgroundColor:`#${option.color_hexRgb}`
                                                    }}>
                                                </button>
                                            </span>
                                        )
                                    else if (option.gtprice)
                                        return (
                                            <div className='filter-price-area'>
                                                <input type="checkbox" id={`filter-price-${index}`} />
                                                <label for={`filter-price-${index}`}>
                                                    {handlePrice(option.gtprice, option.ltprice)}
                                                </label>
                                            </div>
                                        )
                                    else return null
                                })   
                            }
                        </div>
                    )
                })
            }
       </div>
    )
}
    
export default Filters;