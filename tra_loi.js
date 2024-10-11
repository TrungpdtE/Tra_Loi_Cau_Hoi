// Định nghĩa mảng chứa các câu hỏi và đáp án
const questions = [
    {
      question: 'Ai là người đầu tiên bước lên mặt trăng?',
      answer: 'Neil Armstrong'
    },
    {
      question: 'Thủ đô của Việt Nam là gì?',
      answer: 'Hà Nội'
    },
    {
      question: 'Ai là người đàn ông giàu nhất thế giới hiện nay?',
      answer: 'Jeff Bezos'
    }
  ];
  
  // Yêu cầu người dùng nhập vào từ khóa
  const keyword = prompt('Hãy nhập từ khóa của bạn:').toLowerCase();
  
  // Tìm kiếm các câu hỏi chứa từ khóa và hiển thị đáp án
  let found = false;
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i].question.toLowerCase();
    const answer = questions[i].answer;
    if (question.includes(keyword)) {
      alert(`Câu hỏi: ${questions[i].question}\nĐáp án: ${answer}`);
      found = true;
    }
  }
  
  // Hiển thị thông báo nếu không tìm thấy câu hỏi nào chứa từ khóa
  if (!found) {
    alert(`Không tìm thấy câu hỏi nào chứa từ khóa "${keyword}".`);
  }