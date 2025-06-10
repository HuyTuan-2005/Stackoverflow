const questionDataList = [
  {
    title: "Làm sao để dùng API trong JavaScript?",
    description: "Tôi đang học về fetch API và cần ví dụ minh hoạ.",
    tags: ["javascript", "api", "fetch"],
    author: "Lê Huy Tuấn",
    time: "1 phút trước",
    votes: 12,
    answers: 3,
    views: 127,
  },
  {
    title: "Làm sao để Menu nằm ngang trên thanh siderbar?",
    description: "Cô em bảo dọc chấm dọc ngang chấm ngang.",
    tags: ["html", "css", "javascript"],
    author: "Nguyễn Minh Trí",
    time: "5 phút trước",
    votes: 0,
    answers: 3,
    views: 50,
  },
  {
    title: "Cách dùng async/await đúng cách?",
    description: "Sự khác nhau giữa async/await và promise là gì?",
    tags: ["async", "await", "promise"],
    author: "Vạn Trung Tính",
    time: "10 phút trước",
    votes: 8,
    answers: 2,
    views: 90,
  },
  {
    title: "Làm sao để xử lý sự kiện trong DOM hiệu quả?",
    description: "Tôi muốn hiểu rõ hơn về event listener và delegation.",
    tags: ["dom", "events", "javascript"],
    author: "Lê Thế Huy",
    time: "12 phút trước",
    votes: 6,
    answers: 1,
    views: 60,
  },
  {
    title: "Khác biệt giữa arrow function và function thường?",
    description:
      "Tôi bối rối về cách hoạt động của 'this' trong các loại function.",
    tags: ["javascript", "arrow", "function"],
    author: "Phạm Thùy Dung",
    time: "20 phút trước",
    votes: 11,
    answers: 4,
    views: 98,
  },
  {
    title: "Cách kiểm tra định dạng email với Regex?",
    description: "Tôi cần validate input email trong form.",
    tags: ["regex", "email", "validation"],
    author: "Trịnh Hoàng Nam",
    time: "25 phút trước",
    votes: 7,
    answers: 2,
    views: 85,
  },
  {
    title: "So sánh localStorage và sessionStorage",
    description: "Hai loại này khác nhau ra sao và khi nào nên dùng?",
    tags: ["localstorage", "sessionstorage", "browser"],
    author: "Ngô Thị Lan",
    time: "35 phút trước",
    votes: 10,
    answers: 3,
    views: 110,
  },
  {
    title: "Cách tối ưu vòng lặp khi xử lý dữ liệu lớn?",
    description: "Làm sao để duyệt qua mảng nhanh hơn với ít bộ nhớ hơn?",
    tags: ["javascript", "loop", "performance"],
    author: "Đặng Văn Cường",
    time: "40 phút trước",
    votes: 5,
    answers: 1,
    views: 58,
  },
  {
    title: "Tại sao nên dùng template literal trong ES6?",
    description: "Khác biệt giữa dùng dấu ` và chuỗi nối bằng + là gì?",
    tags: ["template", "string", "es6"],
    author: "Vũ Minh Tuấn",
    time: "50 phút trước",
    votes: 9,
    answers: 3,
    views: 76,
  },
  {
    title: "Giải thích cách hoạt động của setTimeout và setInterval",
    description: "Sự khác nhau về thời gian thực thi của hai hàm này là gì?",
    tags: ["settimeout", "setinterval", "timing"],
    author: "Lâm Thanh Thảo",
    time: "1 giờ trước",
    votes: 13,
    answers: 4,
    views: 140,
  },
  {
    title: "Cách kiểm tra một object có rỗng hay không?",
    description: "Tôi muốn biết cách kiểm tra object không có thuộc tính.",
    tags: ["object", "check", "javascript"],
    author: "Bùi Nhật Long",
    time: "1 giờ 15 phút trước",
    votes: 3,
    answers: 0,
    views: 21,
  },
];

function renderQuestionList(question) {
  const article = document.createElement("article");
  article.className = "row question-card flex-nowrap py-3 border-top m-0";

  article.innerHTML = `
    <!-- Cột trái: thống kê -->
    <div class="question-statis col-2 d-none d-md-block text-end text-muted p-0">
      <div>${question.votes} votes</div>
      <div>${question.answers} answers</div>
      <div>${question.views} views</div>
    </div>

    <!-- Cột phải: nội dung chính -->
    <div class="question-content col-12 col-md-10">
      <div class="question-statis col-12 d-flex d-md-none text-muted p-0">
        <div class="pe-3">${question.votes} votes</div>
        <div class="pe-3">${question.answers} answers</div>
        <div class="pe-3">${question.views} views</div>
      </div>

      <a href="#" class="d-block" style="font-size: 16px;">
        ${question.title}
      </a>

      <div class="question-desc text-muted mb-2" style="font-size: 14px;">
        ${question.description}
      </div>

      <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
        <!-- tag -->
        <div class="tag-list d-flex flex-nowrap gap-1">
          <span class="tag">${question.tags[0]}</span>
          <span class="tag">${question.tags[1]}</span>
          <span class="tag">${question.tags[2]}</span>
        </div>

        <!-- Tác giả và thời gian -->
        <div class="article-info text-muted me-4">
          <a href="#">
            <i class="fa fa-user me-1"></i>
            <span class="text-primary">${question.author}</span>
          </a>
          <a href="#" class="text-muted">
            <time>${question.time}</time>
          </a>
        </div>
      </div>
    </div>
  `;

  return article;
}

const questionList = document.getElementById("question-list");
questionList.innerHTML = "";
questionDataList.forEach((question) => {
  const card = renderQuestionList(question);
  questionList.appendChild(card);
});
// Thêm thông tin vào thẻ
