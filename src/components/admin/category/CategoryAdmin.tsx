import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../../store/user/hook";

import ButtonAdmin from "../../UI/ButtonAdmin";
import { getCategories, deleteCategory } from "../../../api/category";

type Categories = {
  _id: string;
  name: string;
};

function CategoryAdmin() {
  const [categories, setCategories] = useState<Categories[]>([]);
  const user = useAppSelector(({ auth }) => auth.user);

  const handleCategories = async () => {
    const { data } = await getCategories();
    setCategories(data);
  };

  const handleDelete = async (id: string) => {
    if (user) {
      await deleteCategory(id, user.user._id, user.token);
      handleCategories();
    }
  };

  useEffect(() => {
    handleCategories();
  }, []);

  return (
    <div>
      <Link to="/admin/category/add">
        <ButtonAdmin bgColor="bg-lightBlue-500">Add</ButtonAdmin>
      </Link>
      <table className="min-w-full ">
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
      </table>
    </div>
  );
}

export default CategoryAdmin;
