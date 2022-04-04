import React from "react";
import { useEffect, useState } from "react";
import { login } from "../../../api/user";
import { useAppSelector } from "../../../store/user/hook";

function ProductAdmin() {
  const user = useAppSelector(({ auth }) => auth.user);

  return <div>ProductAdmin</div>;
}

export default ProductAdmin;
