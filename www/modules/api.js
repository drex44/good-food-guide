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
  // Food names are inconsistently cased in the data (e.g. "apples" vs
  // "Apples"); dedupe case-insensitively so the browse list doesn't show
  // the same food twice, keeping whichever casing was seen first.
  const foodNames = new Map();
  diseases
    .filter(disease => disease.valid)
    .forEach(disease =>
      allFoodsOf(disease).forEach(food => {
        const key = food.name.toLowerCase();
        if (!foodNames.has(key)) foodNames.set(key, food.name);
      })
    );
  return [...foodNames.values()].sort((a, b) => a.localeCompare(b));
};

export const getDiseasesByFood = async foodName => {
  const query = foodName.trim().toLowerCase();
  return diseases.filter(
    disease =>
      disease.valid &&
      allFoodsOf(disease).some(food => food.name.toLowerCase() === query)
  );
};
