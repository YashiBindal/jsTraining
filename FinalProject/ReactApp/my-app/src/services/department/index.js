import { instance } from "services";

export const getDepts = async () => {
  try {
    let response = await instance.get(`/api/departments`);
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};

export const getDept = async (id) => {
  try {
    let response = await instance.get(`/api/department/${id}`);
    return response.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};

export const createDept = async (dept) => {
  try {
    let response = await instance.post(`/api/department`, dept, {
      "Content-Type": "application/json",
    });
    return response.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};

export const updateDept = async (dept) => {
  try {
    let response = await instance.put(`/api/department/${dept.DeptNo}`, dept, {
      "Content-Type": "application/json",
    });
    return response.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};

export const deleteDept = async (id) => {
  try {
    let response = await instance.delete(`/api/department/${id}`);
    return response.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};
