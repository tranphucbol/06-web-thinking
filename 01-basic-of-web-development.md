# Basic knowledge of Web development

## HTML5

HTML (Hyper Text Markup Language) có thể hiểu là ngôn ngữ chính của World Wide Web. Hầu hết những trang web được host trên mạng đều được viết bởi vài phiên bản của HTML. Qua HTML, lập trình viên có thể đảm bảo chắc chắn làm thế nào để  multimedia, văn bản và hyperlink giữa chúng hiển thị trên trình duyệt web. Từ những elements mà kết nối đến văn bản của bạn (hypertext) tới việc giúp những tài liệu này tương tác được (ví dụ: forms); tất cả là thành phần của HTML.

<div align="center">
    <img src="/media/history-of-html.jpg" alt="web-thinking">
</div>

### Các tính năng được thêm vào HTML5

- SVG, canvas và những hình dạng vector đều được hỗ trợ bởi HTML5
- Cho phép Javascript chạy trong web browser (nhờ vào Js web worker API của HTML5)
- HTML5 không dựa trên SGML, cho phép nó tăng luật parsing, có thể tương thích mạnh mẽ hơn
- **Trong** HTML5, inline MathML và SVG có thể được dùng trong văn bản nơi mà không được hỗ trợ trong HTML.
- Một số elements lỗi thời đã bị loại bỏ hoàn toàn là: isindex, noframes, acronym, applet, basefont, dir, font, frame, frameset, big, center, strike, tt.
- HTML5 hỗ trợ nhiều loại điều khiển form, ví dụ: ngày giờ, email, số lượng, khoảng, số điện thoại, URL, tìm kiếm, v.v...
- Có nhiều element được giới thiệu trong HTML. Một vài trong số chúng là quan trọng nhất: summary, time, aside, audio, command, data, datalist, details, embed, wbr, figcaption, figure, footer, header, article, hgroup, bdi, canvas, keygen, mark, meter, nav, output, progress, rp, rt, ruby, section, source, track, video.

<div align="center">
    <img src="/media/differences-between-html-and-html5.png" alt="web-thinking">
</div>

## CSS3

CSS3 là phiên bản mới nhất của CSS. Thuật ngữ CSS3 không chỉ là một tham chiếu đến các tính năng mới trong CSS, mà là cấp độ thứ 3 trong tiến trình của CSS. CSS3 chứa tất cả mọ thwusc có trong CSS2.1. Nó cũng bỗ sung các tính năng mới để giúp các nhà phát triển giải quyết một số vấn đè mà không cần đánh dấu phi ngữ nghĩa, tập lệnh phức tạp hoặc hình ảnh bổ sung.

### Các tính năng được thêm vào CSS3

- Selector
- Box model
- Background và Border
- Gía trị hình ảnh và nội dung thay thế
- Hiệu ứng văn bản
- Chuyển đổi 2D và 3D
- Ảnh động
- Bố cục nhiều cột

### Box Model

Ở trong HTML với mọi element chúng ta có thể gọi nó là một cái "hộp". Và trong Css thì thuật ngữ Box Model dùng để nói về design và layout. Chúng ta có thể coi CSS Box Model giống như là một cái hộp bao quanh element của chúng ta và trong đó có rất nhiều lớp dày mỏng khác nhau, các lớp dày mỏng đó bao gồm: margin, border, padding và cuối cùng là phần nội dung của chúng ta (text và hình ảnh).

<div align="center">
    <img src="/media/box-model.png" alt="web-thinking">
</div>

- **Content**: như đã nói ở trên đây là phàn mà text và hình ảnh của chúng ta xuất hiện
- **Padding**: là một khoảng trống kế tiếp bọc xung quanh **content**
- **Border**: phần khung bao bọc xung quanh **padding** và **content**
- **Margin**: cuối cùng, **margin** là phần ngoài cùng của Box Model, chỉ là một khoảng trống không màu.

### Flexbox

Flexbox là một kiểu dàng trang (layout mode) mà nó sẽ tự cân đối kích thước của các phần tử bên trong để hiển thị trên mọi thiết bị. Nói theo cách khác, bạn không cần thiết lập kích thước của phần tử, không cần cho nó float, chỉ cần thiếp lập nó hiện thị chiều ngang hay chiều dọc, lúc đó các phần tử bên trong có thể hiển thị theo ý muốn.

<div algin="center">
    <img src="/media/flex_terms.jpg" alt="web-thinking">
</div>

