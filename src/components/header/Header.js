import "./Header.css";
import { TfiViewGrid, TfiSearch, TfiBag } from "react-icons/tfi";
import { useState, useRef, useEffect } from 'react'
import img from "./QRCode.png";
// import { detail } from "./dbdetail/detail"


function DropQr() {
  return (
    <div className="top-qrcode">
      <img src={img} />
      <p className="drop-text1">Quét để tải ứng dụng</p>
    </div>
  );
}

function DropCare() {
  return (
    <div className="top-care">
      <div><a>Trung tâm hỗ trợ</a></div>
      <div><a>Trả hàng hoàn tiền</a></div>
    </div>
  );
}

function DropOrder() {
  return (
    <div className="top-order">
      <form>
        <input className="order-serial" placeholder="Nhập mã đơn hàng">
        </input>
        <input className="order-contact" placeholder="Email/Số điện thoại">
        </input>
        <div className="order-submit">Kiểm tra</div>
      </form>
    </div>
  );
}



function Header(props) {

  let { textSearch, setTextSearch } = props;
  let saveText;

  const [show1, setShowQr] = useState(false)
  const [show2, setShowCare] = useState(false)
  const [show3, setShowOrder] = useState(false)
  const [suggestName, setSuggestName]= useState([])
  const [dataProduct, setDataProduct] = useState([])
  const [showS, setShowS] = useState(false)
  const refQr = useRef();
  const refCare = useRef();
  const refOrder = useRef();
  

  const clickOutSide = () => {
    setShowQr(false)
    setShowCare(false)
    setShowOrder(false)
  }

  const onBlur = ()=>{
    setTimeout(() => {
      hideSuggest()
    }, 1000)
  }

  const onFocus = () => {
    setShowS(true)
  }

  const onChange = (e) => {
    showSuggest()
    textSearch = e.target.value
    saveText = textSearch
    getNameProducts(textSearch)
    // console.log(showS)
    // console.log(textSearch)
  }

  const onClick = () => {
    hideSuggest()
    handleSearch(saveText)
    // console.log(saveText)
  }

  function handleSearch(textSearch){
    setTextSearch(textSearch)
    // console.log(textSearch)
  }

  useEffect(() => {
    const handleClickOutSide = () => {
      if (refQr.current || refCare.current || refOrder.current) {
        clickOutSide();
      }
    }
    document.addEventListener('click', handleClickOutSide, true);
    return document.removeEventListener('click', handleClickOutSide, false);
  }, []);

  function getNameProducts(str) {
    let listItem = dataProduct.filter((item) => {
      const fixStr = str.toLowerCase()
      const fixName = item.name.toLowerCase()
      return fixName.includes(fixStr)
    })
    let listName = listItem.map((item) => {
      return item.name
    })
    // console.log(listName)
    setSuggestName(listName)
  }

  function hideSuggest() {
    return document.getElementById("suggestSearch").style = "display: none";
    // setShowS(false)
  }
  function showSuggest() {
    return document.getElementById("suggestSearch").style = "display: block";
    // setShowS(true)
  }

  useEffect(() => {
    
  }, [showS])
  
  function Suggest() {
    return (
      <div id="suggestSearch">
        <ul className="ul-suggestSearch">Gợi ý tìm kiếm:
          {suggestName.map((name) => {
            return (<li onClick={() => {
              hideSuggest()
              handleSearch(name)
            }}>{name}</li>)})
          }
        </ul>
      </div>
    )
  }

  useEffect(() => {
    fetch("http://localhost:8000/productions")
        .then(res => res.json())
        .then(data => {setDataProduct(data)})
  }, []) 


  return (
    <div id="header">
      <div className="header-top-bg">
        <div className="header-top">
          <div className="top-span1"
            onClick={(e) => {
              setShowQr(!show1);
              setShowCare(false);
              setShowOrder(false);
            }}
            ref={refQr}
          >
            <span >Tải ứng dụng</span>
            {show1 ? <DropQr /> : null}
          </div>

          <div className="top-span2" 
          onClick={() => {
              setShowQr(false);
              setShowCare(!show2);
              setShowOrder(false);
            
            }}
            ref={refCare}
            >
            <span>Chăm sóc khách hàng</span>
            {show2 ? <DropCare /> : null}
          </div>

          <div className="top-span3" 
          onClick={() => {
              setShowQr(false);
              setShowCare(false);
              setShowOrder(!show3);
            }}
            ref={refOrder}
            >
            <span>Kiểm tra đơn hàng</span>
            {show3 ? <DropOrder /> : null}
          </div>
        </div>
        
        {/* Header bot */}
        <div className="header-bot-bg">
          <div className="header-bot">
            <span className="header-bot-name">Sendo</span>
            <TfiViewGrid className="header-bot-menu" />
            <input
              className="header-bot-input" placeholder="Tìm kiếm trên Sendo..."
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              />
            {Suggest()}
            <button className="header-bot-search"
              onClick={onClick}
            >
              <TfiSearch className="btn-search"/>
            </button>
            <TfiBag className="header-bot-bag" />
            <button className="header-bot-login">Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
