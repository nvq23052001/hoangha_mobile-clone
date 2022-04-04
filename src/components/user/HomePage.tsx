import React from "react";
import { Link } from "react-router-dom";
import Slice from "../UI/Slice";

import classes from "./HomePage.module.css";
function HomePage() {
  return (
    <div>
      <Slice />
      <main>
        <div className={classes.all}>
          <h2 className={classes.allTitle}>Tất cả sản phẩm</h2>
          <div className={classes.allWrapper}>
            <div className={classes.allBox}>
              <div className={classes.allImg}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2021/09/15/image-removebg-preview-15.png"
                  alt=""
                />
              </div>
              <div className={classes.allInfo}>
                <Link
                  to="/phone/1"
                  title="Điện thoại ipone 13"
                  className={classes.allName}
                >
                  Apple iPhone 13 Pro Max - Chính hãng VN/A
                </Link>
                <span className={classes.allPrice}>28,000,000 VNĐ</span>
              </div>
              <div className={classes.AllBtn}>
                <Link to="/phone/1">Mua ngay</Link>
              </div>
            </div>
            <div className={classes.allBox}>
              <div className={classes.allImg}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2021/09/15/image-removebg-preview-15.png"
                  alt=""
                />
              </div>
              <div className={classes.allInfo}>
                <Link
                  to="/phone/1"
                  title="Điện thoại ipone 13"
                  className={classes.allName}
                >
                  Apple iPhone 13 Pro Max - Chính hãng VN/A
                </Link>
                <span className={classes.allPrice}>28,000,000 VNĐ</span>
              </div>
              <div className={classes.AllBtn}>
                <Link to="/phone/1">Mua ngay</Link>
              </div>
            </div>
            <div className={classes.allBox}>
              <div className={classes.allImg}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2021/09/15/image-removebg-preview-15.png"
                  alt=""
                />
              </div>
              <div className={classes.allInfo}>
                <Link
                  to="/phone/1"
                  title="Điện thoại ipone 13"
                  className={classes.allName}
                >
                  Apple iPhone 13 Pro Max - Chính hãng VN/A
                </Link>
                <span className={classes.allPrice}>28,000,000 VNĐ</span>
              </div>
              <div className={classes.AllBtn}>
                <Link to="/phone/1">Mua ngay</Link>
              </div>
            </div>
            <div className={classes.allBox}>
              <div className={classes.allImg}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2021/09/15/image-removebg-preview-15.png"
                  alt=""
                />
              </div>
              <div className={classes.allInfo}>
                <Link
                  to="/"
                  title="Điện thoại ipone 13"
                  className={classes.allName}
                >
                  Apple iPhone 13 Pro Max - Chính hãng VN/A
                </Link>
                <span className={classes.allPrice}>28,000,000 VNĐ</span>
              </div>
              <div className={classes.AllBtn}>
                <Link to="/">Mua ngay</Link>
              </div>
            </div>
            <div className={classes.allBox}>
              <div className={classes.allImg}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2021/09/15/image-removebg-preview-15.png"
                  alt=""
                />
              </div>
              <div className={classes.allInfo}>
                <Link
                  to="/"
                  title="Điện thoại ipone 13"
                  className={classes.allName}
                >
                  Apple iPhone 13 Pro Max - Chính hãng VN/A
                </Link>
                <span className={classes.allPrice}>28,000,000 VNĐ</span>
              </div>
              <div className={classes.AllBtn}>
                <Link to="/">Mua ngay</Link>
              </div>
            </div>
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
            <div className={classes.allBox}>
              <div className={classes.allImg}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/11/17/macmoi256.png"
                  alt=""
                />
              </div>
              <div className={classes.allInfo}>
                <Link
                  to="/"
                  title="Điện thoại ipone 13"
                  className={classes.allName}
                >
                  Apple M1 - MacBook Air 13" 16GB/256GB 2020 - Chính hãng Apple
                  Việt Nam
                </Link>
                <span className={classes.allPrice}>28,000,000 VNĐ</span>
              </div>
              <div className={classes.AllBtn}>
                <Link to="/">Mua ngay</Link>
              </div>
            </div>
            <div className={classes.allBox}>
              <div className={classes.allImg}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/11/17/macmoi256.png"
                  alt=""
                />
              </div>
              <div className={classes.allInfo}>
                <Link
                  to="/"
                  title="Điện thoại ipone 13"
                  className={classes.allName}
                >
                  Apple M1 - MacBook Air 13" 16GB/256GB 2020 - Chính hãng Apple
                  Việt Nam
                </Link>
                <span className={classes.allPrice}>28,000,000 VNĐ</span>
              </div>
              <div className={classes.AllBtn}>
                <Link to="/">Mua ngay</Link>
              </div>
            </div>
            <div className={classes.allBox}>
              <div className={classes.allImg}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/11/17/macmoi256.png"
                  alt=""
                />
              </div>
              <div className={classes.allInfo}>
                <Link
                  to="/"
                  title="Điện thoại ipone 13"
                  className={classes.allName}
                >
                  Apple M1 - MacBook Air 13" 16GB/256GB 2020 - Chính hãng Apple
                  Việt Nam
                </Link>
                <span className={classes.allPrice}>28,000,000 VNĐ</span>
              </div>
              <div className={classes.AllBtn}>
                <Link to="/">Mua ngay</Link>
              </div>
            </div>
            <div className={classes.allBox}>
              <div className={classes.allImg}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/11/17/macmoi256.png"
                  alt=""
                />
              </div>
              <div className={classes.allInfo}>
                <Link
                  to="/"
                  title="Điện thoại ipone 13"
                  className={classes.allName}
                >
                  Apple M1 - MacBook Air 13" 16GB/256GB 2020 - Chính hãng Apple
                  Việt Nam
                </Link>
                <span className={classes.allPrice}>28,000,000 VNĐ</span>
              </div>
              <div className={classes.AllBtn}>
                <Link to="/">Mua ngay</Link>
              </div>
            </div>
            <div className={classes.allBox}>
              <div className={classes.allImg}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/11/17/macmoi256.png"
                  alt=""
                />
              </div>
              <div className={classes.allInfo}>
                <Link
                  to="/"
                  title="Điện thoại ipone 13"
                  className={classes.allName}
                >
                  Apple M1 - MacBook Air 13" 16GB/256GB 2020 - Chính hãng Apple
                  Việt Nam
                </Link>
                <span className={classes.allPrice}>28,000,000 VNĐ</span>
              </div>
              <div className={classes.AllBtn}>
                <Link to="/">Mua ngay</Link>
              </div>
            </div>
            <div className={classes.allBox}>
              <div className={classes.allImg}>
                <img
                  src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/11/17/macmoi256.png"
                  alt=""
                />
              </div>
              <div className={classes.allInfo}>
                <Link
                  to="/"
                  title="Điện thoại ipone 13"
                  className={classes.allName}
                >
                  Apple M1 - MacBook Air 13" 16GB/256GB 2020 - Chính hãng Apple
                  Việt Nam
                </Link>
                <span className={classes.allPrice}>28,000,000 VNĐ</span>
              </div>
              <div className={classes.AllBtn}>
                <Link to="/">Mua ngay</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
