
import "./Footer.css"





function Footer() {
    


    return (
        <>
            <div className="footer-container-bg">
                <div className="slogan-container">
                    <div className="slogan-item">
                        <div>
                            <img className="slogan-img" src="https://media3.scdn.vn/img4/2020/12_16/gJwXr6FFZKZCGKWaz4RB.png" alt="" />
                        </div>
                        <div>
                            <div className="slogan">Siêu nhiều hàng tốt</div>
                            <div className="slogan-desc"><span>Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm</span></div>
                        </div>
                    </div>
                    <div className="slogan-item">
                        <div>
                            <img className="slogan-img" src="https://media3.scdn.vn/img4/2020/12_16/EfZWQVfV6nQzu2vMmnwC.png" alt="" />
                        </div>
                        <div>
                            <div className="slogan">Siêu yên tâm</div>
                            <div className="slogan-desc"><span>Miễn phí đổi trả 24h</span></div>
                        </div>
                    </div>
                    <div className="slogan-item">
                        <div>
                            <img className="slogan-img" src="https://media3.scdn.vn/img4/2020/12_16/j5C6IQz7gIXPgjFJxmRz.png" alt="" />
                        </div>
                        <div>
                            <div className="slogan">Siêu tiện lợi</div>
                            <div className="slogan-desc"><span>Mang thế giới mua sắn của Sendo trong tầm tay bạn</span></div>
                        </div>
                    </div>
                    <div className="slogan-item">
                        <div>
                            <img className="slogan-img" src="https://media3.scdn.vn/img4/2020/12_16/7AJFQGQ5qvS7gGOz8P7a.png" alt="" />
                        </div>
                        <div>
                            <div className="slogan">Siêu tiết kiệm</div>
                            <div className="slogan-desc"><span>Giá hợp lý, vừa túi tiền. Nhiều chương trình khuyến mại</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="info-about-us">
                    <h3>Về chúng tôi</h3>
                    <p>Giới thiệu Sendo.vn</p>
                    <p>Giới thiệu SenMall</p>
                    <p>Quy chế hoạt động</p>
                    <p>Chính sách bảo mật</p>
                    <p>Giao hàng và nhận hàng</p>
                </div>
                <div className="info-for-sale">
                    <h3>Dành cho ngời mua</h3>
                    <p>Giải quyết khiếu nại</p>
                    <p>Hướng dẫn mua hàng</p>
                    <p>Chính sách đổi trả</p>
                    <p>Chăm sóc khách hàng</p>
                    <p>Nạp tiền điện thoại</p>
                </div>
                <div className="info-for-client">
                    <h3>Dành cho người bán</h3>
                    <p>Quy định giành cho người bán</p>
                    <p>Chính sách bán hàng</p>
                    <p>Hệ thống tiêu chí kiểm duyệt</p>
                    <p>Mở shop trên Sendo</p>
                </div>
                <div className="info-download">
                    <h3>Tải ứng dụng Sendo</h3>
                    <p>Mang thế giới mua sắm của Sendo trong tầm tay bạn</p>
                    <div className="info-download-app" >
                        <a href=""><img src="https://media3.scdn.vn/img4/2020/12_16/5lUTWdk3DXr8nlC9MDII.png"></img></a>
                        <a href=""><img src="https://media3.scdn.vn/img4/2021/10_26/0ZARLASzVrfL92924rzW.png"></img></a>
                        <a href=""><img src="https://media3.scdn.vn/img4/2021/03_19/AMV086JNpEbm4OGAvVng.png"></img></a>
                    </div>
                </div>
            </div>
            <div class="contact-bg">
                <div className="contact">
                    <div className="contact-us">
                        <h4>Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT</h4>
                        <p>Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 20, ngày 26/04/2022.</p>
                        <p>Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.</p>
                        <p>Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.</p>
                        <p>Email: lienhe@sendo.vn</p>
                        <div className="certificate">
                            <a href=""><img src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png"></img></a>
                            <a href=""><img src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png"></img></a>
                        </div>
                    </div>
                    <div className="contact-your">
                        <h4>Đăng ký nhận bản tin ưu đãi khủng từ Sendo</h4>
                        <div>
                            <input placeholder="Email của bạn là"></input>
                            <button>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer;