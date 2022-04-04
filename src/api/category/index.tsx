import instance from "../instance";

export const getCategories = () => {
  return instance.get("api/category");
};

export const getCategory = (id: any) => {
  return instance.get(`api/category/${id}`);
};

export const deleteCategory = (id: string | number, userId: any, token) => {
  return instance.delete(`api/category/${id}/${userId}`, {
    headers: { Authorization: "Bearer " + token },
  });
};

export const updateCategory = (
  id: string | number,
  userId: any,
  token: string,
  data: any
) => {
  return instance.put(`api/category/${id}/${userId}`, data, {
    headers: { Authorization: "Bearer " + token },
  });
};

export const createCategory = (userId: any, token: string, data: any) => {
  return instance.post(`api/category/${userId}`, data, {
    headers: { Authorization: "Bearer " + token },
  });
};
