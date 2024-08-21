
import './StyleAdminPage.css'; // Đảm bảo bạn đã tạo file CSS cho các kiểu dáng
import images from '~/assets/images';
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPager, faPaperPlane, faReply, faTrashCan } from '@fortawesome/free-solid-svg-icons';


export default function AdminPage() {
  const [questions, setQuestions] = useState([]);
  const [activeReply, setActiveReply] = useState(null);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("https://66bf5cf442533c403145f070.mockapi.io/api/question-answer/id");
      const data = await response.json();

      if (Array.isArray(data)) {
        setQuestions(data);
      } else {
        console.error("API response is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleReply = (id) => {
    setActiveReply(id === activeReply ? null : id);
  };

  const handleAnswerChange = (id, newAnswer) => {
    // Cập nhật câu trả lời trong state questions
    setQuestions(prevQuestions =>
      prevQuestions.map(question =>
        question.id === id ? { ...question, answer: newAnswer } : question
      )
    );
  };
  const handleKeyDown = async (e, id) => {
      const updatedQuestion = questions.find(question => question.id === id);
      
      try {
        const response = await fetch(`https://66bf5cf442533c403145f070.mockapi.io/api/question-answer/id/${id}`, {
          method: 'PUT', // Sử dụng phương thức PUT để cập nhật dữ liệu
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ answer: updatedQuestion.answer }), // Gửi câu trả lời mới nhất
        });

        if (response.ok) {
          alert('Answer updated successfully');
          window.location.reload(); // Tải lại trang
        
        } else {
          console.error('Failed to update answer');
        }
      } catch (error) {
        console.error('Error updating answer:', error);
      }
  };
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://66bf5cf442533c403145f070.mockapi.io/api/question-answer/id/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer: ' ' }), // Cập nhật câu trả lời thành chuỗi rỗng
      });

      if (response.ok) {
        console.log('Answer deleted successfully');
        setQuestions(prevQuestions =>
          prevQuestions.map(question =>
            question.id === id ? { ...question, answer: ' ' } : question
          )
        );
      } else {
        console.error('Failed to delete answer');
      }
    } catch (error) {
      console.error('Error deleting answer:', error);
    }
  };


  return (
    <div className="comment-box">
      <h2 className="uppercase-header">Danh Sách Câu Hỏi</h2>
      {questions.map((question) => (
        <div key={question.id}>
          <div
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#001981",
            }}
          ></div>
          <div className='box-comment-answer'>
              <div className="comment-item">
                <div className="avt-name">
                  <img src={images.avatar} alt="Avatar" />
                  <p style={{ color: "green" }}>GUEST</p>
                </div>
                <div className="comment">
                  <h6 className="uppercase">{question.name}</h6>
                  <p>{question.question}</p>
                  <br />
                  <button className='btn-reply' onClick={() => handleReply(question.id)}><FontAwesomeIcon icon={faReply}/>Reply</button>
                  {activeReply === question.id && (
                    <div className='answer-admin' style={{ marginTop: '10px' }}>
                      <input
                        className='input-answer'
                        type="text"
                        placeholder="Nhập câu trả lời của bạn..."
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)} // Cập nhật câu trả lời khi người dùng nhập
                      />
                      <button onClick={(e) => handleKeyDown(e, question.id)}><FontAwesomeIcon icon={faPaperPlane}/></button>
                    </div>
                  
                  )}
                </div>
              </div>
            {/* Hiển thị AnswerBox chỉ khi question.answer không phải là rỗng */}
            {question.answer !== " " && (
                    <AnswerBox 
                      answer={question.answer} 
                      onDelete={() => handleDelete(question.id)} // Truyền hàm xóa vào AnswerBox  
                    />
                  )}
            </div>
        </div>
      ))}
    </div>
  );
}
function AnswerBox ({answer,onDelete }){
  return (
    <div className="comment-item">
    <div className="avt-name">
        <img src={images.avatar} alt="Avatar" />
        <p style={{ color: "red" }}>ADMIN</p>
      </div>
    <div className="comment">
        <h6 className="uppercase">ADMINISTRATOR</h6>
        <p>{answer}</p>
        <br />
        <button className='btn-delete' onClick={onDelete} style={{ float: 'right' }}><FontAwesomeIcon icon={faTrashCan}/></button>
      </div>
  </div>
  )
}