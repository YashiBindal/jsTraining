import { instance } from "services";

export const getEmps = async () => {
  try {
    let response = await instance.get(`/api/employees`);
    return response.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};

// getting single record based on id
export const getEmp = async (id) => {
  try {
    let response = await instance.get(`/api/employee/${id}`);
    return response.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};

export const createEmp = async (emp) => {
  try {
    const response = await instance.post(`/api/employee`, emp, {
      "Content-Type": "application/json",
    });
    // console.log("response", response);
    return response.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};

export const updateEmp = async (emp) => {
  try {
    let response = await instance.put(`/api/employee/${emp.EmpNo}`, emp, {
      "Content-Type": "application/json",
    });
    return response.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};

export const deleteEmp = async (id) => {
  try {
    let response = await instance.delete(`/api/employee/${id}`);
    return response.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};
