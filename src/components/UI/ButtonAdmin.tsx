import React from "react";
import clsx from "clsx";

interface Props {
  children: string | React.ReactNode;
  bgColor: string;
}

type MyComponentProps = React.PropsWithChildren<{}>;

function ButtonAdmin({ children, bgColor }: Props) {
  const classes = clsx(
    bgColor,
    "text-white active:bg-lightBlue-600 font-bold uppercase text-sx px-6 py-4 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
  );

  return <button className={classes}>{children}</button>;
}

export default ButtonAdmin;
