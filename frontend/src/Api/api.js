import axios from "axios";
const BaseUrl = "http://localhost:8081";

const URL = (End_Point) => `${BaseUrl}${End_Point}`;
const END_POINT = {
  GET_USERS: () => "/get-users",
  DELETE_USER: () => "/delete-user",
  UPDATE_USER: () => "/update-user",
  CREATE_USER: () => "add-user",
};

export const getUsers = async () => {
  try {
    const { data } = await axios.get(URL(END_POINT.GET_USERS()));
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = async (id) => {
  try {
    const { data } = await axios.delete(URL(END_POINT.DELETE_USER()),{
      params:{id}
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
