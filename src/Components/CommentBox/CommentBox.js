// import React, { useState } from "react";
// import "./CommentBox.scss";

// const generateUniqueID = () => {
//   // Implement the logic to generate a unique ID
//   // You can use libraries like uuid or nanoid for this
//   const id = Math.random().toString(36).substring(2, 9);
//   return id;
// };

// const CommentBox = () => {
//   const [comment, setComment] = useState("");

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const handleSubmitComment = (event) => {
//     event.preventDefault();
//     // Submit the comment to the server or store it locally
//     console.log("Submitted comment:", comment);

//     // Add the comment to the UI
//     const reviewContainer = document.createElement("div");
//     reviewContainer.classList.add("review");
//     const reviewText = document.createTextNode(comment);
//     reviewContainer.appendChild(reviewText);

//     const commentsSection = document.querySelector(".comment-box");
//     commentsSection.appendChild(reviewContainer);

//     // Clear the input field
//     setComment("");
//   };

//   return (
//     <div className="comment-box">
//       <h2>Leave a Review</h2>
//       <form onSubmit={handleSubmitComment}>
//         <textarea
//           value={comment}
//           onChange={handleCommentChange}
//           placeholder="Write your review here..."
//           required
//         />
//         <button type="submit">Submit Review</button>
//       </form>
//     </div>
//   );
// };
// export default CommentBox;


//dm

import React, { useEffect, useState } from "react";
import "./CommentBox.scss";
import { useParams } from "react-router";

const getStoredComments = () => {
return localStorage.getItem("comments") ? JSON.parse(localStorage.getItem("comments")) : []
}


const CommentBox = ({id}) => {
  const [comment, setComment] = useState("");
  
  const [comments, setComments] = useState(getStoredComments);

 useEffect(()=>{
localStorage.setItem("comments",JSON.stringify(comments))
 },[comments])
  
console.log(comments);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Find the index of the comment being edited (if any)
    const editingIndex = comments.findIndex((c) => c.editing);

    // If a comment is being edited
    if (editingIndex !== -1) {
      // Create a copy of the comments array
      const updatedComments = [...comments];

      // Update the existing comment with the new text
      updatedComments[editingIndex] = { text: comment };

      // Set the state with the updated comments array
      setComments(updatedComments);
    } else {
      // If not in edit mode, add a new comment to the comments array
      setComments([...comments, { id, text: comment }]);
    }

    // Clear the input field by resetting the comment state to an empty string
    setComment("");
  };

  const handleEditComment = (id) => {
    // Find the comment in the comments array with the specified id
    const commentToEdit = comments.find((c) => c.id === id);

    // If a comment with the specified id is found
    if (commentToEdit) {
      // Set the comment state to the text of the comment being edited
      setComment(commentToEdit.text);

      // Set the editing flag for the comment being edited
      const updatedComments = comments.map((c) =>
        c.id === id ? { ...c, editing: true } : c
      );

      // Set the state with the updated comments array
      setComments(updatedComments);
    }
  };

  const handleDeleteComment = (id) => {
    // Remove the comment with the specified id
    const updatedComments = comments.filter((c) => c.id !== id);
    setComments(updatedComments);
  };

  return (
    <div className="comment-box">
      <h2>Product Review</h2>

      <form onSubmit={handleSubmitComment}>
        <div className="textareaclass">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your review here..."
            required
          />
        </div>
        <div className="submitclass">
          <button type="submit">Submit Review</button>
        </div>
      </form>
      <div className="comment-listclass">
        <ul className="comment-list">
          
          {/* {
          comments.map((c) => (
            <li key={c.id}>
              {c.text}
              <button onClick={() => handleEditComment(c.id)}>Edit</button>
              <button onClick={() => handleDeleteComment(c.id)}>Delete</button>
            </li>
          ))
          } */}

          {
            
comments.map((c)=>{
  return c.id === id && (
    <li key={c.id}>
    {c.text}
    <button onClick={() => handleEditComment(c.id)}>Edit</button>
    <button onClick={() => handleDeleteComment(c.id)}>Delete</button>
  </li>
  ) 
})
          }
        </ul>
      </div>
    </div>
  );
};

const generateUniqueID = () => {
  // Implement the logic to generate a unique ID
  // You can use libraries like uuid or nanoid for this
  const id = Math.random().toString(36).substring(2, 9);
  return id;
};

export default CommentBox;
