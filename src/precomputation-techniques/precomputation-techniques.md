## Khái niệm

Precomputation techniques đề cập đến quá trình tính toán trước và lưu trữ trước kết quả của một số tính toán hoặc cấu trúc dữ liệu nâng cao,
để tăng tốc thời gian thực hiện chương trình. Điều này có thể hữu ích trong các tình huống cần thực hiện cùng một phép tính hoặc cấu trúc dữ liệu nhiều lần vì nó tránh được việc phải tính toán lại chúng mỗi lần.

## Lý do sử dụng

- Tối ưu hóa thời gian chạy của chương trình bằng cách giảm thời gian cần thiết cho các phép tính lặp đi lặp lại.
- Giảm thời gian thực thi của chương trình bằng cách thực hiện trước 1 số phép tính hoặc thao tác dữ liệu được lưu trữ để sử dụng sau.
- Precomputation techniques một chiến lược được sử dụng để tối ưu hóa hiệu suất của các giải pháp lập trình bằng cách giảm độ phức tạp về thời gian của chương trình.

## Các trường hợp sử dụng

- Prefix/Suffix Arrays:
  Ví dụ mảng có n phần tử array[n] với T trường hợp muốn lấy thông tin trong O(1) 
  1. Sum/ Xor tất cả các phần tử của mảng từ trái qua phải. 
  2. Nhỏ nhất/Lớn nhất phần tử từ trái đến vị trí ‘i’.
  
  ```
    const prefixSum = new Array(5).fill(0);
    const prefixXor = new Array(5).fill(0);
    const minLeft = new Array(5).fill(0);
    const maxLeft = new Array(5).fill(0);
    
    function preCompute(n, arr) {
        // Initialize values for the first element
        prefixSum[0] = prefixXor[0] = minLeft[0] = maxLeft[0] = arr[0];

        // Tính toán prefix sums, XORs, minimums, and maximums
        for (let i = 1; i < n; i++) {
            prefixSum[i] = prefixSum[i - 1] + arr[i];
            prefixXor[i] = prefixXor[i - 1] ^ arr[i];
            minLeft[i] = Math.min(minLeft[i - 1], arr[i]);
            maxLeft[i] = Math.max(maxLeft[i - 1], arr[i]);
        }
    }

    const n = 5;
    const arr = [2, 3, 1, 4, 5];
    preCompute(n, arr);

    // In danh sách
    console.log("Prefix Sum:", prefixSum);
    console.log("Prefix XOR:", prefixXor);
    console.log("Min Left:", minLeft);
    console.log("Max Left:", maxLeft);
  ```

