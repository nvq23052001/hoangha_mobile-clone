import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slice from "../UI/Slice";

import { getAll } from "../../api/product/index";

import classes from "./HomePage.module.css";
import instance from "../../api/instance";
function HomePage() {
  type Product = {
    _id: string;
    image: string;
    name: string;
    price: number;
  };

  type Laptop = {
    category: object;
    products: [{ name: string; price: number; image: string; _id: string }];
  };
  const [products, setProducts] = useState<Product[]>([]);
  const [laptop, setLaptop] = useState<Laptop>();

  useEffect(() => {
    const handleProducts = async () => {
      const { data } = await instance.get(`api/products?page=1`);
      setProducts(data);
    };

    handleProducts();
  }, []);
  useEffect(() => {
    const handleLaps = async () => {
      const { data } = await instance.get(
        `api/category/6249d93124055f6d72104d2e?page=1`
      );
      setLaptop(data);
    };
    handleLaps();
  }, []);
  console.log(laptop);

  return (
    <div>
      <Slice />
      <main>
        <div className={classes.all}>
          <h2 className={classes.allTitle}>Sản phẩm mới nhất</h2>
          <div className={classes.allWrapper}>
            {products.map((product) => (
              <div className={classes.allBox}>
                <div className={classes.allImg}>
                  <img src={`http://localhost:8000/${product.image}`} alt="" />
                </div>
                <div className={classes.allInfo}>
                  <Link
                    to={`/phone/${product._id}`}
                    title="Điện thoại ipone 13"
                    className={classes.allName}
                  >
                    {product.name}
                  </Link>
                  <span className={classes.allPrice}>
                    {new Intl.NumberFormat("en-US").format(product.price)} VNĐ
                  </span>
                </div>
                <div className={classes.AllBtn}>
                  <Link to={`/phone/${product._id}`}>Mua ngay</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.banner}>
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2022/04/02/mi-fan-festival-2022-04.jpg"
            alt=""
          />
        </div>

        <div className={classes.all}>
          <h2 className={classes.allTitle}>Laptop mới nhất</h2>
          <div className={classes.allWrapper}>
            {laptop
              ? laptop.products.map((lap) => (
                  <div className={classes.allBox}>
                    <div className={classes.allImg}>
                      <img src={`http://localhost:8000/${lap.image}`} alt="" />
                    </div>
                    <div className={classes.allInfo}>
                      <Link
                        to={`/phone/${lap._id}`}
                        title=""
                        className={classes.allName}
                      >
                        {lap.name}
                      </Link>
                      <span className={classes.allPrice}>
                        {new Intl.NumberFormat("en-US").format(lap.price)} VNĐ
                      </span>
                    </div>
                    <div className={classes.AllBtn}>
                      <Link to={`/phone/${lap._id}`}>Mua ngay</Link>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
