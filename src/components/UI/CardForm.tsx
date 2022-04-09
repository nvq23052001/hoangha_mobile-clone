import React from "react";

interface Props {
  children: React.ReactNode;
  handleSb: any;
  onSb: any;
}

function CardForm({ children, handleSb, onSb }: Props) {
  return (
    <div className="block p-6 bg-white max-w-sm ">
      <form onSubmit={handleSb(onSb)} encType="multipart/form-data">
        <div className="form-group">{children}</div>
      </form>
    </div>
  );
}

export default CardForm;
