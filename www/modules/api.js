import fetch from "isomorphic-unfetch";
import FoodData from "../components/dataList";

// const baseUrl = "http://localhost:3001";
const baseUrl = "https://good-food-guide.now.sh/api";

export const getAllDiseases = async () => {
  try {
    const res = await fetch(baseUrl + "/getAllDiseases");
    const data = await res.json();
    console.log("res", data);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getDisease = async disease => {
  try {
    const res = await fetch(baseUrl + `/getDisease?searchKey=${disease}`);

    const data = await res.json();
    console.log("res", data);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
