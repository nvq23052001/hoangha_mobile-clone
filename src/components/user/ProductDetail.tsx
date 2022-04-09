import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-carousel-minimal";
import { useParams } from "react-router-dom";

import { getOnce } from "../../api/product";

import classes from "./ProductDetail.module.css";
function ProductDetail() {
  type ProductType = {
    image: string;
    price: Number;
    name: string;
    description: string;
    imageDetail: [];
  };

  type Slide = {
    image: string;
    caption: string;
  };

  const { id } = useParams();

  const [product, setProduct] = useState<ProductType>({
    image: "a",
    price: 1,
    name: "a",
    description: "a",
    imageDetail: [],
  });
  const [data, setData] = useState<Slide[]>([]);

  useEffect(() => {
    const handleProduct = async () => {
      const { data } = await getOnce(id);
      setProduct(data);
      setData(data.imageDetail);
    };
    handleProduct();
  }, []);

  const dataInitial = [
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
  console.log(product);
  return (
    <div className={classes.container}>
      <div className={classes.productDetail}>
        <div className={classes.productTop}>
          <h1 className={classes.productTitle}>
            Redmi Note 11S 8GB/128GB - Chính hãng
          </h1>
        </div>
        <div className={classes.productContainer}>
          <div className={classes.productImg}>
            <div style={{ textAlign: "center" }}>
              <div>
                {/* <Carousel
                  data={data !== [] ? data : dataInitial}
                  time={2000}
                  width="600px"
                  height="400px"
                  radius="10px"
                  slideNumber={false}
                  captionPosition="bottom"
                  automatic={true}
                  dots={false}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="white"
                  slideImageFit="object-fit"
                  thumbnails={true}
                  thumbnailWidth="100px"
                  style={{
                    textAlign: "center",
                    maxWidth: "auto",
                    maxHeight: "auto",
                    margin: "40px auto",
                  }}
                /> */}
                <div className={classes.dm}>
                  <div className={classes.imgMain}>
                    <img
                      src={`http://localhost:8000/${product.image}`}
                      alt=""
                    />
                  </div>
                  <div className={classes.imgDetail}>
                    {data.map((img) => (
                      <img src={`http://localhost:8000/${img}`} alt="" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.productDetailContainer}>
            <p className={classes.productPrice}>
              {product.price} VNĐ | <i>Giá đã bao gồm 10% VAT</i>
            </p>
            <p className={classes.productShip}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className={classes.shipIcon}
              >
                <title>clock</title>
                <path d="M20.586 23.414l-6.586-6.586v-8.828h4v7.172l5.414 5.414zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"></path>
              </svg>
              <span>Miễn phí vận chuyển toàn quốc</span>
            </p>
            <div className={clsx(classes.productDesc)}>
              <h2 className={classes.productSale}>Khuyến mãi</h2>
              <p className={classes.productDescP}>
                Ưu đãi mua: Ốp lưng Clear Case with MagSafe-690.000đ (Tiết kiệm
                600.000đ): Mua Ốp lưng Silicone Case with MagSafe - 690.000đ
                (Tiết kiệm 600.000đ); Ốp lưng Leather Case with MagSafe -
                990.000đ (Tiết kiệm 600.000đ)
              </p>
            </div>
            <div className={classes.productDesc}>
              <h2 className={classes.productSale}>Mô tả sản phẩm</h2>
              <p className={classes.productDescP}>{product.description}</p>
            </div>
            <div className={classes.productBtn}>
              <button className={classes.productCart}>Thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
