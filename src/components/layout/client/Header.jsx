import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { useAppSelector } from "../../../store/user/hook";
function Header() {
  // useEffect(() => {
  //   const line = document.querySelector(`.${classes.line}`);
  //   const navItem = document.querySelectorAll(`.${classes.navItem}`);

  //   navItem.forEach((nav, i) => {
  //     nav.addEventListener("mousemove", (e) => {
  //       console.log(e);
  //     });
  //   });
  // }, []);

  const user = useAppSelector(({ auth }) => auth.user);
  return (
    <>
      <header className={classes.header}>
        <div className={classes.topNavigation}>
          <div className={classes.container}>
            <ul className={classes.topList}>
              <li className={classes.topItem}>
                <Link to={""}>Giới thiệu</Link>
              </li>
              <li className={classes.topItem}>
                {user.user.email ? (
                  <p>{user.user.email}</p>
                ) : (
                  <Link to="/login">Đăng nhập</Link>
                )}
              </li>
              <li className={classes.topItem}>
                {user.user.email ? (
                  <button>Logout</button>
                ) : (
                  <Link to="">Đăng ký</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className={classes.heading}>
        <div className={classes.headingContainer}>
          <Link to="/" className={classes.headingLink}>
            <img
              className={classes.headingImg}
              src="https://hoanghamobile.com/Content/web/img/logo-text.png"
              alt=""
            />
          </Link>
          <div className={classes.searchBox}>
            <div className={classes.searchBorder}>
              <form action="">
                <input
                  type="text"
                  className={classes.searchInput}
                  placeholder="Bạn muốn tìm gì"
                />
                <button className={classes.searchBtn}>
                  <i className="fa fa-solid fa-cart-plus"></i>
                </button>
              </form>
            </div>
          </div>
          <div className={classes.cart}>
            <i className="fa fa-solid fa-cart-plus"></i>
          </div>
        </div>
      </div>
      <nav className={classes.nav}>
        <div className={classes.navWrapper}>
          <ul className={classes.navList}>
            <li className={classes.navItem}>
              <Link to="" className={classes.navLink}>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className={classes.navIcon}
                >
                  <title>mobile</title>
                  <path d="M23 0h-14c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 1.5h8v1h-8v-1zM16 30c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM24 24h-16v-20h16v20z"></path>
                </svg>
                <span className={classes.navTitle}>ĐIỆN THOẠI</span>
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link to="" className={classes.navLink}>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className={classes.navIcon}
                >
                  <title>clock</title>
                  <path d="M20.586 23.414l-6.586-6.586v-8.828h4v7.172l5.414 5.414zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"></path>
                </svg>
                <span className={classes.navTitle}>ĐỒNG HỒ</span>
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link to="" className={classes.navLink}>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className={classes.navIcon}
                >
                  <title>laptop</title>
                  <path d="M28 22v-16c0-1.1-0.9-2-2-2h-20c-1.1 0-2 0.9-2 2v16h-4v6h32v-6h-4zM20 26h-8v-2h8v2zM26 22h-20v-15.996c0.001-0.001 0.002-0.003 0.004-0.004h19.993c0.001 0.001 0.003 0.002 0.004 0.004v15.996z"></path>
                </svg>

                <span className={classes.navTitle}>LAPTOP</span>
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link to="" className={classes.navLink}>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className={classes.navIcon}
                >
                  <title>tablet</title>
                  <path d="M25 0h-20c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h20c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM15 31c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zM24 28h-18v-24h18v24z"></path>
                </svg>

                <span className={classes.navTitle}>TABLET</span>
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link to="" className={classes.navLink}>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className={classes.navIcon}
                >
                  <title>newspaper</title>
                  <path d="M28 8v-4h-28v22c0 1.105 0.895 2 2 2h27c1.657 0 3-1.343 3-3v-17h-4zM26 26h-24v-20h24v20zM4 10h20v2h-20zM16 14h8v2h-8zM16 18h8v2h-8zM16 22h6v2h-6zM4 14h10v10h-10z"></path>
                </svg>
                <span className={classes.navTitle}>TIN TỨC</span>
              </Link>
            </li>
          </ul>
          <div className={classes.line}></div>
        </div>
      </nav>
    </>
  );
}

export default Header;
