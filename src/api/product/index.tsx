import instance from "../instance";

export const getAll = () => {
  return instance.get(`api/products`);
};

export const createProduct = (data: any, token: any, userId: string) => {
  return instance.post(`api/products/${userId}`, data, {
    headers: { Authorization: "Bearer " + token },
  });
};

export const deleteProduct = (
  id: string | number,
  token: string,
  userId: string
) => {
  return instance.delete(`api/product/${id}/${userId}`, {
    headers: { Authorization: "Bearer " + token },
  });
};
export const updateProduct = (
  id: string | number,
  userId: string,
  data: any,
  token: any
) => {
  return instance.put(`api/product/${id}/${userId}`, data, {
    headers: { Authorization: "Bearer " + token },
  });
};
