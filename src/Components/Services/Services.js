import React, { useEffect } from "react";
import { useState } from "react";
import "./Services.scss";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
const Services = () => {
  const [datas, setDatas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getData = async () => {
    const resp = await fetch("http://localhost:4030/data");
    const json = await resp.json();
    setDatas(json);
  };
  useEffect(() => {
    getData();
  }, []);

  // Filter the data based on the search query
  const filteredData = datas.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="serviceouter" style={{ background: "black" }}>
      <Link to={"/"} className="Sb">
        {" "}
        <BsFillArrowLeftCircleFill
          style={{ marginTop: "10px", marginLeft: "10px", fontSize: "22px" }}
        />
      </Link>

      {/* <Navbar /> */}
      <div className="container">
        <h1 className="servicehead">SHAPE YOUR BODY AND GET TO FIT </h1>
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
          {filteredData.map((item) => {
            return (
              <div className="  col-3 mb-5 " key={item.id}>
                <div
                  className=" Tile card h-100"
                  style={{
                    background: "black",
                    color: "white",
                    borderColor: "white",
                  }}
                >
                  <img
                    class="card-img-top"
                    style={{ height: "300px" }}
                    src={item.image}
                    alt="..."
                  />
                  <div className="TileBottom">
                    <div class="card-body p-4">
                      <div className="text-center">
                        <h5 class="fw-bolder" style={{ marginBottom: "16px" }}>
                          {item.title}
                        </h5>
                      </div>
                    </div>

                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div class="text-center">
                        <Link
                          className="btnservices"
                          to={`/details/${item.id}`}
                          href="#"
                        >
                          View options
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
{
  /* <Details /> */
}

export default Services;
