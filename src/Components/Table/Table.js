import React, { useState, useEffect } from "react";
import "./Table.scss";
const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("Data/table.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    
    <div className="qwe">
      <div>
      <h2 className="tablehead">WORKOUT SCHEDULE </h2>
      </div>
      <div className="tableouter">
      <div className="tableouter__tableinside">
        <table className="gymtable">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tues</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="www">
                <td>
                  <p className="time">{item.timeS}</p>
                  <p className="date">{item.Sun}</p>
                </td>
                <td>
                  <p className="time">{item.timeM}</p>
                  <p className="date">{item.Mon}</p>
                </td>
                <td>
                  
                  <p className="time">{item.timeT}</p>
                  <p className="date">{item.Tues}</p>
                </td>
                <td>
               
                  <p className="time">{item.timeW}</p>
                  <p className="date">{item.Wed}</p>
                </td>
                <td>
                 
                  <p className="time">{item.timeTh}</p>
                  <p className="date">{item.Thu}</p>
                </td>
                <td>
                 
                  <p className="time">{item.timeF}</p>
                  <p className="date">{item.Fri}</p>
                </td>
                <td>
                 
                  <p className="time">{item.timeSa}</p>
                  <p className="date">{item.Sat}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default Table;
