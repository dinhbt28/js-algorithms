

## Linked list
![Linked List](./images/linked-list.png)

- Danh sách liên kết là một cấu trúc dữ liệu tuyến tính tương tự như một mảng. Tuy nhiên, không giống như mảng, các phần tử không được lưu trữ ở một vị trí hoặc chỉ mục bộ nhớ cụ thể.  Đúng hơn là mỗi phần tử là một đối tượng riêng biệt chứa một con trỏ hoặc một liên kết tới đối tượng tiếp theo trong danh sách đó.
- Mỗi phần tử (thường được gọi là nút) chứa hai mục: dữ liệu được lưu trữ và liên kết đến nút tiếp theo. Dữ liệu có thể là bất kỳ loại dữ liệu hợp lệ nào. Bạn có thể thấy điều này được minh họa trong sơ đồ dưới đây.
- Điểm vào danh sách liên kết được gọi là phần đầu. Phần đầu là tham chiếu đến nút đầu tiên trong danh sách liên kết. Nút cuối cùng trong danh sách trỏ đến null. Nếu danh sách trống thì phần đầu là tham chiếu rỗng.
- Trong JavaScript, danh sách liên kết trông như thế này:
    ```sh
    const list = {
        head: {
            value: 6
            next: {
                value: 10                                             
                next: {
                    value: 12
                    next: {
                        value: 3
                        next: null	
                        }
                    }
                }
            }
        }
    };
    ```

## Ưu điểm của danh sách liên kết

-   Các nút có thể dễ dàng được xóa hoặc thêm từ danh sách liên kết mà không cần tổ chức lại toàn bộ cấu trúc dữ liệu. Đây là một lợi thế của nó so với mảng.

## Nhược điểm của danh sách liên kết
- Hoạt động tìm kiếm chậm trong danh sách liên kết. Không giống như mảng, không được phép truy cập ngẫu nhiên các phần tử dữ liệu. Các nút được truy cập tuần tự bắt đầu từ nút đầu tiên.
-   Nó sử dụng nhiều bộ nhớ hơn mảng vì lưu trữ các con trỏ.

## Các loại danh sách liên kết
-   Danh sách liên kết đơn : Mỗi nút chỉ chứa một con trỏ tới nút tiếp theo. Đây là những gì chúng ta đã nói đến cho đến nay.
-   Danh sách liên kết đôi : Mỗi nút chứa hai con trỏ, một con trỏ tới nút tiếp theo và một con trỏ tới nút trước đó.
-   Danh sách liên kết vòng : Danh sách liên kết vòng là một biến thể của danh sách liên kết trong đó nút cuối cùng trỏ đến nút đầu tiên hoặc bất kỳ nút nào khác trước nó, do đó tạo thành một vòng lặp.

## JavaScript
 -  Một nút danh sách chứa hai mục: dữ liệu và con trỏ tới nút tiếp theo. Chúng ta có thể triển khai nút danh sách trong JavaScript như sau:
 
         class ListNode {
            constructor(data) {
                this.data = data
                this.next = null                
            }
        }

        class LinkedList {
            constructor(head = null) {
                this.head = head
            }
        }
        
        let node1 = new ListNode(2);
        let node2 = new ListNode(5);
        node1.next = node2;
        
        let list = new LinkedList(node1);
        
        console.log(list.head.next.data) //returns 5
        

Xem thêm tại [Github](https://github.com/dinhbt28/js-algorithms)

