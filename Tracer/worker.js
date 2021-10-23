const worker = (categorykey, algorithmkey) => {
  const GetAlgo = require("../hierarchy/getAlgorithms");
  const GA = GetAlgo();
  let obj = {};
  GA.forEach((element) => {
    if (element.key == categorykey) {
      obj = {
        ...obj,
        categoryKey: categorykey,
        categoryName: element.name,
      };
      element.algorithms.forEach((ele) => {
        if (ele.key == algorithmkey) {
          obj = {
            ...obj,
            algorithmKey: algorithmkey,
            algorithmName: ele.name,
            files: ele.files,
          };
        }
      });
    }
  });
  return obj;
};
module.exports = worker;
