import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { login } from "../../../api/user";
import { getOnce } from "../../../api/product/index";
import { Descriptions, Badge } from "antd";

function ProductAdmin() {
  const [productDetail, setProductDetail] = useState<any>({});
  const [nameCate, setNameCate] = useState<string>("");
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await getOnce(id);

      setNameCate(data.category.name);
      setProductDetail(data);
    };
    getProduct();
  }, []);

  return (
    <div>
      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="Tên sản phẩm">
          {productDetail.name}
        </Descriptions.Item>
        <Descriptions.Item label="Giá sản phẩm">
          {productDetail.price} VNĐ
        </Descriptions.Item>
        <Descriptions.Item label="Danh mục sản phẩm">
          {nameCate}
        </Descriptions.Item>
        <Descriptions.Item label="Image">
          <img src={`http://localhost:8000/${productDetail.image}`} alt="" />
        </Descriptions.Item>
        <Descriptions.Item label="Ngày đăng" span={2}>
          {productDetail.createdAt}
        </Descriptions.Item>
        <Descriptions.Item label="Status" span={3}>
          {productDetail.status === 1 ? (
            <Badge status="processing" text="Còn hàng" />
          ) : (
            <Badge status="error" text="Hết hàng" />
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Ảnh chi tiết">
          <div className="flex justify-between">
            {productDetail.imageDetail !== undefined
              ? productDetail.imageDetail.map((img) => (
                  <img
                    src={`http://localhost:8000/${img}`}
                    style={{ width: "30%" }}
                  />
                ))
              : "b"}
          </div>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default ProductAdmin;
