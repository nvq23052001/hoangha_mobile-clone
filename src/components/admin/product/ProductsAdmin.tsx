import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../../store/user/hook";

import { getAll, deleteProduct } from "../../../api/product";
import ButtonAdmin from "../../UI/ButtonAdmin";
import Status from "../../UI/Status";
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
  const token = user.token;
  const userId = user.user._id;

  const [products, setProducts] = useState<product[]>([]);

  const getProduct = async () => {
    console.log(userId);
    const { data } = await getAll();
    setProducts(data);
  };

  useEffect(() => {
    if (user) {
      getProduct();
    }
  }, []);

  const handleDelete = async (id: string | number) => {
    const token = user.token;
    const userId = user.user._id;
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
    if (confirm) {
      const response = await deleteProduct(id, token, userId);
      if (response.status === 200) {
        getProduct();
      }
    }
  };

  return (
    <div className="w-100">
      <Link to="/admin/product/add">
        <ButtonAdmin bgColor="bg-lightBlue-500">Add</ButtonAdmin>
      </Link>
      <table className="min-w-full w-100">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th
              scope="col"
              className=" text-centerpy-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400"
            >
              STT
            </th>
            <th
              scope="col"
              className="text-center py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400"
            >
              Product Name
            </th>
            <th
              scope="col"
              className="text-center py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400"
            >
              Price
            </th>
            <th
              scope="col"
              className="text-center py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400"
            >
              Image
            </th>
            <th
              scope="col"
              className="text-center py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400"
            >
              Status
            </th>
            <th
              scope="col"
              className="text-center py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400"
            >
              Category
            </th>
            <th scope="col" className="p-4 text-center">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="p-4 text-center">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          {products.map((product, i) => {
            return (
              <tr
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                key={product._id}
              >
                <td className="text-center py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {i + 1}
                </td>
                <td className="text-center py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.name}
                </td>
                <td className="text-center py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                  {product.price} VND
                </td>
                <td className="text-center py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                  <img src={product.img} alt="" />
                </td>
                {/* <td className="py-4 px-6 text-sm font-medium text-gray-500  dark:text-white">
                  {product.description}
                </td> */}
                <td className="text-center py-4 px-6 text-sm font-medium text-gray-500  dark:text-white">
                  {product.status === 1 && <Status>Hiện</Status>}
                  {product.status === 0 && <Status>Ẩn</Status>}
                </td>
                <td className="text-center py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                  {product.category.name}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
                <td className="text-center py-4 px-6 text-sm font-medium whitespace-nowrap">
                  <Link
                    to={`/admin/product/${product._id}/edit`}
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <ButtonAdmin bgColor={"bg-lightBlue-500"}>Edit</ButtonAdmin>
                  </Link>
                </td>
                <td className="text-center py-4 px-6 text-sm font-medium whitespace-nowrap">
                  <div className="text-blue-600 dark:text-blue-500 hover:underline">
                    <button
                      className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-lightBlue-200"></div>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsAdmin;
