// var b

// console.log("Xin chào các bạn đến với ngôn ngữ lập trình Javascript")

// let b = 5

// var c = 5

// // Khai báo biến: Từ khóa khai báo + Tên biến = Giá trị của biến
// const d = 5

// // Sử dụng biến
// // Gán lại giá trị mới cho biến
// // d = 10

// b = 10
// c = 20
// console.log("Giá trị của biến b là:", b)
// console.log("Giá trị của biến c là:", c)

/*
1. Biến const thì không thể gán lại giá trị khác sau khi khởi tạo
2. Không thể sử dụng biến khai báo bằng từ khóa let trước khi khởi tạo
3. Có thể sử dụng biến khai báo bằng từ khóa var trước khi khởi tạo (undefined - không xác định) => Hoisting
4. Khi khai báo biến bằng từ khóa let trong 1 scope nhỏ => Biến này chỉ được sử dụng trong scope nhỏ đó
5. Biến được khai báo bằng từ khóa var (global scope)

==> Tóm lại là hãy khai báo biến bằng từ khóa let hoặc const 
*/


// console.log("Giá trị của biến a là:", a)
// console.log("Giá trị của biến b là:", b)
// let a = 5
// b = 10

// Scope
// let localVar = 10

// {
//     // Local scope (phạm vi nhỏ hơn)
//     let localVar = 20
//     console.log("Giá trị của biến local bên trong là:", localVar)
// }

// console.log("Giá trị của biến local bên ngoài là:", localVar)

// // Kiểu số number
// let age = 50
// // Kiểu chữ string
// let name = "Long"
// // Kiểu đúng sai boolean
// let isStudent = false
// let isTeacher = true
// // Kiểu undefined
// let something
// // Kiểu rỗng
// let empty = null

// console.log("Kiểu dữ liệu của biến là:", typeof age)
// console.log("Kiểu dữ liệu của biến là:", typeof name)
// console.log("Kiểu dữ liệu của biến là:", typeof isTeacher)
// console.log("Kiểu dữ liệu của biến là:", typeof something)
// console.log("Kiểu dữ liệu của biến là:", typeof empty)

// let number1 = 10
// let number2 = 22

// console.log("Giá trị sau khi tính toán là", number1 + number2)
// console.log("Giá trị sau khi tính toán là", number2 - number1)
// console.log("Giá trị sau khi tính toán là", number1 * number2)
// console.log("Giá trị sau khi tính toán là", number2 / number1)
// // Phép chia lấy dư
// console.log("Giá trị sau khi tính toán là", number2 % number1)


// const name = 'Nguyễn Thành Long';
// const time = 10
// // Literal Template
// const print = `Xin chào ${name}! Chào mừng đến với MindX, cảm ơn bạn đã đồng hành với MindX ${time} năm`;
// console.log(print); // Xin chào Mã Văn Tài! Chào mừng đến với MindX
