const questionData = [
  {
    title: "Cách sử dụng JavaScript để tạo một trang web động",
    description:
      "Tôi muốn biết cách sử dụng JavaScript để tạo một trang web động. Tôi đã nghe nói về việc sử dụng DOM và sự kiện, nhưng tôi không chắc chắn bắt đầu từ đâu.",
    tags: ["JavaScript", "DOM", "Events"],
    author: "Lê Huy Tuấn",
    time: "1 giờ trước",
    votes: 15,
    answers: 10,
    views: 129,
  },
  {
    title: "Làm thế nào để căn giữa một phần tử với CSS?",
    description:
      "Tôi đang cố căn giữa một div theo cả chiều ngang và dọc. Có những cách nào đơn giản và hiệu quả nhất?",
    tags: ["CSS", "Flexbox", "Centering"],
    author: "Nguyễn Văn An",
    time: "2 giờ trước",
    votes: 12,
    answers: 8,
    views: 205,
  },
  {
    title: "Sự khác nhau giữa var, let và const là gì?",
    description:
      "Tôi mới học JavaScript và thấy có 3 cách khai báo biến. Nên dùng cái nào và khi nào?",
    tags: ["JavaScript", "ES6", "Biến"],
    author: "Trần Thị Mai",
    time: "3 giờ trước",
    votes: 20,
    answers: 15,
    views: 300,
  },
  {
    title: "Tạo form liên hệ với Bootstrap như thế nào?",
    description:
      "Tôi muốn tạo một form liên hệ responsive với Bootstrap. Có các class nào giúp căn chỉnh đẹp không?",
    tags: ["HTML", "Bootstrap", "Form"],
    author: "Phạm Minh Nhật",
    time: "4 giờ trước",
    votes: 9,
    answers: 6,
    views: 142,
  },
  {
    title: "Làm sao tạo hiệu ứng hover cho nút với CSS?",
    description:
      "Tôi muốn thêm hiệu ứng khi rê chuột vào nút như đổi màu nền, thêm bóng,... Có cách nào dễ dùng?",
    tags: ["CSS", "Hover", "Transitions"],
    author: "Lý Văn Cường",
    time: "30 phút trước",
    votes: 5,
    answers: 2,
    views: 88,
  },
  {
    title: "DOM là gì trong JavaScript?",
    description:
      "Tôi thấy nhiều người nhắc đến DOM khi làm việc với JavaScript. Nó là gì và tại sao lại quan trọng?",
    tags: ["JavaScript", "DOM", "Cơ bản"],
    author: "Đỗ Hoài Nam",
    time: "5 giờ trước",
    votes: 17,
    answers: 9,
    views: 234,
  },
  {
    title: "Cách sử dụng grid layout trong Bootstrap 5",
    description:
      "Tôi muốn hiểu cách chia cột bằng hệ thống lưới trong Bootstrap để bố cục trang web.",
    tags: ["Bootstrap", "Grid", "Responsive"],
    author: "Nguyễn Bảo Khánh",
    time: "6 giờ trước",
    votes: 14,
    answers: 7,
    views: 199,
  },
  {
    title: "Sự khác nhau giữa padding và margin trong CSS?",
    description:
      "Tôi thường nhầm lẫn giữa padding và margin. Có cách nào dễ nhớ không?",
    tags: ["CSS", "Spacing", "Box Model"],
    author: "Hoàng Thị Minh",
    time: "7 giờ trước",
    votes: 11,
    answers: 5,
    views: 173,
  },
  {
    title: "Làm sao để validate form bằng JavaScript?",
    description:"Tôi muốn kiểm tra các trường trong form trước khi gửi. Có nên dùng HTML5 hay viết JS riêng?",
    tags: ["JavaScript", "Form Validation", "UX"],
    author: "Võ Duy Khang",
    time: "8 giờ trước",
    votes: 18,
    answers: 11,
    views: 221,
  },
  {
    title: "Khi nào nên dùng class và id trong HTML?",
    description:
      "Tôi đang học HTML/CSS. Có quy tắc nào để chọn giữa class và id khi gán vào phần tử không?",
    tags: ["HTML", "CSS", "Best Practices"],
    author: "Trịnh Quốc Đạt",
    time: "1 ngày trước",
    votes: 8,
    answers: 3,
    views: 95,
  },
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
                                <div class="justify-content-between align-items-center flex-wrap gap-2 mb-1 d-block d-md-flex">
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
                                    <div class="article-info text-muted me-4 mt-2 mt-md-0">
                                        <a href="#">
                                            <i class="fa fa-user me-1"></i>
                                            <span class="text-primary">${
                                              data.author
                                            }</span>
                                        </a>
                                            <time class="text-muted ms-1">${
                                              data.time
                                            }</time>
                                    </div>
                                </div>
                            </div>`;
  return question.prepend(questionItem);
}

// Gọi hàm renderQuestion với dữ liệu mẫu
questionData.reverse().forEach((element) => {
  renderQuestion(element);
  countQuestions();
});

// đếm số lượng câu hỏi
function countQuestions() {
  const questionList = document.querySelectorAll(".question-card");

  let cnt = 0;
  questionList.forEach((q) => {
    if (!q.classList.contains("d-none")) {
      cnt++;
    }
  });
  const countElement = document.getElementById("quantity-questions");
  countElement.textContent = cnt + " questions";
}

// Hiển thị form
function showForm() {
  document.getElementById("ask-question-form").classList.remove("d-none");
  document.getElementById("ask-question-form").classList.toggle("d-block");
}

// Ẩn form
function hideForm() {
  document.getElementById("ask-question-form").classList.remove("d-block");
  document.getElementById("ask-question-form").classList.toggle("d-none");
  document.getElementById("ask-btn-form").classList.remove("d-none");
}

// Hiển thị form hỏi câu hỏi khi click vào nút "Ask a question"
document.getElementById("ask-btn-form").addEventListener("click", function () {
  document.getElementById("ask-btn-form").classList.add("d-none");
  showForm();
});

// Ẩn form hỏi câu hỏi khi click vào nút "Cancel"
document.getElementById("cancel-btn").addEventListener("click", function () {
  hideForm();
});

// Hàm để phân tích chuỗi và trả về mảng các thẻ tag
function parseTags(inputString) {
  return inputString
    .split("#")
    .filter((tag) => tag !== "")
    .map((tag) => tag.trim().toLowerCase());
}

// Xử lý sự kiện khi gửi form hỏi câu hỏi
document
  .getElementById("ask-question-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("form-title").value.trim();
    const description = document.getElementById("form-decription").value.trim();
    const tagsInput = document.getElementById("form-tags").value.trim();

    const question = {
      title: title,
      description: description,
      tags: parseTags(tagsInput),
      author: "User",
      time: "1 giây trước",
      votes: 0,
      answers: 0,
      views: 0,
    };

    e.target.reset();
    hideForm();
    renderQuestion(question);
    showToast("Gửi câu hỏi thành công", "success");
    countQuestions();
  });

function showToast(text, type) {
  const toastElement = document.getElementById("myToast");
  const toastBody = document.querySelector(".toast-body");

  toastBody.textContent = text;

  toastElement.classList.remove(
    "text-bg-success",
    "text-bg-danger",
    "text-bg-warning",
    "text-bg-primary"
  );

  switch (type) {
    case "success":
      toastElement.classList.add("text-bg-success");
      break;
    case "danger":
      toastElement.classList.add("text-bg-danger");
      break;
    case "warning":
      toastElement.classList.add("text-bg-warning");
      break;
    default:
      toastElement.classList.add("text-bg-primary");
      break;
  }

  const toast = new bootstrap.Toast(toastElement, {
    autohide: true,
    delay: 3000,
  });
  toast.show();
}

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    if (link.getAttribute("href") === "#") {
      e.preventDefault();
      showToast("Chức năng đang cập nhật", "primary");
    }
  });
});

document.getElementById("form-search").addEventListener("submit", function (e) {
  e.preventDefault();

  const questionCard = document.querySelectorAll(".question-card");
  const searchContent = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();

  let found = false;
  questionCard.forEach((q) => {
    const questionTitle = q
      .querySelector(".question-title")
      .textContent.toLowerCase();
    if (!questionTitle.includes(searchContent)) {
      q.classList.add("d-none");
    } else {
      found = true;
      q.classList.remove("d-none");
    }  
  });

  countQuestions();
  if (!found) {
    showToast("Không tìm thấy câu hỏi phù hợp!", "warning");
  }
});
