import React from 'react'
import './Btn3.scss'
import { useNavigate } from 'react-router-dom';
const Btn3 = ({ handle,style,content,to }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) {
      navigate(to); // Use navigate to navigate to the specified path
    } else if (handle) {
      handle(); // Invoke the provided handle function if available
    }
  };
  return (
    <div className={`btn3-outer ${style}`}>
    <button onClick={handleClick} className='btn3'>{content}</button>
    </div>
  )
}

export default Btn3