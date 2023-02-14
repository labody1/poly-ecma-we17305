import Navagation from "../components/navigation";
import data from '../../db.json' assert {type: 'json'}
var ProductPage = function(id) {
    const book = data.find(function(item) {
        return item.id == id
    })
    var discount=100-(book.current_seller.price/book.original_price*100);
    discount=discount.toFixed(0)
    return /*html*/`
    ${Navagation()}
    <div class="div" style="display: grid;grid-template-columns: 3fr 5fr;">
        <div class="img_book" >
            <img class="max-w-[250px] max-h-[450px]" style="margin:0 auto" src="${book.images[0].base_url}"/>
            <div class="flex gap-4 ml-2" style="margin-top:10px">
                ${book.images.map(function (book,stt) {
                    return`
                    <img class="max-h-[50px] max-w-[50px]" src="${book.base_url}"/>
                    `
                }).join("")}
            </div>
        </div>
        <div class="info" style="margin-top: 10px">
            <span>${book.id}</span>
            <span>Tác giả: </span><span style="">${book.author?book.authors[0].name:"Đang cập nhật"}</span>
            <h3 style="font-weight:600">${book.name}</h3>
            <span style="">${book.quantity_sold.text?book.quantity_sold.text:"Đang cập nhật"}</span>
            <div class="price_aria" style="width:479;height: 103px;background-color:#FAFAFA;">
                <span style="font-size:34px;color: #FF424E;padding-right:5px">${book.list_price} <u>đ</u></span>
                <span style="color:#808089">${book.original_price} <u>đ</u></span>
                <span style="border: 2px solid #FF424E;border-radius:2px;width: 40px;height: 20px;color:#FF424E;padding:0 4px">${discount}%</span>
            </div>
            <p>Số Lượng</p>
            <button style="background-color: #FF3945;color: #fff;width: 300px;height: 48px;border: 2px solid #FF424E;border-radius:3px ;margin-top:20px">Chọn mua</button>
        </div>
    </div>
    <div class="product_similar">
    <p style="font-size:19px;font-weight: 600px;">Sản Phẩm Tương Tự</p>
    </div>
    <div class="info_details">
        <p style="font-size:19px;font-weight: 600px;">Thông Tin Chi Tiết</p>
        <div class="details" style="display:grid;grid-template-columns: 1fr 4fr;margin-bottom:0">
            <p style="background-color:#EFEFEF;margin-bottom:0">Công ty phát hành</p>
            <p>${book.specifications[0].attributes[0].value}</p>
            <p style="background-color:#EFEFEF;margin-bottom:0">Ngày xuất bản</p>
            <p>${book.specifications[0].attributes[1].value}</p>
            <p style="background-color:#EFEFEF;margin-bottom:0">Kích thước</p>
            ${book.specifications[0].attributes[2].value}
            <p style="background-color:#EFEFEF;margin-bottom:0">Dịch Giả</p>
            <p>${book.specifications[0].attributes[3].value}</p>
            <p style="background-color:#EFEFEF;margin-bottom:0">Loại bìa</p>
            <p>${book.specifications[0].attributes[4].value}</p>
            <p style="background-color:#EFEFEF;margin-bottom:0">Số trang</p>
            <p>${book.specifications[0].attributes[5].value}</p>
            <p style="background-color:#EFEFEF;margin-bottom:0">Nhà xuất bản</p>
            <p>${book.specifications[0].attributes[6]?book.specifications[0].attributes[6].value:"Đang cập nhật"}</p>
        </div>
        <p>Mô Tả Sản Phẩm</p>
        <div class="description" style="font-size:13px">
        ${book.description}
        </div>
        
    </div>
    `
}

export default ProductPage;
