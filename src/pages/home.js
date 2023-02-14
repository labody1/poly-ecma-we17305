import Navagation from "../components/navigation"
import data from '../../db.json' assert {type: 'json'}

var HomePage = function() {
    console.log(data);
    return /*html*/`
    ${Navagation()}
        </div>
        <div class="content" style="display:grid;grid-template-columns: 1fr 4fr;">
            <div class="catergories">
                <p style="font-weight:600">DANH MỤC SẢN PHẨM</p>

            </div>
            <div class="products">
                <h3>Nhà Sách Tiki</h3>
                <img src="/public/banner.png" alt="" style="width:857px;height: 285px;">
                <div class="filter" style="display:grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr;width: 40%;" >
                    <a href="#" style="text-decoration: none;color:black;" >Phổ biến</a>
                    <a href="#" style="text-decoration: none;color:black;">Bán chạy</a>
                    <a href="#" style="text-decoration: none;color:black;">Hàng mới</a>
                    <a href="#" style="text-decoration: none;color:black;">Giá thấp</a>
                    <a href="#" style="text-decoration: none;color:black;">Giá cao</a>
                </div>
                <div style="margin:0 auto;">
                <div class="grid grid-cols-4 gap-10" >
                ${data.map(function(book, index) {
                    var discount=100-(book.current_seller.price/book.original_price*100);
                    discount=discount.toFixed(0)
                    return /*html*/`
                    <a href="/products/${book.id}">
                        <img src="${book.images[0].base_url}"/>
                        <h3>${book.name}</h3>
                        <span style="font-size:16px;color: #FF424E;padding-right:5px">${book.list_price} <u>đ</u></span>
                        <span style="border: 2px solid #FF424E;border-radius:2px;width: 40px;height: 20px;color:#FF424E;padding:0 4px">${discount}%</span>
                    </a>
                    `
                }).join('')}
            </div>
            </div>
        </div>
        </div>`
}

export default HomePage