import fetch from "isomorphic-unfetch";
import FoodData from "../components/dataList";

// const baseUrl = "http://localhost:3001";
const baseUrl = "https://good-food-guide.now.sh/api";

export const getAllDiseases = async () => {
  const res = await fetch(baseUrl + "/getAllDiseases");
  const data = await res.json();
  return data;
};

export const getDisease = async disease => {
  const res = await fetch(baseUrl + `/getDisease?searchKey=${disease}`);
  const data = await res.json();
  return data;
};