Hai thành phần quan trọng nhất trong một bố cục Flexbox là gồm container và item:

- **container**: là thành phần lớn bao quanh các phần tử bên trong, bạn sẽ thiết lập kiểu hiển thị inline (sắp xếp theo chiều ngang) hoặc kiểu sắp xếp theo chiều dọc. Khi đó, các item bên trọng sẽ hiển thị dự trên thiết lập của container này.
- **item**: các phần tử con của container được gọi là item, ở item bạn có thể thiếp lập nó sẽ sử dụng bao nhiêu cột trong một container, hoặc thiếp lập thứ tự hiển thị của nó.

<div align="center">
    <img src="/media/flexbox-layouts.png" alt="web-thinking">
</div>

### Media Queries

Media CSS là một "công nghệ" được giới thiệu trong CSS3. Nguyên tắc nó sử dụng trên thông qua các thông số kích thước màn hình được khai báo thông qua @media Với công cụ này chúng ta có thể phân đoạn Css chúng ta ra nhiều phần khác nhau tương ứng với kích thước của các loại thiết bị. Thuộc tính này có cú pháp như sau:

```css
@media not|only mediatype and (media feature) {
    CSS-Code;
}
```

Trong đó mediatype gồm các thuộc tính hay sử dụng sau:

- **all**: Dùng cho mọi thiết bị
- **print**: Dùng cho máy in
- **screen**: Dùng cho máy tính và các thiết bị smart phone

Có 2 khái niệm:

- **Device**: là thiết bị sử dụng website như Laptop, Desktop, Mobile,...
- **Viewport**: là kích thước hiển thị của giao diện.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Media featured thì gồm các thuộc tính sau:

