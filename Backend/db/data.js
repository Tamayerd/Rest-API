const DataModel = require("../models/data");

// Veri oluşturma
const newData = new DataModel({
  response: {
    scriptResult: [
      {
        key: "120",
        value: {
         " 120.01": "2206418.32",
        },
      },
      {
        key: "153",
        value: {
          "153.01": {
            "153.01.0018": "47271.43",
            "153.01.0008": "1322.22",
            "153.01.0000": "86",
            total: "48679.65",
          },
        },
      },
    ],
    scriptError: "0",
    modId: "4",
  },
  messages: [
    {
      code: "0",
      message: "OK",
    },
  ],
});

const seedInitialData = async () => {
  try {
    await DataModel.create(newData);
    console.log("Başlangıç verileri başarıyla eklendi .");
  } catch (error) {
    console.error("Başlangıç verilerini eklerken hata oluştu ", error);
  }
};

module.exports = seedInitialData;
