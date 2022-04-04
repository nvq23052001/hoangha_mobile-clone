import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../store/user/hook";

import CardForm from "../../UI/CardForm";
import ButtonAdmin from "../../UI/ButtonAdmin";

import { getCategories } from "../../../api/category";
import { createProduct, updateProduct, getAll } from "../../../api/product";

function ProductForm() {
  type Form = {
    name: string;
    price: number;
    img: string;
    description: string;
    category: string;
    status: number;
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const user = useAppSelector(({ auth }) => auth.user);

  const [categories, setCategories] = useState<any>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      price: null,
      img: "",
      description: "",
      category: "",
      status: null,
    },
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data);
    handleSubmitProduct({ ...data, price: +data.price, status: +data.status });
  };

  const handleSubmitProduct = async (data: Form) => {
    let response: any = {};
    if (id) {
      console.log(data);
      response = await updateProduct(id, user.user._id, data, user.token);
    } else {
      console.log("add");
      response = await createProduct(data, user.token, user.user._id);
    }

    navigate("/admin/category");
  };

  const handleGetProducts = async () => {
    if (id) {
      const response = await getAll();
      if (response.status === 200) {
        reset(response.data[0]);
      }
    }
  };

  const handleCategories = async () => {
    const { data } = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    handleCategories();
  }, []);
  useEffect(() => {
    handleGetProducts();
  }, [id]);

  return (
    <div>
      <h1 className="text-4xl text-bg-lightBlue-500 font-bold">Add product</h1>
      <CardForm handleSb={handleSubmit} onSb={onSubmit}>
        <div className="p-8">
          <div className="mb-4 form-group">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Product name
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Bat buoc phai nhap truong nay",
                },
                minLength: { value: 5, message: "It nhat 5 ky tu" },
              })}
              className="form-control
        block
        w-full
        px-4
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name category"
            />
            {errors.name && (
              <span
                style={{ color: "red", paddingLeft: "10px", fontSize: "14px" }}
              >
                {errors.name.message}
              </span>
            )}
          </div>

          {/*  */}
          <div className="mb-4 form-group">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Price
            </label>
            <input
              {...register("price", {
                required: "Trường này không được bỏ trống",
              })}
              className="form-control block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              placeholder="Name category"
            />
            {errors.price && (
              <span
                style={{ color: "red", paddingLeft: "10px", fontSize: "14px" }}
              >
                {errors.price.message}
              </span>
            )}
          </div>
          <div className="mb-4 form-group">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Image
            </label>
            <input
              {...register("img", {
                required: "Trường này không được bỏ trống",
              })}
              className="form-control
                         block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name category"
            />
            {errors.img && (
              <span
                style={{ color: "red", paddingLeft: "10px", fontSize: "14px" }}
              >
                {errors.img.message}
              </span>
            )}
          </div>
          <div className="mb-4 form-group">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Description
            </label>
            {/* <textarea
              id="desc"
              name="desc"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Description"
            ></textarea> */}
            <textarea
              {...register("description", {
                required: "Trường này không được bỏ trống",
              })}
              className="form-control
                         block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name category"
            />
            {errors.description && (
              <span
                style={{ color: "red", paddingLeft: "10px", fontSize: "14px" }}
              >
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="mb-4 form-group">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Category
            </label>
            <select
              {...register("category", {
                required: "Trường này không được bỏ trống!",
              })}
              className="form-control
                         block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name category"
            >
              {categories.map((cate) => {
                return (
                  <option value={cate._id} key={cate._id}>
                    {cate.name}
                  </option>
                );
              })}
            </select>
            {errors.category && (
              <span
                style={{ color: "red", paddingLeft: "10px", fontSize: "14px" }}
              >
                {errors.category.message}
              </span>
            )}
          </div>

          <div className="mb-4 form-group	">
            <label htmlFor="">Status</label>
            <div className="flex justify-evenly">
              <label htmlFor="status">
                Hiển thị
                <input
                  {...register("status")}
                  type="radio"
                  name="status"
                  value="1"
                  className="form-label inline-block mb-2 text-gray-700"
                />
              </label>
              <label htmlFor="field-sun">
                Ẩn
                <input
                  {...register("status")}
                  type="radio"
                  name="status"
                  value="0"
                  id="field-sun"
                />
              </label>
            </div>

            {errors.status && (
              <span
                style={{ color: "red", paddingLeft: "10px", fontSize: "14px" }}
              >
                {errors.status.message}
              </span>
            )}
          </div>
          <div className="flex justify-end">
            <ButtonAdmin bgColor={"bg-lightBlue-500"}>Submit</ButtonAdmin>
          </div>
        </div>
      </CardForm>
    </div>
  );
}

export default ProductForm;
