import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { json } from "stream/consumers";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

import { useAppDispatch } from "../../store/user/hook";

import { signin } from "../../store/user/authSlice";

import ButtonAdmin from "../UI/ButtonAdmin";
import CardForm from "../UI/CardForm";

import classes from "./Login.module.css";
function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  type Form = {
    email: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    handlerSb(data);
  };

  const handlerSb = (data: any) => {
    dispatch(signin(data));

    navigate("/");
  };

  return (
    <div className={classes.container}>
      <div className={classes.login}>
        <div className={classes.loginLeft}>
          <img
            src="https://hoanghamobile.com/Content/web/img/login-bg.png"
            alt=""
          />
        </div>
        <div className="bg-white">
          <div className={classes.loginForm}>
            <CardForm handleSb={handleSubmit} onSb={onSubmit}>
              <h1 className={classes.loginTitle}>Đăng nhập</h1>
              <p className={classes.loginP}>
                Đây là lần đầu bạn đăng nhập bằng tài khoản Google. Bạn cần bổ
                xung thêm 1 số thông tin để hoàn tất quá trình đăng ký. Chú ý
                các nội dung có dấu * bạn cần phải nhập
              </p>
              <div className="p-8">
                <div className="mb-4 form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label inline-block mb-2 text-gray-700 text-base"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", {
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
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span
                      style={{
                        color: "red",
                        paddingLeft: "10px",
                        fontSize: "14px",
                      }}
                    >
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="mb-4 form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", {
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
                    placeholder="Password"
                    type="password"
                  />
                  {errors.password && (
                    <span
                      style={{
                        color: "red",
                        paddingLeft: "10px",
                        fontSize: "14px",
                      }}
                    >
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="flex justify-end">
                  <ButtonAdmin bgColor={"bg-lightBlue-500"}>
                    Đăng nhập
                  </ButtonAdmin>
                </div>
              </div>
            </CardForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
