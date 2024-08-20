
import './StyleAdminPage.css'; // Đảm bảo bạn đã tạo file CSS cho các kiểu dáng
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from "react";

export default function AdminPage() {
  // Initialize the state as an empty array
  const [questions, setQuestions] = useState([]);

  // Function to fetch questions from the API
  const fetchQuestions = async () => {
    try {
      const response = await fetch("https://66bf5cf442533c403145f070.mockapi.io/api/question-answer/id");
      const data = await response.json();

      // Check if the response data is an array
      if (Array.isArray(data)) {
        setQuestions(data);
      } else {
        console.error("API response is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  // useEffect to fetch questions when the component mounts
  useEffect(() => {
    fetchQuestions();
  }, []);

  // Function to handle reply button click
  const handleReply = (id) => {
    alert(`Trả lời câu hỏi với ID: ${id}`);
    // Implement additional actions like opening a reply dialog or redirecting to a reply page
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
          <div className="comment-item">
            <div className="avt-name">
              <img src={images.avatar} alt="Avatar" />
              <p style={{ color: "green" }}>GUEST</p>
            </div>
            <div className="comment">
              <h6 className="uppercase">{question.name}</h6>
              <p>{question.question}</p>
              <br/>
              
              <button onClick={() => handleReply(question.id)}><FontAwesomeIcon icon={faMessage} />   Trả lời</button>
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
}