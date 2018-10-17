module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/terms": { page: "/terms" },
      "/foodDetails/viral-fever": {
        page: "/foodDetails",
        query: { disease: "viral-fever" }
      },
      "/foodDetails/headache": {
        page: "/foodDetails",
        query: { disease: "headache" }
      },
      "/foodDetails/flu": {
        page: "/foodDetails",
        query: { disease: "flu" }
      },
      "/foodDetails/common-cold": {
        page: "/foodDetails",
        query: { disease: "common-cold" }
      },
      "/foodDetails/hurts-to-swallow": {
        page: "/foodDetails",
        query: { disease: "hurts-to-swallow" }
      },
      "/foodDetails/runny-nose": {
        page: "/foodDetails",
        query: { disease: "runny-nose" }
      },
      "/foodDetails/gastritis": {
        page: "/foodDetails",
        query: { disease: "gastritis" }
      },
      "/foodDetails/stress": {
        page: "/foodDetails",
        query: { disease: "stress" }
      },
      "/foodDetails/high-blood-pressure": {
        page: "/foodDetails",
        query: { disease: "high-blood-pressure" }
      },
      "/foodDetails/constipation": {
        page: "/foodDetails",
        query: { disease: "constipation" }
      },
      "/foodDetails/diabetes": {
        page: "/foodDetails",
        query: { disease: "diabetes" }
      },
      "/foodDetails/menstrual-cramps": {
        page: "/foodDetails",
        query: { disease: "menstrual-cramps" }
      }
    };
  }
};
