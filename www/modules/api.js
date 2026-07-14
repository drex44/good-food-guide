import diseases from "../data/diseases.json";

export const getAllDiseases = async () => {
  return diseases.filter(disease => disease.valid);
};

export const getDisease = async searchKey => {
  return diseases.filter(
    disease => disease.valid && disease.searchKey === searchKey
  );
};
