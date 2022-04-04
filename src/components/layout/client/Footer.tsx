import clsx from "clsx";
import React from "react";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <>
      <footer>
        <div className={classes.container}>
          <div className={classes.footerSupport}>
            <ul className={classes.supportList}>
              <li className={clsx(classes.supportItem, classes.title)}>
                Hỗ trợ - Dịch vụ
              </li>
              <li className={classes.supportItem}>Mua hàng trả góp</li>
              <li className={classes.supportItem}>Chính sách bảo hành</li>
              <li className={classes.supportItem}>Câu hỏi thường gặp</li>
              <li className={classes.supportItem}>Tra cứu đơn hàng</li>
              <li className={classes.supportItem}>Chính sách bảo mật</li>
              <li className={classes.supportItem}>
                Chính sách hủy giao dịch, đổi trả
              </li>
            </ul>
          </div>
          <div className={classes.footerSupport}>
            <ul className={classes.supportList}>
              <li className={clsx(classes.supportItem, classes.title)}>
                Thông Tin Liên Hệ
              </li>
              <li className={classes.supportItem}>Bán hàng Online</li>
              <li className={classes.supportItem}>Chính sách bảo hành</li>
              <li className={classes.supportItem}>Câu hỏi thường gặp</li>
            </ul>
          </div>
          <div className={classes.footerSupport}>
            <ul className={classes.supportList}>
              <li className={clsx(classes.supportItem, classes.title)}>
                Hệ thống 95 siêu thị trên toàn quốc
              </li>
              <li className={classes.supportItem}>
                Danh sách 95 siêu thị trên toàn quốc
              </li>
            </ul>
          </div>
          <div className={classes.card}>
            <h2 className={classes.title}>Thanh toán miễn phí</h2>
            <div className={classes.cardWrapper}>
              <img
                src="https://hoanghamobile.com/Content/web/img/logo-visa.png"
                alt=""
              />
              <img
                src="https://hoanghamobile.com/Content/web/img/logo-master.png"
                alt=""
              />
              <img
                src="https://hoanghamobile.com/Content/web/img/logo-jcb.png"
                alt=""
              />
              <img
                src="https://hoanghamobile.com/Content/web/img/logo-samsungpay.png"
                alt=""
              />
              <img
                src="https://hoanghamobile.com/Content/web/img/logo-atm.png"
                alt=""
              />
              <img
                src="https://hoanghamobile.com/Content/web/img/logo-vnpay.png"
                alt=""
              />
            </div>
          </div>
          <div className={classes.ship}>
            <h2 className={classes.title}>Hình thức vận chuyển</h2>
            <div className={classes.shipWrapper}>
              <img
                src="https://hoanghamobile.com/Content/web/img/logo-atm.png"
                alt=""
              />
              <img
                src="https://hoanghamobile.com/Content/web/img/logo-vnpay.png"
                alt=""
              />
              <img
                className={classes.shipLarger}
                src="https://hoanghamobile.com/Content/web/img/logo-bct.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
