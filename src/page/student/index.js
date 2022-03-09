import React from "react";
import "./student.module.css";
function Student() {
  return (
    <table>
      <tr>
        <th>Tên</th>
        <th>Tuổi</th>
        <th>Sđt</th>
        <th>Email</th>
        <th>Image</th>
        <th></th>
      </tr>
      <tr>
        <td>Nguyễn văn Quyết</td>
        <td>21</td>
        <td>0232132213</td>
        <td>nvquyet23052001@gmail.com</td>
        <td>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt=""
          />
        </td>
        <button>Delete</button>
      </tr>
      <tr>
        <td>Nguyễn Văn Linh</td>
        <td>21</td>
        <td>0829219954</td>
        <td>linhvip@gmail.com</td>
        <td>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt=""
          />
        </td>
        <button>Delete</button>
      </tr>
      <tr>
        <td>Nguyễn văn Tuấn</td>
        <td>21</td>
        <td>078215214</td>
        <td>tuannvph11123@gmail.com</td>
        <td>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt=""
          />
        </td>
        <button>Delete</button>
      </tr>
    </table>
  );
}

export default Student;
