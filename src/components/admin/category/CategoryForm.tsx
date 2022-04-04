import { spawn } from "child_process";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../store/user/hook";

import {
  createCategory,
  getCategory,
  updateCategory,
} from "../../../api/category";
import CardForm from "../../UI/CardForm";
import ButtonAdmin from "../../UI/ButtonAdmin";
function CategoryForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useAppSelector(({ auth }) => auth.user);

  type Form = {
    name: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    handleSubmitCategory(data);
  };

  const handleSubmitCategory = async (data: Form) => {
    let response: any = {};
    if (id) {
      console.log("update");
      response = await updateCategory(id, user.user._id, user.token, {
        name: data.name,
      });
    } else {
      console.log("add");
      response = await createCategory(user.user._id, user.token, data);
    }
    if (response.status == 200) {
      navigate("/admin/category");
    }
  };

  const handleGetCategory = async (id: string) => {
    try {
      const response = await getCategory(id);

      if (response.status === 200) {
        reset(response.data.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(id);

    handleGetCategory(id);
  }, [id]);

  return (
    <div>
      <h1 className="text-4xl text-bg-lightBlue-500 font-bold">Add Category</h1>
      <CardForm handleSb={handleSubmit} onSb={onSubmit}>
        <div className="p-8">
          <div className="mb-4 form-group">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Name category
            </label>
            <input
              {...register("name", {
                required: "Trường này không được bỏ trống",
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
          <div className="flex justify-end">
            <ButtonAdmin bgColor={"bg-lightBlue-500"}>Submit</ButtonAdmin>
          </div>
        </div>
      </CardForm>
    </div>
    // <div>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <div>
    //       <input
    //         type="text"
    //         placeholder="name"
    //         {...register("name", {
    //           required: "Trường này không được bỏ trống",
    //         })}
    //       />
    //       {errors.name && (
    //         <span style={{ color: "red" }}>{errors.name.message}</span>
    //       )}
    //     </div>
    //     <button>Submit</button>
    //   </form>
    // </div>
  );
}

export default CategoryForm;
