# Advanced of web development

## AJAX

AJAX (**A**synchronous **J**avaScript **A**nd **X**ML), đây là một công nghệ giúp chung ta tạo ra những Web động mà hoàn toàn không reload lại trang nên rất mượt và đẹp.

<div align="center">
    <img src="/media/ajax.png" alt="web-thinking">
</div>

## CROS

CROS (**C**ross-**o**rigin **r**esource **s**haring) là một tiêu chuẩn để truy cập tài nguyên web trên các tên miền khác nhau. CROS cho phép các web scripts tương tác cởi mở hơn với nội dung bên ngoài tên, miền gốc, dẫn đế sự tích hợp tốt hơn giữa các dịch vụ web.

Để ngăn chặn các trang web giả mạo, các trình duyệt web thực hiện một biện pháp an ninh được gọi là **same-origin policy** (SOP). SOP cho phép các tài nguyên (như Javascript) tương tác với các tài nguyên từ cùng một tên miền khác. Nếu không có SOP, khi người dùng vô tình truy cập một trang web độc hại, script được đặt sẵn trên nãy có thể truy cấp được dữ liệu và thực hiện tính năng của bất kỳ trang web nào người dùng đã dùng trước đó. Chẳng hạn như thực hiện chuyển tiền, đọc email , hay chụp ảnh thẻ tín dụng khi giao dịch trực tuyến. Vì lý do này, các trình duyệt hiện đại bắt buộc phải áp dụng SOP để ngăn chặn tương tác giữa các domain khác nhau.

### Cách hoạt động của CROS

- **Bước 1:** Một người dùng mở một tài nguyên trên một trang web chuyển đến một tên miền khác. Đây thường là tệp JavaScript, nhưng có thể bao gồm các phông chữ và tài nguyên CSS
- **Bước 2:** Trình duyệt của người dùng tạo kết nối đến tên miền thứ hai, thêm vào request mot HTTP header "Origin" chứa tên miền đầu tiên.
- **Bước 3:** Tên miền thứ hai trả lời với HTTP header "Access-Control-Allow-Origin" liệt kê các tên miền được phép thực hiện yêu cầu của CORS. Ký tự đại diện ("*") cho phép tất cả các tên miền thực hiện yêu cầu.
- **Bước 4:** Nếu tên miền đầu tiên được phép thực hiện request, tên miền thứ hai sẽ trả về nội dung được yêu cầu.

Header Access-Control-Allow-Origin được định nghĩa trong cấu hình máy chủ của tên miền thứ hai. Nếu header không chứa ký tự (*) và tên miền đầu tiên không có trong danh sách, trình duyệt sẽ hiển thị thông báo lỗi.

## Reference

- [CORS](https://topdev.vn/blog/cors-la-gi/)
- [Server rendering vs Client rendering](https://toidicodedao.com/2018/09/11/su-khac-biet-giua-server-side-rendering-va-client-side-rendering/)
