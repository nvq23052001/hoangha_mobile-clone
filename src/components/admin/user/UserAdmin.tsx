import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Table, Tag, Space } from "antd";
import "antd/dist/antd.css";

import ButtonAdmin from "../../UI/ButtonAdmin";
import { getUsers } from "../../../api/user";

type UserType = {
  _id: string;
  name: string;
  email: string;
  role: number;
};

function UserAdmin() {
  const [users, setUsers] = useState<UserType[]>([]);

  const handleCategories = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    console.log(id);
  };

  useEffect(() => {
    handleCategories();
  }, []);

  console.log(users);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => text,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => (
        <Space size="middle">
          <p>{email}</p>
        </Space>
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => {
        return (
          <Space size="middle">
            {role === 1 ? (
              <button
                style={{
                  border: "1px solid #333",
                  backgroundColor: "#00483d",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  color: "#fff",
                }}
              >
                Member
              </button>
            ) : (
              <button
                style={{
                  border: "1px solid #0284c7",
                  backgroundColor: "#0284c7",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  color: "#fff",
                }}
              >
                Admin
              </button>
            )}
          </Space>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, user) => (
        <Space size="middle">
          <button
            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            style={{ padding: "5px 10px", fontSize: "12px" }}
            onClick={() => handleDelete(user._id)}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={users}
        pagination={{
          pageSize: 4,
          total: 4,
        }}
      />
      {/* <table className="min-w-full ">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th
              scope="col"
              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
            >
              STT
            </th>
            <th
              scope="col"
              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
            >
              Category Name
            </th>
            <th scope="col" className="p-4">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="p-4">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          {categories.map((category, i) => {
            return (
              <tr
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                key={category._id}
              >
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {i + 1}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {category.name}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <Link
                    to={`/admin/category/${category._id}/edit
                    `}
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <ButtonAdmin bgColor="bg-lightBlue-500">
                      <Link to={`/admin/category/${category._id}/edit`}>
                        Edit
                      </Link>
                    </ButtonAdmin>
                  </Link>
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <div className="text-blue-600 dark:text-blue-500 hover:underline">
                    <button
                      className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleDelete(category._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
}

export default UserAdmin;