- **aspect-ratio**: Tỉ lệ giữa chiều rộng và chiều cao của viewport
- **min-aspect-ratio**: Tỉ lệ tối thiểu giữa chiều rộng và chiều cao của viewport
- **max-aspect-ratio**: Tỉ lệ tôi đa giữa chiều rộng và chiều cao của viewport
- **color**: Số bits cho mỗi màu sắc của device
- **color-index**: Số lượng màu sắc mà device có thể hiển thị
- **device-aspect-ratio**: Tỉ lệ giữa chiều rộng và chiều cao của device
- **max-device-aspect-ratio**: Tỉ lệ tối đa giữa chiều rộng và chiều cao của device
- **min-device-aspect-ratio**: Tỉ lệ tối thiểu giữa chiều rộng và chiều cao của device
- **device-height**: Chiều cao của device
- **device-width**: Chiều rộng của device
- **height**: Chiều cao của viewport
- **width**: Chiều rộng của viewport
- **max-width**: Chiều rộng tối đa của viewport
- **min-width**: Chiều rộng tối thiểu của viewport
- **max-height**: Chiều cao tối đa của viewport
- **min-height**: Chiều cao tối thiểu của viewport
- **min-device-width**: Chiều rộng tối thiểu của device
- **max-device-width**: Chiều rộng tối đa của device
- **min-device-height**: Chiều cao tối thiểu của device
- **max-device-height**: Chiều cao tối đa của device
- **orientation**: Định hướng của khung nhìn (xoay hoặc không xoay thiết bị
- **resolution**: Độ phân giải của thiết bị đầu ra (sử dụng dpi hoặc dpcm)

`@media` với PC first trong Responsive

```css
/*Ipad ngang(1024 x 768)*/
@media screen and (max-width: 1024px){}
/*Ipad dọc(768 x 1024)*/
@media screen and (max-width: 768px){}
/*Tablet nhỏ(480 x 640)*/
@media screen and (max-width: 480px){}
/*Iphone(480 x 640)*/
@media screen and (max-width: 320px){}
/*Smart phone nhỏ*/
@media screen and (max-width: 240px){}
```

`@media` với Mobile first trong Responsvive

```css
/*Smart phone nhỏ*/
@media screen and (min-width: 240px){}
/*Iphone(480 x 640)*/
@media screen and (min-width: 320px){}
/*Tablet nhỏ(480 x 640)*/
@media screen and (min-width: 480px){}
/*Ipad dọc(768 x 1024)*/
@media screen and (min-width: 768px){}
/*Ipad ngang(1024 x 768)*/
@media screen and (min-width: 1024px){}
```

## Màu sắc trong thiết kế web

[Tham khảo](https://viblo.asia/p/co-ban-ve-ket-hop-mau-sac-trong-thiet-ke-website-yMnKMq0rK7P)

## Javascript

### Callback

**Callback** : Hiểu theo cách đơn giảnm, Callback là một function, được thực thi sau khi một function khác thực thi xong (thường là bất đồng bộ), nên nó có tên là call back (gọi lại) Phức tạp hơn: Trong Javascript, functions là objects, bởi vậy, một function có thể nhận tham số là function, và cũng có thể trả về một function. Bất cứ function nào được truyền vào như một tham số và được gọi sau đó được gọi callback function.

```javascript
function greeting(name) {
    console.log(`Hello ${name}`);
}

function greetingPhuc(greeting) {
    let name = "Phuc dep trai";
    greeting(name);
}

greetingPhuc(greeting); \\Hello Phuc dep trai
```

### Promise

> The **Promise** object is used for asynchronous computations. A Promise represents an operation that hasn't completed yet, but is expected in the future.

Một promise có 3 trạng thái:

- **pending**: Hiện promise chỉ là cam kết, còn đang chờ thực hiện.
- **fulfilled**: promise đã được thực hiện
- **reject**: thực hiện promise thất bại.

Tạo một Promise

```javascript
var promise = new Promise(callback);
```

Trong đó callback là một function có hai tham số truyền vào như sau:

```javascript
var promise = new Promise(function(resolve, reject) {
});
```

Trong đó:

- **resolve**: là một hàm callback xử lý cho hành động thành công.
- **reject**: là một hàm callback xử lý cho hành động thất bại.

```javascript
var promise = new Promise(function(resolve, reject) {
    resovle("Success");
    //OR
    reject("Error");
});

promise.then(function(message) {
    console.log(message); //success
}).catch(function(message) {
    console.log(message); //error
});
```

### Async/Await

Được giới thiệu trong ES8, async/await là một cơ chế giúp bạn thực hiện các thao tác bất đồng bộ một cách tuần tự hơn. Async/await vẫn sử dụng Promise ở bên dưới nhưng mã nguồn của bạn (theo một cách nào đó) sẽ trong sáng và dễ theo dõi.

```javascript
async function() {
    try {
        const user = await api.getUser('phucdeptrai');
        const history = await apt.getHistory(user);

        console.log(history);
    } catch (err) {
        console.log(err);
    }
}
```

*Lưu ý:* Kết quả trả về của `async function` luôn là một `Promise`

```javascript
async function hello() {
  return 1
}

console.log(hello() instanceof Promise) // true
hello().then(console.log) // 1
```

*Chạy nhiều Promise cùng với Promise.all():*

Khi gặp trường hơp muốn thực thi và lấy kết quả của nhiều promise cùng lúc. Nếu cách thông thường là dùng vòng lặp. 

```javascript
const userIds = [1, 2, 3, 4]

// api.getUser() là hàm trả về promise
const users = []
for (let id of userIds) {
  api.getUser(id).then(user => ([...users, user]))
}

console.log(users) // []
```

Lý do là vì khi promise chưa kịp resolve thì dòng `console.log` đã chạy rồi. Chúng ta có thể sửa bằng cách dùng `Promise.all([promise_1, promise_2,...])`. Phương thức này nhận vào một mảng các promise và chỉ resolve khi tất cả các promise này hoàn thành, hoặc reject khi một trong số chúng xảy ra lỗi.

```javascript
async function() {
  const userIds = [1, 2, 3, 4]
  const [user1, user2, user3, user4] = await Promise.all(usersIds.map(api.getUser))
}
```

### Closure

[Tham khảo](https://kipalog.com/posts/Closure-va-scope-trong-javascript)

### OOP

[Tham khảo](https://viblo.asia/p/oop-trong-javascript-gDVK2joAKLj)

# Reference

- [HTML5](https://www.hostinger.vn/huong-dan/khac-biet-giua-html-va-html5/)
- [Box Model](https://kipalog.com/posts/Cau-truc-CSS-Box-Model)
- [Flexbox (1)](https://thachpham.com/web-development/html-css/huong-dan-css3-flexbox-toan-tap.html)
- [Flexbox (2)](https://internetingishard.com/html-and-css/flexbox/)
- [Promise](https://freetuts.net/tim-hieu-promise-trong-javascript-es6-620.html)
- [Async/Await(1)](https://kipalog.com/posts/Co-ban-ve-async-await-trong-javascript)
- [Async/Await(2)](https://ehkoo.com/bai-viet/tat-tan-tat-ve-promise-va-async-await)
