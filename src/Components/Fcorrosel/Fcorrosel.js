import React from "react";
import Card from "react-bootstrap/Card";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import card1 from "../../images/1.svg";
import card2 from "../../images/2.svg";
import card3 from "../../images/3.svg";
import card4 from "../../images/4.svg";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "./Fcorrosel.scss";

const Fcorrosel = () => {
  return (
    <div className="fmain" id="feature" style={{}}>
      <div className="ftop">
        <h1 className="fhead">FEATURES </h1>
      </div>
      <div className="fdown">
        <Swiper
          className="slide1"
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={5}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // When window width is <= 768px (mobile and tablet)

            320: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024:{
                slidesPerView:5,
            },
          }}
        >
          <SwiperSlide>
            <Card.Img variant="top" src={card1} style={{ marginTop: "20px" }} />
            <Card.Body style={{ color: "white", marginTop: "30px" }}>
              <Card.Title> Weight Lifting</Card.Title>
              <Card.Text>
                Some quick example text to build on the card
              </Card.Text>
            </Card.Body>
          </SwiperSlide>

          <SwiperSlide>
            <Card.Img variant="top" src={card2} />
            <Card.Body style={{ color: "white", marginTop: "30px" }}>
              <Card.Title>Cycling</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title
              </Card.Text>
            </Card.Body>
          </SwiperSlide>

          <SwiperSlide>
            <Card.Img variant="top" src={card3} style={{ marginTop: "20px" }} />
            <Card.Body style={{ color: "white", marginTop: "30px" }}>
              <Card.Title>Muscles</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title
              </Card.Text>
            </Card.Body>
          </SwiperSlide>

          <SwiperSlide>
            <Card.Img variant="top" src={card4} />
            <Card.Body style={{ color: "white", marginTop: "30px" }}>
              <Card.Title>Cardio</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title
              </Card.Text>
            </Card.Body>
          </SwiperSlide>

          <SwiperSlide>
            <Card.Img variant="top" src={card1} style={{ marginTop: "20px" }} />
            <Card.Body style={{ color: "white", marginTop: "30px" }}>
              <Card.Title> Weight Lifting</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title
              </Card.Text>
            </Card.Body>
          </SwiperSlide>

          <SwiperSlide>
            <Card.Img variant="top" src={card2} />
            <Card.Body style={{ color: "white", marginTop: "30px" }}>
              <Card.Title>Cycling</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title
              </Card.Text>
            </Card.Body>
          </SwiperSlide>

          <SwiperSlide>
            <Card.Img variant="top" src={card3} style={{ marginTop: "20px" }} />
            <Card.Body style={{ color: "white", marginTop: "30px" }}>
              <Card.Title>Muscles</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title
              </Card.Text>
            </Card.Body>
          </SwiperSlide>

          <SwiperSlide>
            <Card.Img variant="top" src={card4} />
            <Card.Body style={{ color: "white", marginTop: "30px" }}>
              <Card.Title>Cardio</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title
              </Card.Text>
            </Card.Body>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Fcorrosel;
