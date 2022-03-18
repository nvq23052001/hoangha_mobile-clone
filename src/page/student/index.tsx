import React from "react";
import "./student.module.css";

type row = {
  name: string;
  age: string;
  address: string;
};

type TableProps = {
  rows: row[];
};

function Student({ rows }: TableProps) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.address}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Student;
