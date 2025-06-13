const questionData = [
  {
    title: "Cách sử dụng JavaScript để tạo một trang web động",
    description: "Tôi muốn biết cách sử dụng JavaScript để tạo một trang web động. Tôi đã nghe nói về việc sử dụng DOM và sự kiện, nhưng tôi không chắc chắn bắt đầu từ đâu.",
    tags: ["JavaScript", "DOM", "Events"],
    author: "Lê Huy Tuấn",
    time: "1 giờ trước",
    votes: 15,
    answers: 10,
    views: 129,
  },
  {
    title: "Làm thế nào để căn giữa một phần tử với CSS?",
    description: "Tôi đang cố căn giữa một div theo cả chiều ngang và dọc. Có những cách nào đơn giản và hiệu quả nhất?",
    tags: ["CSS", "Flexbox", "Centering"],
    author: "Nguyễn Văn An",
    time: "2 giờ trước",
    votes: 12,
    answers: 8,
    views: 205,
  },
  {
    title: "Sự khác nhau giữa var, let và const là gì?",
    description: "Tôi mới học JavaScript và thấy có 3 cách khai báo biến. Nên dùng cái nào và khi nào?",
    tags: ["JavaScript", "ES6", "Biến"],
    author: "Trần Thị Mai",
    time: "3 giờ trước",
    votes: 20,
    answers: 15,
    views: 300,
  },
  {
    title: "Tạo form liên hệ với Bootstrap như thế nào?",
    description: "Tôi muốn tạo một form liên hệ responsive với Bootstrap. Có các class nào giúp căn chỉnh đẹp không?",
    tags: ["HTML", "Bootstrap", "Form"],
    author: "Phạm Minh Nhật",
    time: "4 giờ trước",
    votes: 9,
    answers: 6,
    views: 142,
  },
  {
    title: "Làm sao tạo hiệu ứng hover cho nút với CSS?",
    description: "Tôi muốn thêm hiệu ứng khi rê chuột vào nút như đổi màu nền, thêm bóng,... Có cách nào dễ dùng?",
    tags: ["CSS", "Hover", "Transitions"],
    author: "Lý Văn Cường",
    time: "30 phút trước",
    votes: 5,
    answers: 2,
    views: 88,
  },
  {
    title: "DOM là gì trong JavaScript?",
    description: "Tôi thấy nhiều người nhắc đến DOM khi làm việc với JavaScript. Nó là gì và tại sao lại quan trọng?",
    tags: ["JavaScript", "DOM", "Cơ bản"],
    author: "Đỗ Hoài Nam",
    time: "5 giờ trước",
    votes: 17,
    answers: 9,
    views: 234,
  },
  {
    title: "Cách sử dụng grid layout trong Bootstrap 5",
    description: "Tôi muốn hiểu cách chia cột bằng hệ thống lưới trong Bootstrap để bố cục trang web.",
    tags: ["Bootstrap", "Grid", "Responsive"],
    author: "Nguyễn Bảo Khánh",
    time: "6 giờ trước",
    votes: 14,
    answers: 7,
    views: 199,
  },
  {
    title: "Sự khác nhau giữa padding và margin trong CSS?",
    description: "Tôi thường nhầm lẫn giữa padding và margin. Có cách nào dễ nhớ không?",
    tags: ["CSS", "Spacing", "Box Model"],
    author: "Hoàng Thị Minh",
    time: "7 giờ trước",
    votes: 11,
    answers: 5,
    views: 173,
  },
  {
    title: "Làm sao để validate form bằng JavaScript?",
    description: "Tôi muốn kiểm tra các trường trong form trước khi gửi. Có nên dùng HTML5 hay viết JS riêng?",
    tags: ["JavaScript", "Form Validation", "UX"],
    author: "Võ Duy Khang",
    time: "8 giờ trước",
    votes: 18,
    answers: 11,
    views: 221,
  },
  {
    title: "Khi nào nên dùng class và id trong HTML?",
    description: "Tôi đang học HTML/CSS. Có quy tắc nào để chọn giữa class và id khi gán vào phần tử không?",
    tags: ["HTML", "CSS", "Best Practices"],
    author: "Trịnh Quốc Đạt",
    time: "1 ngày trước",
    votes: 8,
    answers: 3,
    views: 95,
  }
];


function renderQuestion(data) {
  const question = document.getElementById("question-list");
  const questionItem = document.createElement("article");
  questionItem.className = "row question-card flex-nowrap py-3 border-top m-0";
  questionItem.innerHTML = `<div class="question-statis col-2 d-none d-md-block text-end text-muted p-0">
                                <div>${data.votes} votes</div>
                                <div>${data.answers} answers</div>
                                <div>${data.views} views</div>
                            </div>
                            <!-- Cột phải: nội dung chính -->
                            <div class="question-content col-12 col-md-10 text">
                                <!-- Tiêu đề -->
                                <div class="question-statis col-12 d-flex d-md-none text-muted p-0">
                                    <div class="pe-3">${data.votes} votes</div>
                                    <div class="pe-3">${
                                      data.answers
                                    } answers</div>
                                    <div class="pe-3">${data.views} views</div>
                                </div>
                                <a href="#" class="d-block question-title mb-1" style="font-size: 16px;">
                                    ${data.title}
                                </a>

                                <!-- Mô tả ngắn -->
                                <div class="question-desc text-muted mb-2" style="font-size: 14px;">
                                    ${data.description}
                                </div>

                                <!-- Thẻ tag + Tác giả  -->
                                <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-1">
                                    <!-- tag -->
                                    <ul class="tag-list d-flex flex-nowrap gap-1 list-unstyled">
                                        ${data.tags
                                          .map(
                                            (tag) =>
                                              `<li class="tag">${tag}</li>`
                                          )
                                          .join("")}
                                    </ul>
                                    <!-- Tác giả và thời gian -->
                                    <div class="article-info text-muted me-4">
                                        <a href="#">
                                            <i class="fa fa-user me-1"></i>
                                            <span class="text-primary">${
                                              data.author
                                            }</span>
                                        </a>
                                        <a href="#" class="text-muted ms-1">
                                            <time>${data.time}</time>
                                        </a>
                                    </div>
                                </div>
                            </div>`;
  return question.appendChild(questionItem);
}

// Gọi hàm renderQuestion với dữ liệu mẫu
questionData.forEach((element) => {
  renderQuestion(element);
});

// đếm số lượng câu hỏi
const questionCount = document.getElementById("quantity-question");
questionCount.innerText = questionData.length + " questions";


// Tạo toast Bootstrap khi click vào link href="#"
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href") === "#") {
      e.preventDefault();
      const toastElement = document.getElementById("myToast");
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
    }
  });
});


