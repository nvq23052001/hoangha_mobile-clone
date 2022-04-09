import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Tag, Space, Switch } from "antd";
import "antd/dist/antd.css";

import { useAppSelector } from "../../../store/user/hook";

import { getAll, deleteProduct, updateProduct } from "../../../api/product";
import ButtonAdmin from "../../UI/ButtonAdmin";
import Status from "../../UI/Status";
import instance from "../../../api/instance";
function ProductsAdmin() {
  type product = {
    _id: string;
    name: string;
    price: Number;
    img: string;
    description: string;
    category: any;
    status: any;
  };
  type bgCl = string;

  const user = useAppSelector(({ auth }) => auth.user);

  const [products, setProducts] = useState<product[]>([]);
  const [totalPage, setTotalPage] = useState<any>(1);

  const getProduct = async (page: any) => {
    console.log(page);
    const { data } = await instance.get(`/api/products?page=${page}`);
    setProducts(data);
  };

  useEffect(() => {
    if (user) {
      getProduct(1);
    }
  }, []);

  const handleDelete = async (id: string | number) => {
    const token = user.token;
    const userId = user.user._id;
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
    if (confirm) {
      const response = await deleteProduct(id, token, userId);
      if (response.status === 200) {
        getProduct(1);
      }
    }
  };

  const handleStatus = async (status: any, id: any) => {
    const token = user.token;
    const userId = user.user._id;
    console.log(status === 1 ? 0 : 1);
    const { data } = await updateProduct(
      id,
      userId,
      { status: status === 1 ? 0 : 1 },
      token
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, product) => (
        <Link to={`/admin/product/${product._id}`}>{text}</Link>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => {
        return (
          <p style={{ width: "150px" }}>{`${new Intl.NumberFormat(
            "en-US"
          ).format(price)} VNĐ`}</p>
        );
      },
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => {
        return (
          <Space size="middle">
            <img
              style={{ width: "40%" }}
              src={`http://localhost:8000/${image}`}
              alt=""
            />
          </Space>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status, product) => (
        <div style={{ minWidth: "80px" }}>
          <Space size="middle">
            {status === 1 ? (
              <Switch
                checkedChildren="Ẩn"
                unCheckedChildren="Hiện"
                defaultChecked
                onChange={() => handleStatus(status, product._id)}
              />
            ) : (
              <Switch
                checkedChildren="Ẩn"
                unCheckedChildren="Hiện"
                onChange={() => handleStatus(status, product._id)}
              />
            )}
          </Space>
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, product) => (
        <Space size="middle">
          <Link
            to={`/admin/product/${product._id}/edit`}
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            <ButtonAdmin bgColor={"bg-lightBlue-500"}>Edit</ButtonAdmin>
          </Link>
        </Space>
      ),
    },
    // {
    //   title: "Detail",
    //   key: "Detail",
    //   render: (text, product) => (
    //     <Space size="middle">
    //       <Link
    //         to={`/admin/product/${product._id}`}
    //         className="text-blue-600 dark:text-blue-500 hover:underline"
    //       >
    //         <ButtonAdmin bgColor={"bg-lightBlue-500"}>Detail</ButtonAdmin>
    //       </Link>
    //     </Space>
    //   ),
    // },
    {
      title: "Action",
      key: "action",
      render: (text, product) => (
        <Space size="middle">
          <button
            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            style={{ padding: "16px 20px", fontSize: "16px" }}
            onClick={() => handleDelete(product._id)}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className="w-100">
      <Link to="/admin/product/add">
        <ButtonAdmin bgColor="bg-lightBlue-500">Add</ButtonAdmin>
      </Link>
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={products}
        pagination={{
          pageSize: 5,
          total: 20,
          onChange: (page) => {
            getProduct(page);
          },
        }}
      />
    </div>
  );
}

export default ProductsAdmin;
