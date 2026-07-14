import fetch from "isomorphic-unfetch";

const baseUrl = "/api";

export const getAllDiseases = async () => {
  try {
    const res = await fetch(baseUrl + "/getAllDiseases");
    const data = await res.json();
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
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
