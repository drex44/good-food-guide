module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/terms": { page: "/terms" },
      "/foodDetails/banana": {
        page: "/foodDetails",
        query: { food: "banana" }
      },
      "/disease/viral-fever": {
        page: "/disease",
        query: { disease: "viral-fever" }
      },
      "/disease/headache": {
        page: "/disease",
        query: { disease: "headache" }
      },
      "/disease/flu": {
        page: "/disease",
        query: { disease: "flu" }
      },
      "/disease/common-cold": {
        page: "/disease",
        query: { disease: "common-cold" }
      },
      "/disease/hurts-to-swallow": {
        page: "/disease",
        query: { disease: "hurts-to-swallow" }
      },
      "/disease/runny-nose": {
        page: "/disease",
        query: { disease: "runny-nose" }
      },
      "/disease/gastritis": {
        page: "/disease",
        query: { disease: "gastritis" }
      },
      "/disease/stress": {
        page: "/disease",
        query: { disease: "stress" }
      },
      "/disease/high-blood-pressure": {
        page: "/disease",
        query: { disease: "high-blood-pressure" }
      },
      "/disease/constipation": {
        page: "/disease",
        query: { disease: "constipation" }
      },
      "/disease/diabetes": {
        page: "/disease",
        query: { disease: "diabetes" }
      },
      "/disease/menstrual-cramps": {
        page: "/disease",
        query: { disease: "menstrual-cramps" }
      }
    };
  }
};
