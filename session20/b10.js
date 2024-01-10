// Khai báo biến a là số nguyên
let a = 6;

// Khai báo biến result để lưu trữ kết quả
let result;

// Tăng giá trị của a lên 1 trước khi gán giá trị cho biến a
++a;

// Gán giá trị của a cho biến result
result = ++a;

// In ra giá trị của biến result
console.log(result); // 7

// Tăng giá trị của a lên 1 sau khi gán giá trị cho biến a
a++;

// Gán giá trị của a cho biến result
result = a++;

// In ra giá trị của biến result
console.log(result); // 8

// Tăng giá trị của a lên 1 trước khi gán giá trị cho biến a
++a;

// Gán giá trị của a cho biến result
result = ++a + a + a++;

// Gán giá trị của a cho biến result
result = result + ++a;

// In ra giá trị của biến result
console.log(result); // 22