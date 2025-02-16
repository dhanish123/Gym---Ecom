import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./Services.scss";

// const API_URL = process.env.REACT_APP_API_URL;

const Services = () => {
  const [datas, setDatas] = useState([]); // Ensure datas is always an array
  const [searchQuery, setSearchQuery] = useState("");

  const getData = async () => {
    try {
      const resp = await fetch("http://localhost:5004/data");
      // const resp = await fetch(API_URL);
      if (!resp.ok) throw new Error("Failed to fetch data");

      const json = await resp.json();
      console.log("Fetched Data:", json); // Debugging output


      // Ensure datas is always an array
      setDatas(Array.isArray(json) ? json : []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDatas([]); // Set empty array on error
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Ensure datas is an array before filtering
  const filteredData = Array.isArray(datas)
    ? datas.filter((item) =>
        item?.title?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="serviceouter" style={{ background: "black" }}>
      <Link to={"/"} className="Sb">
        <BsFillArrowLeftCircleFill
          style={{ marginTop: "10px", marginLeft: "10px", fontSize: "22px" }}
        />
      </Link>

      <div className="container">
        <h1 className="servicehead">SHAPE YOUR BODY AND GET TO FIT</h1>

        {/* Search box */}
        <div className="filtersearch">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="row">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div className="col-3 mb-5" key={item.id}>
                <div
                  className="Tile card h-100"
                  style={{
                    background: "black",
                    color: "white",
                    borderColor: "white",
                  }}
                >
                  <img
                    className="card-img-top"
                    style={{ height: "300px" }}
                    src={item.image}
                    alt="Service"
                  />
                  <div className="TileBottom">
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder" style={{ marginBottom: "16px" }}>
                          {item.title}
                        </h5>
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <Link className="btnservices" to={`/details/${item.id}`}>
                          View options
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: "white", textAlign: "center" }}>No services found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
