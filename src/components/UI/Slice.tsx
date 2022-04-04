import { Carousel } from "react-carousel-minimal";
import React from "react";
function Slice() {
  const data = [
    {
      image:
        "https://cdn.hoanghamobile.com/i/home/Uploads/2022/04/02/web111.png",
      caption: ".",
    },
    {
      image:
        "https://cdn.hoanghamobile.com/i/home/Uploads/2022/03/28/web-1.jpg",
      caption: ".",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="">
      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="100%"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="150px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "100%  ",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slice;
