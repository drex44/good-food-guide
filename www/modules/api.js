import diseases from "../data/diseases.json";

export const getAllDiseases = async () => {
  return diseases.filter(disease => disease.valid);
};

export const getDisease = async searchKey => {
  return diseases.filter(
    disease => disease.valid && disease.searchKey === searchKey
  );
};

const allFoodsOf = disease => [
  ...disease.goodFoods.vegan,
  ...disease.goodFoods.nonVegan
];

export const getAllFoods = async () => {
  const foodNames = new Set();
  diseases
    .filter(disease => disease.valid)
    .forEach(disease =>
      allFoodsOf(disease).forEach(food => foodNames.add(food.name))
    );
  return [...foodNames].sort((a, b) => a.localeCompare(b));
};

export const getDiseasesByFood = async foodName => {
  const query = foodName.trim().toLowerCase();
  return diseases.filter(
    disease =>
      disease.valid &&
      allFoodsOf(disease).some(food => food.name.toLowerCase() === query)
  );
};
